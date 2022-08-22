import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
	<div>
	    <h2>Sorry!</h2>
	    <h3>..but the page your browser had requested, does not exist.</h3>
	    <Link to='/'>Return to homepage</Link>
	</div>
    );
}
