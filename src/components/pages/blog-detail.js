import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogForm from '../blog/blog-form';
import BlogFeaturedImage from '../blog/blog-featured-image';

export default class BlogDetail extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    currentId: this.props.match.params.slug,
	    blogItem: {},
	    editMode: false
	};

	this.handleEditClick = this.handleEditClick.bind(this);
	this.handleFeaturedImageDelete =
	    this.handleFeaturedImageDelete.bind(this);
	this.handleUpdateFormSubmission =
	    this.handleUpdateFormSubmission.bind(this);
    }

    handleUpdateFormSubmission(blog) {
	this.setState({
	    blogItem: blog,
	    editMode: false
	});
    }

    handleFeaturedImageDelete() {
	this.setState({
	    blogItem: {
		featured_image_url: ''
	    }
	});
    }

    handleEditClick() {
	/*
	  authentication is the process of logging in to a system
	  authorization is enforcement of roles and permissions.
	  so for example,
	  if we are not logged in, editMode should never be true.
	 */
	//console.log('handle edit click');
	if (this.props.loggedInStatus === 'LOGGED_IN') {
	    this.setState({ editMode: true });
	}
    }

    getBlogItem() {
	axios.get(`https://ultasun.devcamp.space/portfolio/portfolio_blogs/
${this.state.currentId}`).then(response => {
	    this.setState({
		blogItem: response.data.portfolio_blog
	    });
	    console.log('response', response);
	}).catch(error => {
	    console.log('getBlogItem error', error);
	});
    }

    componentDidMount() {
	this.getBlogItem();
    }

    render() {
	const {
	    title, content, featured_image_url, blog_status
	} = this.state.blogItem;

	const contentManager = () => {
	    if (this.state.editMode) {
		return (
		    <BlogForm
			editMode={this.state.editMode}
			blog={this.state.blogItem}
			handleFeaturedImageDelete={
			    this.handleFeaturedImageDelete}
			handleUpdateformSubmission={
			    this.handleUpdateFormSubmission} />
		);
	    } else {
		// jordan used an h1 instead of an h2
		return (
		    <div className='content-container'>
			<h2 onClick={this.handleEditClick}>{title}</h2>

			<BlogFeaturedImage img={featured_image_url} />
			
			<div className='content'>
			    {ReactHtmlParser(content)}
			</div>
		    </div>
		);
	    }
	}
	
	console.log('currentId', this.state.currentId);
	return (
	    <div className='blog-container'>
		{contentManager()}
	    </div>
	);
    }
}
