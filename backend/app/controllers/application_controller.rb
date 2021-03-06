class ApplicationController < ActionController::Base
protect_from_forgery with: :exception
helper_method :current_user, :signed_in?

def current_user
  @current_user ||= User.find_by_session_token(session[:session_token])
end

def sign_in(user)
  @current_user = user
  sessoin[:session_token] = user.reset_session_token!
end

def signed_in?
  !!current_user
end

def sign_out
  current_user.try(:reset_token!)
  session[:session_token] = nil
end

def require_sign_in
  unless current_user
    renderjson: { base: ['invalid credentials'] }, status: 401
  end
end

end
