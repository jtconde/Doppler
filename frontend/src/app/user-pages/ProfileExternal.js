import React, { Component } from 'react';

class ProfileExternal extends Component {
  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Profile
          </h3>
          </div>
          <div className="profile-section">
          <div className="avatar-pic profile-pic">
                <div className="count-indicator">
                  <img className="avatar img-xl rounded-circle " src={require('../../assets/images/faces/face2.jpg')} alt="profile" />
                </div>
               </div>
          <div className="username-title">Estella Bryan</div>
          <div className="ranking">Rank #2</div>
          <div style={{ marginTop: "20px"}}class="row">
          <button className='btn btn-rounded btn-fw btn-function'>Follow</button>
          </div>
          </div>
          <div className="profile-info">
            <div className="invested-label">
              Amount Invested
            </div>
            <div className="invested">$1,223,446.94</div>
            <p className="text-success ml-2 mb-0 font-weight-bold difference">+$2,000</p>
          
                          {/*Portfolio Section*/} 
          <div className="profile-portfolio">      
        <div className="portfolio-space">
       
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


          {/*End Profile Section*/}
</div>
      </div>
      </div>
      </div>
    );
  }
}

export default ProfileExternal;