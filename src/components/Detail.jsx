
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Detail({getInfo}) {

    //useParams devuelve un objeto con la variable de la ruta dinámica. Es lo mismo que coger el objeto completo y en getInfo enviar objeto.id

    const {id} = useParams()
    
    const data = getInfo(id)


  return (

    data? 
    <div className='main__detail'>
    <Link to="/">Volver a la home</Link>
    <article className='character'>
    <h2>Detalle de tu personaje seleccionado</h2>
    <img src={data.image} alt="" />
    <h4>Status:{data.status}</h4>
    <h4>Species:{data.species}</h4>
    <h4>Origin:{data.origin}</h4>
    <h4>Episodes:{data.episodes}</h4>
    </article>
    </div>
    : <p>Este personaje no existe</p>
  )
}

export default Detail