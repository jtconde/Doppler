import React, { Component } from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export class Dropdowns extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            Notifications
          </h3>
        </div>
        <div className="notification card">
              <div className="card-body">
                <div className="unread-status"></div>
                <div className="cryptContent">
                <div className="note"><a href=""><b>Dogecoin</b></a> has increased 15% to $.021032</div>
                </div>
                </div>
          </div>
          <div className="notification card">
              <div className="card-body">
                <div className="read-status"></div>
                <div className="cryptContent">
                <div className="note"><a href=""><b>Matthew Eckler</b></a> is now following you.</div>
                </div>
                </div>
          </div>
      </div>
    )
  }
}

export default Dropdowns
