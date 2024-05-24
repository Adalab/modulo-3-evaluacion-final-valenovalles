
import { Link } from 'react-router-dom'

function Card({id, info }) {
  return (
    <div className='main__list--card'>
    <article>
        <Link to={`/detail/${info.id}`}>
        <img src={info.image} alt="" />
        <h3 className='title'>{info.name}</h3>
        <h4 className='title'>{info.species}</h4>
        </Link>
    </article>
    </div>
  )
}

export default Card