class AdminPosts extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			posts: this.props.posts,
			form: {
				title: '',
				body: '',
			    show: false,
			    url: this.props.url,
			    method: 'POST'
			}
		}
		this.openForm = this.openForm.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.handleStateChange = this.handleStateChange.bind(this)
	}
	openForm(){
		state = this.state
		state.form.show = true
		this.setState(state)
	}
	findById(posts, id) {
		for(i=0; i< posts.length; i++){
			if(posts[i].id==id)
				return(i)
		}
	}

	handleSubmit(data, url, method, id) {
		that = this
		$.ajax({
			dataType: 'text',
			type: method,
			data: data,
			url: url
		}).success(function(data){
			data = JSON.parse(data)
			if(method=='PUT') {
				state = that.state
				edited_position=that.findById(state.posts, data.id)
				state.posts[edited_position] = data
				state.form.show = false
			    that.setState(state)
			}else {
				new_post = {
					title: data.title,
        			body: data.body,
        			created_at: data.created_at,
        			id: data.id,
        			post_url: data.post_url,
        			destroy_url: data.destroy_url
				}
				state = that.state
				state.posts.push(new_post)
				state.form.show = false
			    that.setState(state)

			}


		})
	}

	handleEdit(data){
		state = this.state
		state.form ={
			title: data.title,
		    body: data.body,
		    url:  data.url,
		    method: 'PUT',
		    show: true
		}
		this.setState(state)
	}


	handleDelete(id, url) {
		that = this
		$.ajax({
			type: 'DELETE',
			url: url
		}).success(function(){
			delet_position = that.findById(that.state.posts, id)
			posts = that.state.posts
			posts.splice(delet_position,1)
			that.setState({posts: posts,
				form: that.state.form
			})


		})
			
	}

	handleStateChange(id, state){
		posts = this.state.posts
		post_id = this.findById(posts, id)
		posts[post_id].state = state
		this.setState({
			posts: posts,
			form: this.state.form
		})

	}




	render(){
		posts = []
		for(i=0; i< this.state.posts.length;i++) {
			posts.push(
				<AdminPost post_attributes = {this.state.posts[i]} key={this.state.posts[i].id} id={this.state.posts[i].id} handleEdit={this.handleEdit}  handleDelete= {this.handleDelete} handleStateChange = {this.handleStateChange}/>
			)
		}

		form =  <PostForm title={ this.state.form.title} body= {this.state.form.body} method={this.state.form.method}  url = {this.state.form.url} handleSubmit= {this.handleSubmit}/>

		return(

			<div className='admin_posts'>
				<input className= "new-post-button" type="button" value="New post" onClick={this.openForm} />
				{this.state.form.show ? form : <div />}
				
				{posts.reverse()}
			</div>
		)
	}
}