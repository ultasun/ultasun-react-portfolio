import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import leftSideImage from '../../../static/assets/images/contact.jpg';

export default function() {
    // back in Jordan's copy, he shows the div className's for beautiful
    // bullet points, using classes like
    // contact-bullet-points, bullet-point-group, icon
    // and plenty of FontAwesomeIcon components.
    return (
	<div className='content-page-wrapper'>
	    <div className='left-column'
		 style={{
		     background: "url(" + leftSideImage + ") no-repeat",
		     backgroundSize: "cover",
		     backgroundPosition: "center"
		 }}>
	    </div>
	    <div className='right-column'>
		<p>Schedule a meeting by reaching out:</p>
		<p>
		    <b>
			<FontAwesomeIcon icon='envelope' />
			&nbsp;
			<a href="https://en.wikipedia.org/wiki/Email">
			    Email
			</a> and <FontAwesomeIcon icon='comment' />
			&nbsp;
			<a href="https://support.apple.com/messages">
			    iMessage
			</a>
		    </b>:
		    <div
			style={{
			    marginTop: "10px",
			    padding: "10px",
			    paddingLeft: "36px",
			    color: "maroon",
			    background: "gold"
			}}>
			ultasun
			<FontAwesomeIcon icon='at' />
			icloud.com
		    </div>
		</p>
		<p>
		    <b>
			<FontAwesomeIcon icon='comments' />
			&nbsp;
			<a href="https://en.wikipedia.org/wiki/Internet_Relay_Chat">
			    IRC
			</a>
		    </b>
		    :&nbsp;Send me a direct message,&nbsp;
		    <i>
			ultasun
		    </i> on&nbsp;
		    <a href="https://libera.chat/">
			Libera
		    </a>
		    .
		</p>
		<p>
		    <FontAwesomeIcon icon='door-open' />&nbsp;
		    <a href="https://linkedin.com/in/ultasun/">
			LinkedIn
		    </a>
		</p>
	    </div>
	</div>
    );
}

