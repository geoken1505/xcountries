import React, { useEffect, useState } from 'react'

const CountrieCard = ({flag, name, abbr}) => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        width:"200px",
        height:"200px",
        border:"1px solid black",
        padding:"10px",
        borderRadius:"5px",
        margin:"10px",
    }}>
      <img src={flag} alt={`Flag of ${abbr}`} style={
        {
            width: '100px',
            height: '100px'
        }
      }/>
      <h3>{name}</h3>
    </div>
  )
}

function Countries(){
    const Dummyarray = [1,2,3,4,5];
    const api_url="https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries]=useState([]);
    useEffect(()=>{
        const fetcountries= async ()=>{
            try {
                const response = await fetch(api_url);
                const data= await response.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }
        fetcountries()
    },[])
    return <div  style={{
        display:'flex',
        flexWrap:'wrap'
    }}>
        {
            countries.map(({name, flag, abbr})=>(
                <CountrieCard name={name} flag={flag} abbr={abbr} key={name}/>
            ))
        }
    </div>
}

export default Countries
