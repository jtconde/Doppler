import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

//Data Trends
const dailyData0 = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 50.00, 21.25, 32.45, 80.00, 11.25, 93.25],
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

const dailyData = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 50.00, 21.25, 32.45, 80.00, 11.25, 93.25],
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

const weeklyData = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 23.00, 54.25, 11.45, 78.00, 80.25, 34.25],
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

const monthlyData = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 60.00, 76.25, 90.45, 21.00, 43.25, 10.25],
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

const tripMonthlyData = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 11.00, 21.25, 30.45, 90.00, 54.25, 32.25],
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

const yearlyData = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 10.00, 45.25, 56.45, 22.00, 66.25, 77.25],
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

const allData = {
  labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
  datasets: [{
    label: '# of Votes',
    data: [ 30.00, 11.25, 88.45, 55.00, 33.25, 90.25],
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

export class Coin extends Component {
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


  
  
    this.dailyTrend = this.dailyTrend.bind(this);
    this.weeklyTrend = this.weeklyTrend.bind(this);
    this.monthlyTrend = this.monthlyTrend.bind(this);
    this.tripMonthTrend = this.tripMonthTrend.bind(this);
    this.yearlyTrend = this.yearlyTrend.bind(this);
    this.allTrend = this.allTrend.bind(this);


   
  
  }

 


dailyTrend() {
const newData = this.state.dataDaily;
this.setState({
  data: newData,
  
})

if (dailyData.datasets[0].data[0] > dailyData.datasets[0].data[dailyData.datasets[0].data.length - 1]) {
  dailyData.datasets[0].borderColor = 'red';}

}

weeklyTrend() {
  const newData = this.state.dataWeekly;
  this.setState({
    data: newData,
    
  })

  if (weeklyData.datasets[0].data[0] > weeklyData.datasets[0].data[weeklyData.datasets[0].data.length - 1]) {
    weeklyData.datasets[0].borderColor = 'red';}
  
  }

  monthlyTrend() {
    const newData = this.state.dataMonthly;
    this.setState({
      data: newData,
    })
    
    if (monthlyData.datasets[0].data[0] > monthlyData.datasets[0].data[monthlyData.datasets[0].data.length - 1]) {
    monthlyData.datasets[0].borderColor = 'red';}
    
  }

    tripMonthTrend() {
      const newData = this.state.dataTripMonthly;
      this.setState({
        data: newData
      })

      if (tripMonthlyData.datasets[0].data[0] > tripMonthlyData.datasets[0].data[tripMonthlyData.datasets[0].data.length - 1]) {
        tripMonthlyData.datasets[0].borderColor = 'red';}

      }

      yearlyTrend() {
        const newData = this.state.dataYearly;
        this.setState({
          data: newData
        })

        if (yearlyData.datasets[0].data[0] > yearlyData.datasets[0].data[yearlyData.datasets[0].data.length - 1]) {
          yearlyData.datasets[0].borderColor = 'red';}
        }

        allTrend() {
          const newData = this.state.dataAll;
          this.setState({
            data: newData
          })
          }

    render() {
      return (
     <div>
       <div style={{paddingBottom: '20px'}}>
          <div style={{float:"none", width: '50px', height: '50px'}}className="ellipse"><img style={{width: '40px', height: '40px'}} className="crypto-icon" src={require('../../assets/images/mock-crypto/bitcoin.png')} alt="crypto icon" /></div>
          </div>
          <h3>Bitcoin (BTC)</h3>
          <h4>$45,825.61</h4>
          <div className="row">
          <p className="text-success ml-2 mb-0 font-weight-medium">+$1,200 (+17.0%)</p>&nbsp;<p>Today</p>
          </div>
          <button className="watchlist-btn">+ Add to watchlist</button>
          <div>
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
                 <button  autoFocus  onClick={this.dailyTrend} type="button" className="start btn-class btn chart-btn">1 D</button>
                 <button  id ="week" onClick={this.weeklyTrend} type="button" className="btn-class btn btn-black chart-btn">1 W</button>
                 <button  onClick={this.monthlyTrend} type="button" className="btn-class btn btn-black chart-btn">1 M</button>
                 <button  onClick={this.tripMonthTrend} type="button" className="btn-class btn btn-black chart-btn">3 M</button>
                 <button  onClick={this.yearlyTrend} type="button" className="btn-class btn btn-black chart-btn">1 Y</button>
                 <button  onClick={this.allTrend}type="button" className="btn-class btn btn-black chart-btn">All</button>
                </div>
          </div>
          <div className="row">
          <button className='btn btn-rounded btn-fw btn-function'>Buy/Sell</button>
          </div>
          <div style={{paddingTop: "100px"}} className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              Market Cap
                            </label>
                          </div>
                        </td>
                        <td>
                        </td>
                        <td> $1,359,255.32 </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              Trending Volume
                            </label>
                          </div>
                        </td>
                        <td>
                        </td>
                        <td> $1,223,446.94 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                             Circulating Supply
                            </label>
                          </div>
                        </td>
                        <td>
                        </td>
                        <td> 1,122,246.94 </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              Total Supply
                            </label>
                          </div>
                        </td>
                        <td>
                        </td>
                        <td> 1,000,421.14 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
     </div>
      )
    }
  }
  
  export default Coin