import "./SearchBar.css";

const SearchBar = ({setFilterWord}) => {
    return (
        <input type="text" id="search" className="searchbar" 
          onChange={() => setFilterWord (search.value.toLowerCase())} 
           placeholder="Busca por nombre o por fecha..."/>
    )
};

export default SearchBar