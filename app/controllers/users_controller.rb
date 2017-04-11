class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(clean_params)
    if @user.save
      @user.id = session[:user_id]
      redirect_to root_path
      flash[:success] = "Account created."
    else
      render :new
      flash[:error] = "Please try again."
  end

  private

  def clean_params
    params.require(:user).permit(:name, :email, :image_id)
  end

end
