class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = this.props
		this.onSubmit = this.onSubmit.bind(this)

	}

	onSubmit(comment) {
		that= this
		$.ajax({
			type: 'POST',
			url: this.props.comments_url,
			data: {
					comment :{
						text: comment,
						post_id: this.props.post_id
				  	}
				  },

		}).success(

			function(){
				comments = that.state.comments
				d = new Date

				new_comment = {
					id: d.getTime(),
                    created_at: 'just now',
                    text: comment,
                    gravathar: that.props.gravathar,
                    email: 'comment.user.email'
				}
				comments.push(new_comment)
				that.setState({comments: comments})
			}

		)
	} 
	render() {
		comments = []
		for(i=0; i<this.state.comments.length; i++) {
			comment = this.state.comments[i]
			comments.push(<Comment comment={comment} key={comment.id} />)
		}

		return(

			<div className="feedbeck_section">
				<div className="coment_box">
					{comments}
				</div>
				
					<CommentForm onSubmit={this.onSubmit} signed_in={this.props.signed_in}/>
				
			</div>
		)
	}

}