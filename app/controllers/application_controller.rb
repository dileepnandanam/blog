class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :update_sanitized_params, if: :devise_controller?
    
    def after_sign_in_path_for(resource)
      if resource.usertype == 'admin'
      	admin_posts_path
      else
      	root_path
      end
    end
  
    

  def update_sanitized_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:login, :email])
  end
end
