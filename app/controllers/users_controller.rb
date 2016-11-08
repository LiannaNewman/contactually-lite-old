class UsersController < ApplicationController
  def index
  end

  def show
    @users = User.all
  end

  def edit
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.update(
      name: params[:name],
      email: params[:email]
    )
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    flash[:success] = "#{@user.name} has been removed successfully"
    redirect_to '/users'
  end
end
