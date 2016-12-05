class CommentForm extends React.Component {
	constructor(props){
		super(props)
		this.onCommentSubmit = this.onCommentSubmit.bind(this)
		this.onFocus = this.onFocus.bind(this)
	}
	onCommentSubmit(){
		comment = this.refs.comment.value
		this.props.onSubmit(comment)
	}
	onFocus(){
		if (!this.props.signed_in) {
			window.location = '/users/sign_up'
		}
	}
	render() {
		return(
			<div className="comment-form" ref="comment_form">
				<textarea ref="comment" className="textarea" onFocus={this.onFocus}/>
				<input type="submit" onClick={this.onCommentSubmit} />
			</div>
		)
	}

}