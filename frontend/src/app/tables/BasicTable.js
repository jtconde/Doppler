import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Follows </h3>
        </div>
        <div className="following-row">
          <button type="button" className="btn btn-fw">Follows</button>
          <button type="button" className="btn btn-dark btn-fw">Following</button>
        </div>
        <div className="follow-block card">
              <div className="card-body">
              <img className="follow-pic" src={require('../../assets/images/faces/face3.jpg')} alt="face" />
                <div className="cryptContent">
                <div className="follow-info">Matt Smith</div>
                </div>
                </div>
          </div>
          <div className="follow-block card">
              <div className="card-body">
              <img className="follow-pic" src={require('../../assets/images/faces/face2.jpg')} alt="face" />
                <div className="cryptContent">
                <div className="follow-info">Johnzxy</div>
                </div>
                </div>
          </div>
          <div className="follow-block card">
              <div className="card-body">
              <img className="follow-pic" src={require('../../assets/images/faces/face1.jpg')} alt="face" />
                <div className="cryptContent">
                <div className="follow-info">Mike Jones</div>
                </div>
                </div>
          </div>

      </div>
    )
  }
}

export default BasicTable
