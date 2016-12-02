class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]


  def index
    @posts = Post.all
    @props = @posts.map do |post|
      {
        created_at: post.created_at.strftime('%d %B %Y'),
        title: post.title,
        body: post.body
      }
    end
  end

  def show
  end


  private

    def set_post
      @post = Post.find(params[:id])
    end
end
