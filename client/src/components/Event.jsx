import React from 'react';
import moment from 'moment';

const Event = (props) => {
 return (
<div>
  <a href ={props.event.url}><img src={props.event.logo.url} alt="event picture" height="100" width="200"/></a><br/>
  <a href ={props.event.url} className="event-name">{props.event.name.text}</a><br />
  <span className="event-time">{moment(props.event.start.local).format("hA")}</span><br/>
  <span className="event-description">{props.event.description.text}</span> 
</div>
 );
}

export default Event;