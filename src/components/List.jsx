import Card  from "../components/Card";
import NotFound from "./NotFound";

function List({listCharacters, changeReset }) {
  // si la longitud de listcaracther es 0 pinto notfound sino map
    const bodyList = listCharacters.map((singleCharacter, id)=><Card key={id} info={singleCharacter}/> )

  return (
    < div className="main__list">
    {bodyList.length === 0 ? <NotFound changeReset={changeReset} />: bodyList}
    </div>
  )
}

export default List