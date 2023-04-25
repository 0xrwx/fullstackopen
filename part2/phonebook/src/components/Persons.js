const Persons = ({ personNumbers, handleDelete }) => (
  <div>
    {personNumbers.map(person => 
        <div key={person.name}>
          {person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
        </div>
      )}
  </div>
)

export default Persons