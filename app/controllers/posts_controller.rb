class PostsController < ApplicationController
  require 'digest/md5'
  before_action :set_post, only: [:show, :edit, :update, :destroy]


  def index
    @posts = Post.where(state: 'published').order('created_at DESC').all
    @props = @posts.map do |post|
      {
        created_at: post.created_at.strftime('%d %B %Y'),
        title: post.title,
        body: post.body,
        comments: comments_for(post),
        comments_url: comments_url,
        id: post.id,
        signed_in: current_user.present?,
        gravathar: current_user.present? ? gravathar(current_user.email) : '',
        post_url: post_path(post)
      }
    end
  end


  def show
    @props = {
        created_at: @post.created_at.strftime('%d %B %Y'),
        title: @post.title,
        body: @post.body,
        comments: comments_for(@post),
        comments_url: comments_url,
        post_id: @post.id,
        signed_in: current_user.present?,
        login: current_user.try(:login),
        gravathar: current_user.present? ? gravathar(current_user.email) : '',
        post_url: post_path(@post)
      }
  end


  private
    def gravathar(email)
      "https://secure.gravatar.com/avatar/#{Digest::MD5.hexdigest(email)}"
    end
      
    def set_post
      @post = Post.where(permalink: params[:id]).first
    end

    def comments_for(post)
      post.comments.map{ |comment|
        {
          id: comment.id,
          created_at: comment.created_at.strftime('%d %B %Y'),
          text: comment.text,
          gravathar: gravathar(comment.user.email),
          email: comment.user.email,
          login: comment.user.login
        }
      }

    end
end
