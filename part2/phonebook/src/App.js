import { useState } from 'react'

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
      number: newNumber
    }

    let same = false;

    for (let person of persons) {
      if ((JSON.stringify(personObject.name) === JSON.stringify(person.name))) {
        console.log("OUch", person)
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

  const handleSearch = (event) => {
    console.log(event.target.value)
    setFind(event.target.value)
  }

  const numbersToShow = (find === '')
    ? persons 
    : persons.filter(person => 
        person.name.toLowerCase().includes(find.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input maxLength="50" value={find} onChange={handleSearch}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            pattern="[a-zA-Z]+ [a-zA-Z]+"
            maxLength="50"
            required
            value={newName} 
            onChange={event => setNewName(event.target.value)} 
          />
        </div>
        <div>
          number: <input 
            pattern="[0-9\-]*"
            maxLength="15"
            required
            value={newNumber}
            onChange={event => setNewNumber(event.target.value)} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbersToShow.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App