class Post extends React.Component {
	constructor(props){
		super(props)
		
	}
	render(){
		return(
			<div className='post'>
				<p className="post-created-at">{this.props.created_at}</p>
				<div className="clearfix" />
				<a href={this.props.post_url}>	
					<h1 className="post-heading">{this.props.title}</h1>
				</a>
				<p className="post-body" dangerouslySetInnerHTML={{__html: this.props.body }}/ >
				<CommentBox comments={this.props.comments} comments_url={this.props.comments_url} post_id={this.props.post_id} gravathar={this.props.gravathar} login={this.props.login} signed_in={this.props.signed_in}/>
			</div>
		)
	}
}