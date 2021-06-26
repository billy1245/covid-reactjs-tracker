import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Map from './components/Map';
import { useEffect, useState } from 'react';
import Card from './components/Card'
import LineChart from './components/LineChart';
import VerticalBar from './components/VerticalBar';
import Loader from 'react-loader-spinner';
import DoughnutChart from './components/DoughnutChart';
import LineChartVac from './components/LineChartVac';
import VacVerticalBar from './components/VacVerticalBar';

function App() {
  const [title , setTitle ] = useState('Worldwild stats')
  const [data , setData ] = useState([])
  const [myData, setMyData] = useState([])
  const [chartDays , setChartDays] = useState([])
  const [allMydata , setAllMydata] = useState([])
  const [loading , setLoading] = useState(true)
  const [loadings , setLoadings] = useState(true)
  const [load , setLoad] = useState(true)

  const [verBar , setVerBar] = useState([])
  const [country, setCountry] = useState([])
  const [vaccine ,setVaccine] = useState([]);
  const [vaccVerBar ,setVaccVerBar] = useState([]);

  
  const updateCountry = (country , iso2) =>{
    setLoading(true)

    fetch(`https://disease.sh/v3/covid-19/countries/${country}`).then((response) =>response.json()).then((response)=>{

      setAllMydata(
        
        { cases: response.cases, recovered: response.recovered , deaths: response.deaths }
     
   )

  
 })

 fetch(`https://disease.sh/v3/covid-19/historical/${country}`).then((response) =>response.json()).then((response)=>{

      setChartDays(response.timeline)
      setLoading(false)
   })
   fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}`).then((response) =>response.json()).then((response)=>{

    setVaccine(response.timeline)
    setLoadings(false)

    
 })
 fetch(`https://disease.sh/v3/covid-19/countries/${country}`).then((response) =>response.json()).then((response)=>{
      
      setMyData({
        
            cases: response.cases,
            todayCases: response.todayCases  ,
            deaths: response.deaths ,
            todayDeaths: response.todayDeaths,
            recovered: response.recovered  ,
            todayRecovered : response.todayRecovered

             }
             
         )
         
    })
    setTitle(`${iso2} live stats`)
  }
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries").then((response) =>response.json()).then((response)=>{
      
       setData(
        response.map(res =>{
           return { country: res.countryInfo.iso2, value: res.cases }
         })
       )

       setCountry(
        response.map(res =>{
           return { country: res.country.toLowerCase() , info: res.countryInfo }
         })
       )
    })



    

    fetch("https://disease.sh/v3/covid-19/all").then((response) =>response.json()).then((response)=>{
      
       setAllMydata(
        
            { cases: response.cases, recovered: response.recovered , deaths: response.deaths }
         
       )
    })

    fetch("https://disease.sh/v3/covid-19/all").then((response) =>response.json()).then((response)=>{
      
      setMyData({
        
            cases: response.cases,
            todayCases: response.todayCases  ,
            deaths: response.deaths ,
            todayDeaths: response.todayDeaths,
            recovered: response.recovered  ,
            todayRecovered : response.todayRecovered

             }
             
         )
         
    })


    fetch("https://disease.sh/v3/covid-19/historical/all").then((response) =>response.json()).then((response)=>{
      console.log('am here ')

      setChartDays(response)
      setLoading(false)
   })

   fetch("https://disease.sh/v3/covid-19/countries/dz,fr,us,ch,in,uk").then((response) =>response.json()).then((response)=>{

    setVerBar(response)
    setLoadings(false)

    
 })

 fetch("https://disease.sh/v3/covid-19/vaccine/coverage").then((response) =>response.json()).then((response)=>{

      setVaccine(response)
      setLoad(false)
   })

   fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries").then((response) =>response.json()).then((response)=>{

    setVaccVerBar(response)
    setLoadings(false)

    
 })
  },[])
  

  return (
    <div className="App">
      <Nav  country={country} updateCountry={updateCountry}/>
      <h1>{title}</h1>
      <div className="row">
      <div className="col-xl-5 col-lg-12">
        <div className="world-statistics">
          <Card myData={myData} allMydata={allMydata}/>

          </div>
          </div>
          <div className="col-xl-7 col-lg-12">
          <Map  data={data}/>
          </div>
          
          </div>
          
          <div className="row">
        <div className="col-xl-6 col-lg-12 mt-5">
      {loading ? <Loader
        type="Puff"
        color="#FF69B4"
        height={100}
        width={100}
        timeout={100000} //3 secs
        className="spine"
      /> :  <LineChart chartDays={chartDays}  />
       }

       </div>


       <div className="col-xl-6 col-lg-12 mt-5">

      {loadings ? <Loader
        type="Puff"
        color="#FF69B4"
        height={100}
        width={100}
        timeout={10000}
        className="spine" //3 secs
      /> :  <VerticalBar verBar={verBar}/>
       }

       </div>
       <div  className="col-xl-6 col-lg-12 mt-5">
        {load ? <Loader
        type="Puff"
        color="#FF69B4"
        height={100}
        width={100}
        timeout={100000} //3 secs
        className="spine"
      /> :  <LineChartVac vaccine={vaccine}  />
       }
        </div>
        <div className="col-xl-6 col-lg-12 mt-5">

      {loadings ? <Loader
        type="Puff"
        color="#FF69B4"
        height={100}
        width={100}
        timeout={10000}
        className="spine" //3 secs
      /> :  <VacVerticalBar vaccVerBar={vaccVerBar}/>
       }

       </div>
       
      </div>
      
        

    </div>
  );
}

export default App;
