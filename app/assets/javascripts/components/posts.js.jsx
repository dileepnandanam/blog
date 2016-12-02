class Posts extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {

		posts = []
		for(i=0; i<this.props.posts.length;i++){
			post = this.props.posts[i]
			posts.push(
				<Post created_at={post.created_at} title={post.title} body={post.body} />
			)
		}

		return(
			<div className="posts" >
				{posts}
			</div>
		)
	}
}