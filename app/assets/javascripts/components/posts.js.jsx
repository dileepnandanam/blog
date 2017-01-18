class Posts extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		posts = []
		for(i=0; i<this.props.posts.length;i++){
			post = this.props.posts[i]
			posts.push(
				<Post created_at={post.created_at} title={post.title} body={post.body} comments={post.comments} comments_url={post.comments_url }key={post.id} post_id={post.id} gravathar={post.gravathar} login={post.login} signed_in= {post.signed_in} post_url={post.post_url}/>
			)
		}

		return(
			<div className="posts" >
				{posts}
			</div>
		)
	}
}