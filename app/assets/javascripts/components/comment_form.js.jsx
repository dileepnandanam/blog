class CommentForm extends React.Component {
	constructor(props){
		super(props)
		this.onCommentSubmit = this.onCommentSubmit.bind(this)
	}
	onCommentSubmit(){console.log(this.refs.comment)
		comment = this.refs.comment
		this.props.onSubmit(comment)
	}
	render() {
		return(
			<div className="comment-form" ref="comment_form">
				<input ref="comment" type="textbox" />
				<input type="submit" onClick={this.onCommentSubmit} />
			</div>
		)
	}

}