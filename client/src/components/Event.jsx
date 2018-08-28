import React from 'react';

const Event = (props) => {
 return (
<div>
  <a href ={props.event.url}><img src={props.event.logo.url} alt="event picture" height="100" width="200"/></a> <br />
  <a href ={props.event.url}>{props.event.name.text}</a> <br />
  <span>{props.event.description.text}</span> <br />
  <span>{props.event.start.local}</span>
</div>
 );
}

export default Event;