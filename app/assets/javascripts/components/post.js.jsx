class Post extends React.Component {
	constructor(props){
		super(props)
		alert(this.props.signed_in)
	}
	render(){
		return(
			<div className='post'>
				<p className="post-created-at">{this.props.created_at}</p>
				<div className="clearfix" />
				<h1 className="post-heading">{this.props.title}</h1>
				<p className="post-body">{this.props.body}</p>
				<CommentBox comments={this.props.comments} comments_url={this.props.comments_url} post_id={this.props.post_id} gravathar={this.props.gravathar} signed_in={this.props.signed_in}/>
			</div>
		)
	}
}