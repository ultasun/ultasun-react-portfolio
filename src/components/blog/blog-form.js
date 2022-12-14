import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import DropzoneComponent from 'react-dropzone-component';

import filepickerCss from
"../../../node_modules/react-dropzone-component/styles/filepicker.css";
import dropzoneCss from
"../../../node_modules/dropzone/dist/min/dropzone.min.css";

import RichTextEditor from '../forms/rich-text-editor';


/*
  Jordan had copy-and-pasted the entirety of this file into a file within 
  our styles, I wonder if it is any different than the one in the library.

  https://github.com/jordanhudgens/jordan-hudgens-react-portfolio/blob/master/src/style/react-draft-wysiwyg.scss
  https://github.com/jordanhudgens/jordan-hudgens-react-portfolio/tree/cb9c59fcd7f845e1cd4c5ae38933a3e41b795b0a
  https://amazon.devcamp.com/pt-full-stack-development-javascript-python-react/guide/rendering-draft-js-form-component-building-rich-text-editor-styles
  
*/

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import axios from 'axios';

export default class BlogForm extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    id: '',
	    title: '',
	    blog_status: '',
	    content: '',
	    featured_image: '',
	    apiUrl: 'https://ultasun.devcamp.space/portfolio/portfolio_blogs',
	    apiAction: 'post'
	};
	
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleRichTextEditorChange =
	    this.handleRichTextEditorChange.bind(this);
	this.componentConfig = this.componentConfig.bind(this);
	this.djsConfig = this.djsConfig.bind(this);
	this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind(this);
	this.deleteImage = this.deleteImage.bind(this);
	
	this.featuredImageRef = React.createRef();
    }

    /* copied this from portfolio-form.js, so there is an opportunity to make a re-usable dropzone-for-form component 
       such a component could be used by both portfolio-form and blog-form
    */
    deleteImage(imageType) {
	console.log('deleteImage', imageType);
	axios.
	    delete(`https://api.devcamp.space/portfolio/
delete-portfolio-blog-image/${this.props.blog.id}?image_type=${imageType}`,
		   { withCredentials: true })
	    .then(response => {
		console.log("response from blog image delete", response);
		// TODO 
	    }).catch(error => {
		console.log("deleteImage error", error);
	    });
    }
    
    componentWillMount() {
	// good opportunity for de-structuring here
	if (this.props.editMode) {
	    this.setState({
		id: this.props.blog.id,
		title: this.props.blog.title,
		blog_status: this.props.blog.blog_status,
		content: this.props.blog.content,
		apiUrl: `https://ultasun.devcamp.space/portfolio/
portfolio_blogs/${this.props.blog.id}`,
		apiAction: 'patch'
	    });
	}
    }

    componentConfig() {
	return {
	    iconFiletypes: ['.jpg', '.png' ],
	    showFiletypeIcon: true,
	    postUrl: 'https://httpbin.org/post'
	}
    }

    djsConfig() {
	return {
	    addRemoveLinks: true,
	    maxFiles: 1
	}
    }

    handleFeaturedImageDrop() {
	return {
	    addedfile: file => this.setState({ featured_image: file })
	}
    }

    /* the argument 'content' is supposed to be a string */
    handleRichTextEditorChange(content) {
	this.setState({ content });
	/*
	// identical
	this.setState({ content, content });
	*/
    }

    buildForm() {
	let formData = new FormData();

	formData.append('portfolio_blog[title]', this.state.title);
	formData.append('portfolio_blog[blog_status]', this.state.blog_status);
	formData.append('portfolio_blog[content]', this.state.content);

	if(this.state.featured_image) {
	    formData.append('portfolio_blog[featured_image]',
			    this.state.featured_image);
	}
	
	return formData;
    }

    handleSubmit(event) {
	axios({ method: this.state.apiAction,
		url: this.state.apiUrl,
		data: this.buildForm(),
		withCredentials: true })
	    .then(response => {
		if(this.state.featured_image) {
		    this.featuredImageRef.current.dropzone.removeAllFiles();
		}
		
		this.setState({
		    title: '',
		    blog_status: '',
		    content: '',
		    featured_image: ''
		});
		if (this.props.editMode) {
		    // update blog detail
		    this.props.handleUpdateFormSubmission(
			response.data.portfolio_blog
		    );
		} else {   
		    this.props.handleSuccessfullFormSubmission(
			response.data.portfolio_blog
		    );
		}
	    })
	    .catch(error => {
		console.log('buildForm error', error);
	    });
	
	// this.props.handleSuccessfullFormSubmission(this.state);
	event.preventDefault();
    }

    handleChange(event) {
	this.setState({
	    [event.target.name]: event.target.value
	});
    }
    
    render() {
	return (
	    <form
		onSubmit={this.handleSubmit}
		className='blog-form-wrapper'>
		<div className='two-column'>
		    <input
			value={this.state.title}
			placeholder='Blog Title'
			name='title'
			onChange={this.handleChange}
			type='text'
		    />
		    <input
			type='text'
			onChange={this.handleChange}
			name='blog_status'
			placeholder='Blog Status'
			value={this.state.blog_status}
		    />
		</div>

		<div className='one-column'>
		    <RichTextEditor
			handleRichTextEditorChange={
			    this.handleRichTextEditorChange}
			editMode={this.props.editMode || null}
			contentToEdit={
			    this.props.editMode && this.props.blog.content
				? this.props.blog.content : null}
		    />
		</div>
		
		<div className='image-uploaders'>
		    {this.props.editMode && this.props.blog.featured_image_url
		     ?
		     (
			 <div className='portfolio-manager-image-wrapper'>
			     <img src={this.props.blog.featured_image_url} />

			     <div className='image-removal-link'>
				 <a onClick={() =>
					this.deleteImage('featured_image')}>
				     Remove file
				 </a>
			     </div>
			 </div>
		     )
		     :
		     (
			 <DropzoneComponent
			     ref={this.featuredImageRef}
			     config={this.componentConfig()}
			     djsConfig={this.djsConfig()}
			     eventHandlers={this.handleFeaturedImageDrop()}>
			     <div className='dz-message'>Featured Image</div>
			 </DropzoneComponent>
		     )}
		</div>
		
		<button className='btn'>Save</button>
	    </form>
	);
    }
}
