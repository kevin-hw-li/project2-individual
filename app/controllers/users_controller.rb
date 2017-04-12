class UsersController < ApplicationController
  def new
    @user = User.new
    raise 'hell'
  end

  def create
    @user = User.create(clean_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
      flash[:success] = "Account created."
    else
      render :new
      flash[:error] = "Please try again."
    end
  end

  private

  def clean_params
    params.require(:user).permit(:name, :email)
  end

end
