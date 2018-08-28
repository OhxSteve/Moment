import React from 'react';

class Header extends React.Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <div className="header">
          <a href={window.location}><img src="./logo_transparent.png" alt="logo" height="32" width="32"/></a>
          <span className="find">Find</span>
          <input className="search-box" type="text" name="search" size="32" onChange={this.props.eventTypeChange}/>
          <span className="location">Location</span>
          <input className="location-box" type="text" name="location" size="32" onChange={this.props.locationChange}/>
          <button className="search" type="button" onClick={this.props.getEvents}><img src ="./search.png" alt="search" height="15" width="15"/></button>
        </div>
        <hr className="line"/>
      </div>
    )
  }
}

export default Header;