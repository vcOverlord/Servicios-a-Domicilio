import "./SearchBar.css";

const SearchBar = ({setFilterWord}) => {
    return (
        <input type="text" id="search" className="searchbar" 
          onChange={() => setFilterWord (search.value.toLowerCase())} placeholder="Busca por nombre, fecha o por hora..."/>
    )
};

export default SearchBar