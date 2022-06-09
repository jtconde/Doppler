import React, { Component } from 'react';

class Trending extends Component {
    render () {
        return (
            <div>
                <div className="page-header">
          <h3 className="page-title">
            Trending
          </h3>
          </div>
          <div className="card">
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
          <div style={{marginTop: "20px"}}className="card">
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
          <div style={{marginTop: "20px"}}className="card">
              <div className="card-body">
                <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/litecoin.png')} alt="face" /></div>
                <div className="cryptContent">
                <div className="label">Litecoin (LTC)</div>
                <div className="tokenValue">0.000000125564</div>
                <div className="status">
                <span className="text-success ml-2 mb-0 font-weight-medium">+3.5%</span>
                <span className="text-success ml-2 mb-0 font-weight-medium">+$1,200</span>
                </div>
                </div>
                </div>
          </div>
          <div style={{marginTop: "20px"}}className="card">
              <div className="card-body">
                <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/xrp.png')} alt="face" /></div>
                <div className="cryptContent">
                <div className="label">XRP (XRP)</div>
                <div className="tokenValue">0.0000005564</div>
                <div className="status">
                <span className="text-success ml-2 mb-0 font-weight-medium">+30.5%</span>
                <span className="text-success ml-2 mb-0 font-weight-medium">+$1,800</span>
                </div>
                </div>
                </div>
          </div>
          <div style={{marginTop: "20px"}}className="card">
              <div className="card-body">
                <div className="ellipse"><img className="crypto-icon" src={require('../../assets/images/mock-crypto/polygon.png')} alt="face" /></div>
                <div className="cryptContent">
                <div className="label">Polygon (MATIC)</div>
                <div className="tokenValue">0.00000064</div>
                <div className="status">
                <span className="text-success ml-2 mb-0 font-weight-medium">+91.2%</span>
                <span className="text-success ml-2 mb-0 font-weight-medium">+$300</span>
                </div>
                </div>
                </div>
          </div>
            </div>
        )
    }
}

export default Trending;