class Comment extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		comment = this.props.comment
		return(
		  <div className="comment ">
		  	<div className="user_details float-left">
		  		<img src={comment.gravathar} width="50px"/>
		  	</div>
		  	<div className="coment_body float-right">
		  	    <h5>{comment.login}</h5>
		  		{comment.text}
		  	</div>
		  	<div className="clearfix" />
		  </div>
		)
	}
}