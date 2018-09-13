import React from 'react';
import moment from 'moment';

const Event = (props) => {
console.log(props.event)
 return (
   
<div>
  { props.event.logo !== null ?
    <a href ={props.event.url}><img src={props.event.logo.url} alt="event picture" height="100" width="200"/></a> :
    <a href ={props.event.url}><img src="https://www.eventbrite.com/wp-content/themes/core/img/eventbrite-logo.svg"alt="event picture" height="100" width="200"/></a>
  }
  <br/>
  <a href ={props.event.url} className="event-name">{props.event.name.text}</a><br />
  <span className="event-time">{moment(props.event.start.local).format("hA")}</span><br/>
  <span className="event-description">{props.event.description.text}</span> 
</div>
 );
}

export default Event;