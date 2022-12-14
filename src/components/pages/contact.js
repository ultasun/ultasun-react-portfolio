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
		     backgroundPosition: "top"
		 }}>
	    </div>
	    <div className='right-column'
		 style={{
		     textAlign: "center"
		 }}>
		<h3>Reach out to schedule a meeting, or ask me anything!</h3>
		<div className='paragraph-content'>
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
			    color: "maroon",
			    background: "gold",
			    textAlign: "center"
			}}>
			ultasun
			<FontAwesomeIcon icon='at' />
			icloud.com
		    </div>
		</div>
		<div className='paragraph-content'>
		    <b>
			<FontAwesomeIcon icon='comments' />
			&nbsp;
			<a href="https://en.wikipedia.org/wiki/Internet_Relay_Chat">
			    IRC
			</a>
		    </b>
		    :&nbsp;Send me a direct message,&nbsp;
		    <i>
			<b>
			    ultasun
			</b>
		    </i> on&nbsp;
		    <a href="https://libera.chat/">
			Libera.Chat
		    </a>
		    .
		</div>
		<div className='paragraph-content'>
		    <FontAwesomeIcon icon='door-open' />&nbsp;
		    <a href="https://linkedin.com/in/ultasun/">
			LinkedIn
		    </a>
		</div>
	    </div>
	    <img className="mobile-view-image-extra" src={leftSideImage} />
	</div>
    );
}

