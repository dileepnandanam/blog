class AdminPost extends React.Component {
	constructor(props){
		super(props)
		this.editHandle = this.editHandle.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.toggleState = this.toggleState.bind(this)
	}
	editHandle(e){

		that = this
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: this.props.post_attributes.post_url
		}).success(function(data){
			that.props.handleEdit({
				title:  data.title,
				body: data.body,
				url: that.props.post_attributes.post_url,
				method: 'PUT'
			})	
		})
		e.preventDefault()
	}

	toggleState() {
		that = this
		$.ajax({
			url: this.props.post_attributes.toggle_state_url,
			method: 'PUT'
		}).success(function(data){
			that.props.handleStateChange(data.id, data.state)
		})
	}


	handleDelete(){
		this.props.handleDelete(this.props.id, this.props.post_attributes.destroy_url)
	}

	render() {
		post = this.props.post_attributes

		return(
			<div className='admin_post'>
				<div className='admin-post-title'>
					{post.title}
				</div>
				<div className="state" onClick={this.toggleState}>
				{post.state == "published" ? "published" : "draft"}
				</div>
				<a className="action" href={this.props.post_attributes.preview_url}>
					preview
				</a>
				<a className="action" onClick={this.editHandle} href={'#'}>
					edit
				</a>
				<a className="action" onClick={this.handleDelete} href={'#'}>
					delete
				</a>
				<div className="clearfix"/>
			</div>
		)
	}

}