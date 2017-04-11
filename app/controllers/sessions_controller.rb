class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_name(params[:name])
    if user.present? && user.authenticate(params[:image_id])
      user.id = session[:user_id]
      redirect_to root_path
      flash[:success] = "You have successfully signed in."
    else
      redirect_to signin_path
      flash[:error] = "Something went wrong. Please try again."
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path
    flash[:success] = "You have successfully signed out."
  end


end
