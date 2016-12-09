class Admin::PostsController < ApplicationController
  include ::ActionView::Layouts
  before_action :set_post, only: [:show, :edit, :update, :destroy, :toggle_state]
  before_action :authenticate_user
  layout 'admin'
  def index
    @posts = Post.all
    @props = @posts.map do |post|
      {
        title: post.title,
        body: post.body,
        created_at: post.created_at,
        id: post.id,
        post_url: admin_post_path(post),
        destroy_url: admin_post_path(post),
        state: post.state,
        toggle_state_url: toggle_state_admin_post_path(post),
        preview_url: post_path(post)

      }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: {title: @post.title, body: @post.body}}
    end 
  end


  def new
    @post = Post.new
  end


  def edit
  end


  def update
    
    if @post.update(post_params)
      render json: {
          title: @post.title,
          body: @post.body,
          created_at: @post.created_at,
          id: @post.id,
          post_url: admin_post_path(@post),
          destroy_url: admin_post_path(@post),
          state: @post.state,
          toggle_state_url: toggle_state_admin_post_path(@post),
          preview_url: post_path(@post)
        }.to_json
    end
  end


  def destroy
    id = @post.id
    @post.destroy
    render json: {id: id}
  end

  def toggle_state
    if @post.update_attribute(:state, 
        @post.state == 'published' ? 'draft' : 'published'
      )
      render json: {id: @post.id, state: @post.state}
    end
  end

  def create
    @post = Post.new(post_params)
      if @post.save
        render json: {
          title: @post.title,
          body: @post.body,
          created_at: @post.created_at,
          id: @post.id,
          post_url: admin_post_path(@post),
          destroy_url: admin_post_path(@post),
          state: @post.state,
          toggle_state_url: toggle_state_admin_post_path(@post),
          preview_url: post_path(@post)
        }.to_json

      else
        render nothing: true, status: 422
      end
    end
  end



  private

    def authenticate_user
      if current_user.try(:usertype) == 'admin'
        authenticate_user!
      else
        redirect_to root_path
      end
    end

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body)
    end

