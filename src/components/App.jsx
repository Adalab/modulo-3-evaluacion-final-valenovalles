import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../styles/App.scss"
import { useEffect } from "react";
import getDataApi from "../services/api"
import List from "./List";
import Filter from "./Filter";
import Detail from "./Detail";
import NotFound from "./NotFound";
import NotExiste from "./NotExiste";
import Header from "./Header";

function App() {

  const [listCharacters, setListCharacters] = useState([])
  const [filter, setFilter]= useState("")
  const [filterStatus, setFilterStatus] = useState("")
  const [filterSpecie, setFilterSpecie] = useState("")
  const [reset, setReset] = useState ("")


  useEffect (()=>{
    getDataApi().then((newArrayData) =>{
      setListCharacters(newArrayData)
    })

  }, [])

  function changeInputFilter (valueInput){
    setFilter(valueInput)
  }

  function changeSelectFilter (valueSelect){
    setFilterStatus(valueSelect)
  }

  function changeFilterSpecie (valueSelectSpecie){
    setFilterSpecie (valueSelectSpecie)
  }

  function changeReset (){
    setFilter ("");
  }
  
  //FILTRO ANIDADO


    const filteredCharacters = listCharacters
      .filter((character) => { 
        return character.name.toLowerCase().includes(filter.toLowerCase());
    })
      .filter ((character) => { 
        return filterStatus ? filterStatus === character.status : true})
        .filter ((character) => { 
          return filterSpecie ? filterSpecie === character.species : true})
    
    
   
 


  // const filteredCharacters = listCharacters.filter(character =>
  //   character.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // tengo hacer un find para buscar en el array lischaracter el personaje cuyo id es igual al que recibimos por parametro
  function getInfo(id){
    const numericId = Number(id);

    const detailCharacter = listCharacters.find((item)=> item.id === numericId);
    return detailCharacter;
  }
  

 
  return (
    <div className="main">
      <Header/>
      <Filter changeInputFilter={changeInputFilter} filter={filter} changeSelectFilter={changeSelectFilter} filterStatus={filterStatus} filterSpecie={filterSpecie} changeFilterSpecie={changeFilterSpecie} changeReset={changeReset}/>
  
      <Routes>
        <Route path="/" element={<List listCharacters={filteredCharacters} changeReset={changeReset} />} />
        <Route path="/detail/:id" element={<Detail getInfo={getInfo}/>}/>
        <Route path="*" element={<><h2>Este personaje no existe</h2> <Link to="/">Volver a la home</Link></>}/>
      </Routes>
    </div>
  );
}

export default App;