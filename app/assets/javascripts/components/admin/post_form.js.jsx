class PostForm extends React.Component {
	constructor(props){
		super(props)
		this.handlePostSubmit = this.handlePostSubmit.bind(this)
	}
	handlePostSubmit(){
		data = {
			post:{
				title: this.refs.title.value,
				body: this.refs.body.value
			}
		}
		this.props.handleSubmit(data, this.props.url, this.props.method)
	}

	
	render() {
		return(
		<div className='post_form' ref='post_form'>
			<div className='form-group'>
			  <input type="text"  className='form-control title-input' ref="title" defaultValue={this.props.title}/>
			</div>
			<div className='form-group'>
			  <textarea type="text" className="form-control body-input" ref="body" defaultValue={this.props.body}/>
		    </div>
		    <input type="submit" onClick={this.handlePostSubmit} />
		</div>
		)
	}

}