import {useState} from "react";
const countries = [
    {name : "India", value: "IN", cities: ["Mumbai", "Delhi"]},
    {name : "Canada", value: "CA", cities: ["Ottawa", "Edmonton"]},
    {name : "USA", value: "US", cities: ["Washington DC", "Los Angeles"]},
];



export default function App() {
    const [country, setCountry] = useState({name: "", value="", cities=[]});
  return (
      <div>
          <select value={country} onChange= {(e) => {
              setCountry(e.target.value);
          } }>
              {
                  countries.map((item, index) => {
                      return (<option value={item.value}>{item.name}</option>);
                  })
              } 
          </select> 
          <select value={country}>
              {
                  countries[country].cities.map((item, index) => {
                      return (<option value={index}>{item}</option>);
                  })
              } 
          </select> 
      </div>    
  );
}