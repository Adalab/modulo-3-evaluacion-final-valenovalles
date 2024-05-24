function getDataApi(){


    return fetch (" https://rickandmortyapi.com/documentation/#get-all-characters")
    .then((response)=>response.json())
    .then ((data)=>{
        const newArrayData = data.results.map((characther)=>{
            return{
                id: characther.id,
                name: characther.name,
                status: characther.status, 
                species: characther.species,
                origin: characther.origin.name,
                image: characther.image,
                episodes: characther.episode.length
            }
        })
        return newArrayData
    })
}

export default getDataApi;