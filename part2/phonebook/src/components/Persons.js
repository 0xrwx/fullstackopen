const Persons = ({ personNumbers }) => (
  <div>
    {personNumbers.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      )}
  </div>
)

export default Persons