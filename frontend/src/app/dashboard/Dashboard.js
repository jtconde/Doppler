import React, { Component, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

//Data Trend Objects 

const dailyData0 = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 50.00, 21.25, 32.45, 30.00, 131.25, 13.25, 29.00, 30.00, 34.00, 30.00, 28.00, 29.00, 27.00, 25.00],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const dailyData = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 50.00, 21.25, 32.45, 30.00, 131.25, 13.25, 29.00, 30.00, 34.00, 30.00, 28.00, 29.00, 27.00, 25.00],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const weeklyData = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 13.00, 44.25, 44.45, 98.00, 20.25, 23.25, 30.00, 32.00, 34.00, 33.00, 36.00, 38.00, 40.00, 39.00],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const monthlyData = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 40.00, 60.00, 76.25, 90.45, 21.00, 23.25, 21.22, 23.00, 26.00, 31.00, 29.00, 26.00, 29.00, 25.00],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const tripMonthlyData = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 11.00, 21.25, 30.45, 90.00, 54.25, 32.25, 39.22, 22.00, 26.00, 30.00, 33.00, 37.00, 40.00, 38.00],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const yearlyData = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 10.00, 45.25, 56.45, 22.00, 66.25, 77.25, 88.00, 82.11, 86.31, 90.33, 92.00, 91.88, 99.00, 97.00],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const allData = {
  labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
  datasets: [{
    label: '# of Votes',
    data: [ 30.00, 11.25, 88.45, 55.00, 33.25, 90.25, 100.22, 103.22, 107.11, 107.00, 103.22, 100.00, 102.11, 104.11],
    borderColor: [
      'rgba(0, 225,63,5)'
    ],
    borderWidth: 1,
    fill: false,
    pointRadius: 3
  }]
};

const options = {
maintainAspectRatio: false,

scales: {
  yAxes: [{
    ticks: {
      beginAtZero: true,
      display:false
    },
  }],
  xAxes: [{
    display:false
  }
   ]
},
legend: {
  display: false
},
elements: {
  point: {
    radius: 0
  }
}
}

export class Dashboard extends Component {


  constructor(){
    super()
    
    this.state = {
      data: dailyData0, 
      dataDaily: dailyData,
      dataWeekly: weeklyData,
      dataMonthly: monthlyData,
      dataTripMonthly: tripMonthlyData,
      dataYearly: yearlyData,
      dataAll: allData,
      options: options,
      
      }

  // Binding Trends
    this.dailyTrend = this.dailyTrend.bind(this);
    this.weeklyTrend = this.weeklyTrend.bind(this);
    this.monthlyTrend = this.monthlyTrend.bind(this);
    this.tripMonthTrend = this.tripMonthTrend.bind(this);
    this.yearlyTrend = this.yearlyTrend.bind(this);
    this.allTrend = this.allTrend.bind(this);

 }

colorSwitcher(trendSet) {
  if (trendSet.datasets[0].data[0] > trendSet.datasets[0].data[trendSet.datasets[0].data.length - 1]) 
  {
    trendSet.datasets[0].borderColor = 'rgba(255, 0, 0, 1)';
  } else {
    trendSet.datasets[0].borderColor = 'rgba(0, 225,63,5)'
  }
}

// Graph Button Events

onLoadGraphStatus() {
  this.colorSwitcher(dailyData0)
  }

dailyTrend() {
  this.setState({
    data: this.state.dataDaily
  }
)
this.colorSwitcher(dailyData)
}

weeklyTrend() {
  this.setState({
    data: this.state.dataWeekly    
  })
 this.colorSwitcher(weeklyData)
}

monthlyTrend() {
  this.setState({
      data: this.state.dataMonthly
    })
  this.colorSwitcher(monthlyData)
}

tripMonthTrend() {
    this.setState({
      data: this.state.dataTripMonthly
      })
    this.colorSwitcher(tripMonthlyData)
}

yearlyTrend() {
    this.setState({
      data: this.state.dataYearly
      })
    this.colorSwitcher(yearlyData)
}

allTrend() {
    this.setState({
      data: this.state.dataAll
      })
    this.colorSwitcher(allData)
}

        
render () {

// Load initial graph color
this.onLoadGraphStatus()

// Load initial graph button color
let btn_class = this.state.black ? "greenButton" : "blackButton";
 
 return (
      
  <div className="container">
    <div>
      <h3>Amount Invested</h3>
    </div>
  <div className="row">
    <h2 style={{paddingLeft: "12px"}}>$50,000</h2>
    <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
    <p className="text-success ml-2 mb-0 font-weight-medium">+$1,200</p>
  </div>
  <div style={{maxWidth:"900px", backgroundColor: "#131313", padding: "10px"}}>
    <p style={{marginBottom: "0", fontSize: "16px"}}>Remaining Balance: $12,000</p>
  </div>
  <div>
    <div>
      <div>
        <div style={{maxWidth: "900px", height: "auto"}}>
          <div className="card-body">
            <Line data={this.state.data} options={this.state.options} borderColor={this.state.graphColor} />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Buttons Row*/}
  <div style={{maxWidth:"900px", padding:"30px", borderTop:"solid 1px #2b2b2b" }} className="chartdiv row">
    <button autoFocus  onClick={this.dailyTrend} type="button" className="start btn-class btn chart-btn">1 D</button>
    <button id ="week" onClick={this.weeklyTrend} type="button" className="btn-class btn btn-black chart-btn">1 W</button>
    <button onClick={this.monthlyTrend} type="button" className="btn-class btn btn-black chart-btn">1 M</button>
    <button onClick={this.tripMonthTrend} type="button" className="btn-class btn btn-black chart-btn">3 M</button>
    <button onClick={this.yearlyTrend} type="button" className="btn-class btn btn-black chart-btn">1 Y</button>
    <button onClick={this.allTrend}type="button" className="btn-class btn btn-black chart-btn">All</button>
  </div>
  {/*Portfolio Section*/} 
  <div className="portfolio-space">
    <div className="labelSpace">
      <p style={{ fontSize: "18px"}}>Portfolio</p>
    </div>
  {/*Portfolio Card Component*/}
    <div className="portfolio card">
      <div className="card-body">
        <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/bitcoin.png')} alt="crypto icon" />
        </div>
          <div className="cryptContent">
            <div className="label">Bitcoin (BTC)
            </div>
              <div className="tokenValue">0.000000365564
              </div>
              <div className="status">
                  <span className="text-success ml-2 mb-0 font-weight-medium">+3.5%</span>
                  <span className="text-success ml-2 mb-0 font-weight-medium">+$1,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/*Portfolio Card Component*/}
      <div className="portfolio-space">
        <div className="portfolio card">
          <div className="card-body">
            <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/ethereum.png')} alt="face" /></div>
              <div className="cryptContent">
                <div className="label">Ethereum (ETH)
                </div>
                <div className="tokenValue">0.000000365564
                </div>
                <div className="status">
                  <span className="text-success ml-2 mb-0 font-weight-medium">+3.5%</span>
                  <span className="text-success ml-2 mb-0 font-weight-medium">+$1,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  {/*Watchlist*/}
  {/*Watchlist Placeholder*/}
        <div className="portfolio-space">
          <div className="labelSpace">
            <p style={{ fontSize: "18px"}}>Watchlist</p>
          </div>
          <div className="watchlist-placeholder">
            <div className="card-body">
             <p className="placeholder-text">Your Watchlist is empty</p>
            </div>
          </div>
        </div>
  {/*End Watchlist*/}
  {/*Trending*/}
        <div className="portfolio-space">
          <div className="trend-title">  
            <p style={{ fontSize: "18px"}}>Trending Last 7 Days</p>
          </div>
          <div className="row">
  {/*Start Trending Tile*/}
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/litecoin.png')} alt="crypto icon" />
                    </div>
                  </div>
                <h6 className="trend-label ">Litecoin (LTC)</h6>
                <p className="trend-change text-success">+20.32%</p>
                </div>
              </div>
            </div>
  {/*End Trending Tile*/}
  {/*Start Trending Tile*/}
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/xrp.png')} alt="crypto icon" />
                    </div>
                  </div>
                <h6 className="trend-label ">XRP (XRP)</h6>
                <p className="trend-change text-success">+30.11%</p>
                </div>
              </div>
            </div>
  {/*End Trending Tile*/}
  {/*Start Trending Tile*/}
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/ethereum.png')} alt="crypto icon" />
                    </div>
                  </div>
                <h6 className="trend-label ">Ethereum (ETH)</h6>
                <p className="trend-change text-success">+18.99%</p>
                </div>
              </div>
            </div>
  {/*End Trending Tile*/}
  {/*Start Trending Tile*/}
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/polygon.png')} alt="crypto icon" />
                    </div>
                  </div>
                <h6 className="trend-label ">Polygon (MATIC)</h6>
                <p className="trend-change text-success">+19.02%</p>
                </div>
              </div>
            </div>
  {/*End Trending Tile*/}
          </div>
        </div>
        <div className="portfolio-space">
          <div className="see-all">
         <a href="">See All Trending</a>
        </div>
      </div>
  {/*End Trending Section*/}
  {/*Start Leaderboard Section*/}
      <div className="leaderboard-card portfolio-space">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Leaderboard</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                            #
                          </label>
                        </div>
                      </th>
                      <th> Username </th>
                      <th> Amount Invested </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-muted m-0">
                          <label className="form-check-label">
                              1
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                            <span className="pl-2">Henry Klein</span>
                        </div>
                      </td>
                      <td> $1,359,255.32 </td>
                    </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              2
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../assets/images/faces/face2.jpg')} alt="face" />
                              <span className="pl-2">Estella Bryan</span>
                          </div>
                        </td>
                        <td> $1,223,446.94 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                             3
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../assets/images/faces/face5.jpg')} alt="face" />
                            <span className="pl-2">Lucy Abbott</span>
                          </div>
                        </td>
                        <td> $1,122,246.94 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              4
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../assets/images/faces/face3.jpg')} alt="face" />
                            <span className="pl-2">Peter Gill</span>
                          </div>
                        </td>
                        <td> $1,000,421.14 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              5
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <img src={require('../../assets/images/faces/face4.jpg')} alt="face" />
                            <span className="pl-2">Sallie Reyes</span>
                          </div>
                        </td>
                        <td> $1,000,000.14 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  {/*End Leaderboard*/}
        </div> 
      );
    }
  }

export default Dashboard;