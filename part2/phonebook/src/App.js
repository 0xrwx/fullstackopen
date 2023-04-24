import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => 
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App