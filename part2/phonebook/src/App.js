import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [find, setFind] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(persons => setPersons(persons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    let same = false;

    for (let person of persons) {
      if ((JSON.stringify(personObject.name) === JSON.stringify(person.name))) {
        const isConfirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)

        if (isConfirm) {
          personsService.update(person.id, personObject)
          personsService
            .getAll()
            .then(response => 
              setPersons(response)
            )
        }
        setNewName('')
        setNewNumber('')
        same = true; 
      }
    }

    if (same === false) {
      personsService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const filterHandler = event => 
    setFind(event.target.value)

  const handleNameChange = event =>
    setNewName(event.target.value)

  const handleNumberChange = event =>
    setNewNumber(event.target.value)

  const handleDelete = (id, name) => {
    const isConfirm = window.confirm(`Delete ${name} ?`)

    if (isConfirm) {
      personsService.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const numbersToShow = (find === '')
    ? persons 
    : persons.filter(person => 
        person.name.toLowerCase().includes(find.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={find} filterHandler={filterHandler}/>
      <h3>add a new</h3>
      <PersonForm 
        handleSubmit={addPerson} 
        newNameValue={newName} 
        newNumberValue={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
      />
      <h3>Numbers</h3>
      <Persons personNumbers={numbersToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App