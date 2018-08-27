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
        <a href="localhost:1337">Moment</a>
        Find
        <input type="text" name="search"/>
        Near
        <input type="text" name="location"/>
        <button type="button">&#x1F50D;</button>
      </div>
    )
  }
}

export default Header;