import React, { createContext  , useState , useEffect} from 'react'

const Context = createContext()

function CountryContextProvider(props){
    const [countries , setCountries] = useState([])
    const [query , setQuery] = useState("")
    const [filtered , setFiltered] = useState([])
 
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[])

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/name/${query}`)
        .then(res=> res.json())
        .then(data=> setFiltered(data))
    },[query])




    function handleChange(e){
            setQuery(e.target.value)
    }
    
    return(
        <Context.Provider value={{countries ,  query , filtered, handleChange }}>
                {props.children}
        </Context.Provider>
    )
}

export {CountryContextProvider , Context}