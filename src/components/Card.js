import React from 'react'
import '../App.css'
import DoughnutChart from './DoughnutChart'
function Card({myData ,allMydata}) {
  return (
    <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6 col-md-6 col">
                                    <div className="world-widget">
                                        <div className="icon gradient-1">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div>
                                            <h5>Total Cases</h5>
                                            <h2 id="total_cases">{myData.cases}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col">
                                    <div className="world-widget">
                                        <div className="icon gradient-9">
                                            <i className="fas fa-procedures"></i>
                                        </div>
                                        <div>
                                            <h5>Total Death</h5>
                                            <h2 id="total_deaths">{myData.deaths}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col">
                                    <div className="world-widget">
                                        <div className="icon gradient-4">
                                            <i className="fas fa-child"></i>
                                        </div>
                                        <div>
                                            <h5>Total Recovered</h5>
                                            <h2 id="total_recovered">{myData.recovered}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col">
                                    <div className="world-widget">
                                        <div className="icon gradient-3">
                                            <i className="fas fa-bell"></i>
                                        </div>
                                        <div>
                                            <h5>New Cases</h5>
                                            <h2 id="new_cases">{myData.todayCases}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col">
                                    <div className="world-widget">
                                        <div className="icon gradient-12">
                                            <i className="fas fa-bed"></i>
                                        </div>
                                        <div>
                                            <h5>New Death</h5>
                                            <h2 id="new_deaths">{myData.todayDeaths}</h2>
                                        </div>
                                    </div>
                                    <div className="world-widget">
                                        <div className="icon gradient-5">
                                            <i className="fas fa-medkit"></i>
                                        </div>
                                        <div>
                                            <h5>New recovred</h5>
                                            <h2>{myData.todayRecovered}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col">
                                <DoughnutChart  allMydata={allMydata} />
                                </div>
                            </div>
  )
}

export default Card
