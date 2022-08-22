import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';


const BlogItem = props => {
    /* this is called destructuring */
    const {
	id, blog_status, content, title, featured_image_url 
    } = props.blogItem;

    return (
	<div>
	    <Link to={`/b/${id}`}>
		<h2>{title}</h2>
	    </Link>
	    <div>
		<Truncate
		    lines={5}
		    ellipsis={<span>
				  ...<Link to={`/b/${id}`}>Read more</Link>
			      </span>}>
		    {striptags(content)}
		</Truncate>
	    </div>
	</div>

    );
};

export default BlogItem;

/* a second way of writing the same thing but jordan sees more developers using the above method

export default function BlogItem() {
// ...
}

*/
