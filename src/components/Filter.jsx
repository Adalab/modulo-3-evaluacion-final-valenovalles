
function Filter({changeInputFilter , filter, changeSelectFilter, filterStatus, changeFilterSpecie, filterSpecie}) {

    const handleInput=(ev)=>{
        const valueInput= ev.target.value
        changeInputFilter (valueInput);
    }

    const handleSelect=(ev)=>{
      const valueSelect = ev.target.value
      changeSelectFilter(valueSelect)
    }

    const handleSelectSpecie=(ev)=>{
      const valueSelectSpecie = ev.target.value
      changeFilterSpecie (valueSelectSpecie)
    }
    //CONTROLAR FORMULARIO
  return (
    <> 
    <form className="main__form"action="" onSubmit={(ev)=>{ev.preventDefault()}}>
      <div className="main__form--div">
        <label htmlFor="">¿Qué personaje buscas?</label>
        <input value= {filter} placeholder="Escribe el nombre aquí" type="text" name='search' id='search'  onChange={handleInput}/>
      </div>

      <div className="main__form--div">
        <label htmlFor="">¿Está vivo o muerto?</label>
        <select value={filterStatus} name="status" id="status" onChange={handleSelect} >
          <option value="">Select</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="main__form--div">
      <label htmlFor="">¿Qué especie buscas?</label>
        <select value={filterSpecie} name="status" id="status" onChange={handleSelectSpecie} >
          <option value="">Select</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
        

    </form>
    </>
  )
}

export default Filter