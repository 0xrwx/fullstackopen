const PersonForm = ({ handleSubmit, newNameValue, newNumberValue, handleNameChange, handleNumberChange }) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input 
        pattern="[a-zA-Z]+ [a-zA-Z]+"
        maxLength="50"
        required
        value={newNameValue} 
        onChange={handleNameChange} 
      />
    </div>
    <div>
      number: <input 
        pattern="[0-9\-]*"
        maxLength="15"
        required
        value={newNumberValue}
        onChange={handleNumberChange} 
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm