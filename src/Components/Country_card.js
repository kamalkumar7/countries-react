import React , {useState , useContext}from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
export default function Card(props){
    const {countries, query , filtered , handleChange} = useContext(Context)
    const [filter , setFilter] = useState("All")

        function searchByFilter(e){
            setFilter(e.target.value)
        }
       const getCountry = ()=>  { if(filter.length>0 && filter!=="All"){

            return  countries.filter(item=> item.region===filter).map((country,i)=> (
                            <div className='card' key={i}>
                                <Link to={`/country/${country.name}`} className="link">
                                    <div className="cards">
                
                                <img className="flag"src={country.flag} alt={country.name} />
                                <div className='card-content'>
                                <h2 className='name'>{country.name}</h2>
                                <p> <strong>Population: </strong> {country.population}</p>
                                <p> <strong>Region: </strong> {country.region}</p>
                                <p> <strong>Capital: </strong> {country.capital}</p>
                                </div>
                                    </div>
                            </Link>
                            </div>
                        ))
        }else if(filtered.length>0 ){
            return filtered.map((country,i)=> (
                <div className='card' key={i}>
                    <Link to={`/country/${country.name}`} className="link">
                        <div className='cards'>
    
                    <img className="flag"src={country.flag} alt={country.name} />
                    <div className='card-content'>
                    <h2 className='name'>{country.name}</h2>
                    <p> <strong>Population: </strong> {country.population}</p>
                    <p> <strong>Region: </strong> {country.region}</p>
                    <p> <strong>Capital: </strong> {country.capital}</p>
                    </div>
                        </div>
                </Link>
                </div>
            ))

        }else if(filter==="All"){
           return  countries.map((country, i)=> (
                <div className='card' key={i}>
                    <Link to={`/country/${country.name}`} className="link">
                        <div className='cards'>
    
                    <img className="flag"src={country.flag} alt={country.name} />
                    <div className='card-content'>
                    <h2 className='name'>{country.name}</h2>
                    <p> <strong>Population: </strong> {country.population}</p>
                    <p> <strong>Region: </strong> {country.region}</p>
                    <p> <strong>Capital: </strong> {country.capital}</p>
                    </div>
                        </div>
                </Link>
                </div>
            ))
        }
        else{
            return <p>no search resukt found</p>
        }}

    return(
        <div>
            <div className='filter-section'>

            <input className="input-field" type="text" placeholder='enter country name...' value={query} onChange={handleChange}/>
            <div>
                <label htmlFor="select-region">Filter by region:</label>
                <select className='select-region' value={filter} id="select-region" onChange={searchByFilter}> 
                <option value="All" >All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia" >Asia</option>
                <option value="Europe" onClick={searchByFilter}>Europe</option>
                <option value="Oceania" >Oceania</option>
            </select>
            </div>
            </div>
        <div className='section'>
            {getCountry()}
        </div>
        </div>
    )
}