class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = this.props
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(comment) {
		alert(coment)
	} 
	render() {
		comments = []
		for(i=0; i<this.state.comments.length; i++) {
			comment = this.state.comments[i]
			comments.push(<Comment comment={comment} />)
		}

		return(

			<div className="feedbeck_section">
			<div className="coment_box">
			{comments}
			</div>
			<div className="comment_form">
			<CommentForm onSubmit={this.onSubmit} />
			</div>
			</div>
		)
	}

}