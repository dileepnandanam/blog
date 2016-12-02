class Admin::PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
  end


  def new
    @post = Post.new
  end


  def edit
  end


  def update
    
    if @post.update(post_params)
      redirect_to admin_post_path, notice: 'Post was successfully updated.'
    else
      frender :edit
    end

  end


  def destroy
    @post.destroy
    redirect_to admin_posts_path, notice: 'Post was successfully destroyed.' 
  end


  def create
    @post = Post.new(post_params)
      if @post.save
        redirect_to admin_posts_path, notice: 'Post was successfully created.'
      else
        render :new
      end
    end
  end

  private

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body)
    end

