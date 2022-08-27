import React from 'react';
import { Link } from 'react-router-dom';
import leftSideImage from '../../../static/assets/images/about.jpg';

export default function() {
    return (
	<div className='content-page-wrapper'>
	    <div
		className='left-column'
		style={{
		    background: "url(" + leftSideImage + ") no-repeat",
		    backgroundSize: "cover",
		    backgroundPosition: "center"
		}}
	    />
	    <div className='right-column'>
		<p><b>Hello there, my name is James!</b></p>
		<p>The screen name I currently use for development is&nbsp;
		    <a href="https://github.com/ultasun">
			ultasun
		    </a> -- it means <i>beautiful sun</i>.
		</p>
		<p>My foremost hobbies are learning and self-improvement.
		    I believe education is a seed grown to a sproutling,
		    but growth to a complete plant is an individual
		    responsibility.
		</p>
		<p>Here are two of the schools I had attended since
		    graduating highschool in 2009:
		</p>
		<ul>
		    <li>
			<a href="https://bloomu.edu">
			    Bloomsburg University of Pennsylvania
			</a>, majoring in&nbsp;
			<a href="https://www.bloomu.edu/academics/programs/computer-science-bs">
			    Computer Science, B.S.
			</a>, pending completion.
		    </li>
		    <li>
			<a href="https://bottega.edu/">
			    Bottega University, Online
			</a>, completed a&nbsp;
			<a href="https://bottega.edu/full-stack-development-certificate/">
			    Full Stack Development Certificate
			</a>.
		    </li>    
		</ul>
		<p>
		    On this website, you can find artifacts created during
		    my time at these fine institutions.
		    Other artifacts I had created in my free time may
		    also be found on this site.
		</p>
		<p>
		    <a href="https://ultasun.github.io/ultasun-resume.pdf">
			Download my resume!
		    </a>
		</p>
		<p>
		    Thank you for visiting!
		    I would be delighted to consider working with you,
		    please&nbsp;
		    <Link to="/contact">
			reach out!
		    </Link>
		</p>
		<p>
		    I would be delighted to consider your project!
		</p>
	    </div>
	</div>
    );
}
