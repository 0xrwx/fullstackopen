const Filter = ({ searchValue, filterHandler }) => (
  <div>
    filter shown with <input 
      maxLength="50" 
      value={searchValue} 
      onChange={filterHandler}
    />
  </div>
)

export default Filter