class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?
  
    def current_user 
      return nil unless session[:session_token]
      @current_user ||= User.find_by_session_token(session[:session_token])
    end
  
    def logged_in?
      !current_user.nil?
    end
    
    def login!(user)
      session[:session_token] = user.session_token 
    end
  
    def logout!
      current_user.reset_session_token! if logged_in?
      session[:session_token] = nil
    end
end
