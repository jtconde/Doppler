import React, { Component } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { TodoListComponent } from '../apps/TodoList'
import { VectorMap } from "react-jvectormap"


const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}

export class Dashboard extends Component {

  data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [5, 6, 3, 5, 6, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(0, 225,63,5)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
};

options = {
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

  transactionHistoryData =  {
    labels: ["Paypal", "Stripe","Cash"],
    datasets: [{
        data: [55, 25, 20],
        backgroundColor: [
          "#111111","#00d25b","#ffab00"
        ]
      }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
          borderWidth: 0
      }
    },      
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render () {
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
                                <Line data={this.data} options={this.options} />
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                 {/*Buttons Row*/}
                 <div style={{maxWidth:"900px", padding:"30px", borderTop:"solid 1px #2b2b2b" }} className="chartdiv row">
                 <button type="button" className="btn btn-success chart-btn">1 D</button>
                 <button type="button" className="btn btn-black chart-btn">1 W</button>
                 <button type="button" className="btn btn-black chart-btn">1 M</button>
                 <button type="button" className="btn btn-black chart-btn">3 M</button>
                 <button type="button" className="btn btn-black chart-btn">1 Y</button>
                 <button type="button" className="btn btn-black chart-btn">All</button>
                </div>
                
                {/*Portfolio Section*/} 
                
        <div className="portfolio-space">
        <div className="labelSpace">
        <p style={{ fontSize: "18px"}}>Portfolio</p>
        </div>
        {/*Portfolio Card Component*/}
          <div className="portfolio card">
              <div className="card-body">
                <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/bitcoin.png')} alt="crypto icon" /></div>
                <div className="cryptContent">
                <div className="label">Bitcoin (BTC)</div>
                <div className="tokenValue">0.000000365564</div>
                <div className="status">
                <span className="text-success ml-2 mb-0 font-weight-medium">+3.5%</span>
                <span className="text-success ml-2 mb-0 font-weight-medium">+$1,200</span>
                </div>
                </div>
                </div>
          </div>
        </div>

        {/**/} 
                        {/*Portfolio Card Component*/}
          <div className="portfolio-space">
          <div className="portfolio card">
              <div className="card-body">
                <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/ethereum.png')} alt="face" /></div>
                <div className="cryptContent">
                <div className="label">Ethereum (ETH)</div>
                <div className="tokenValue">0.000000365564</div>
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
                  <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/litecoin.png')} alt="crypto icon" /></div>
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
                  <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/xrp.png')} alt="crypto icon" /></div>
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
                  <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/ethereum.png')} alt="crypto icon" /></div>
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
                  <div className="center-ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/bitcoin.png')} alt="crypto icon" /></div>
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