import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [find, setFind] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    let same = false;

    for (let person of persons) {
      if ((JSON.stringify(personObject.name) === JSON.stringify(person.name))) {
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
        same = true; 
      }
    }

    if (same === false) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const filterHandler = event => 
    setFind(event.target.value)

  const handleNameChange = event =>
    setNewName(event.target.value)

  const handleNumberChange = event =>
    setNewNumber(event.target.value)

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
      <Persons personNumbers={numbersToShow} />
    </div>
  )
}

export default App