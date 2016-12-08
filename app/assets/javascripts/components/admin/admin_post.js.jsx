class AdminPost extends React.Component {
	constructor(props){
		super(props)
		this.editHandle = this.editHandle.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	editHandle(){
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
				<a className="action" onClick={this.editHandle}>
					edit
				</a>
				<a className="action" onClick={this.handleDelete}>
					delete
				</a>
				<div className="clearfix"/>
			</div>
		)
	}

}