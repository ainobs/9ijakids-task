const SearchBar = ({ searchChange, search }) => {
    return ( 
    <div className="pa2">
        <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search games"
            onChange={searchChange}
        />
    </div> );
}
 
export default SearchBar;