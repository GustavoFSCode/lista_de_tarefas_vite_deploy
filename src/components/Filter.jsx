const Filter = ({filter, setFilter, setSort, setCategoryFilter}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Complete">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
            <div className="category-buttons">
                <p>Categoria:</p>
                <button onClick={() => setCategoryFilter("All")}>Todas</button>
                <button onClick={() => setCategoryFilter("Trabalho")}>Trabalho</button>
                <button onClick={() => setCategoryFilter("Pessoal")}>Pessoal</button>
                <button onClick={() => setCategoryFilter("Estudos")}>Estudos</button>
                <button onClick={() => setCategoryFilter("Lazer")}>Lazer</button>
                
            </div>
        </div>
    </div>
  )
}

export default Filter