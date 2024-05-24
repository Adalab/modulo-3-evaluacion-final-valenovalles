
function Filter({changeInputFilter , filter, changeSelectFilter, filterStatus, changeFilterSpecie, filterSpecie, changeReset}) {

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

    const handleReset=()=>{
      console.log("click")
      changeReset()
    }
    //CONTROLAR FORMULARIO
  return (
    <> 
    <form className="main__form"action="" onSubmit={(ev)=>{ev.preventDefault()}}>
      <div className="main__form--div">
        <label htmlFor="">¿Who are you looking for?</label>
        <input value= {filter} placeholder="Write the name" type="text" name='search' id='search'  onChange={handleInput}/>
      </div>

      <div className="main__form--div">
        <label htmlFor="">¿Dead or Alive?</label>
        <select value={filterStatus} name="status" id="status" onChange={handleSelect} >
          <option value="">Select</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="main__form--div">
      <label htmlFor="">¿Human or Alien?</label>
        <select value={filterSpecie} name="status" id="status" onChange={handleSelectSpecie} >
          <option value="">Select</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        </div>

        <div className="main__form--div back reset">
          <a onClick={handleReset} href="">Reset your search</a>
      </div>
        

    </form>
    </>
  )
}

export default Filter