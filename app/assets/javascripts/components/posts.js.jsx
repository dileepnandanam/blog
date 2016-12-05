class Posts extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		posts = []
		for(i=0; i<this.props.posts.length;i++){
			post = this.props.posts[i]
			posts.push(
				<Post created_at={post.created_at} title={post.title} body={post.body} comments={post.comments} comments_url={post.comments_url }key={post.id} post_id={post.id} gravathar={post.current_user_gravathar} signed_in= {post.signed_in}/>
			)
		}

		return(
			<div className="posts" >
				{posts}
			</div>
		)
	}
}