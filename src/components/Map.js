import React from 'react'
import { WorldMap } from "react-svg-worldmap"
import '../App.css'
function Map(props) {
   

  return (
    <div className="worldmap">
             <WorldMap color="red"  value-suffix="people" size="lg" data={props.data.filter((e) => e.country != null)} />

    </div>
  )
}

export default Map
