import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
export default function Country(props){
    const {name} = useParams()
    const [country , setCountry] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${name}`)
        .then(res=>res.json())
        .then(data=> setCountry(data))
    },[])


    const displayCountry = country.map((item , i)=>(
        <div className='country-section' key={i}>
            <div className='img-section'>

              <img src={item.flag} alt={item.name} className='img'/>  
            </div>
              <div className='country-details'>
                  <h2 className='country-name'>{item.name}</h2>
                  <div className='country-desc'>
                     <h5>Native Name: <span>{item.nativeName}</span></h5> 
                     <h5>Population: <span>{item.population}</span> </h5>
                     <h5>Region: <span>{item.region}</span> </h5>
                     <h5>Sub Region: <span>{item.subregion}</span></h5>
                     <h5>Capital: <span>{item.capital}</span></h5>
                     <h5>Top Level domain: <span>{item.topLevelDomain}</span></h5>
                     <h5>Currencies: <span>{item.currencies[0].name}</span></h5>
                     <h5>Language: <span>{item.languages[0].name}</span></h5>
                  </div>
              </div>
        </div>
    ))
    return(
        <div>
                {displayCountry}
        </div>
    )
}