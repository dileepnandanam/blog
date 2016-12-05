class CommentsController < ApplicationController
	before_action :authenticate_user!
	def create

		@comment = Comment.new(post_params)
		@comment.user_id = current_user.id
		if @comment.save
			render nothing: true, head: :ok
		else
			render nothing: true, status: 422
		end
	end
	

	private

	def post_params
		params.require(:comment).permit(:text, :post_id)
	end
end