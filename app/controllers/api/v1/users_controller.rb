module Api
  module V1
    class UsersController < ApplicationController

      def index
        @users = User.all
      end

      def create
        @user = User.new(
          name: params[:name],
          email: params[:email]
        )
        if user.save
          render json: {message: 'User created successfully!'}
        else
          render json: {errors: user.errors.full_messages}
        end
      end

      def update
        @user = User.find_by(id: params[:id])
        @user.update(
          name: params[:name],
          email: params[:email]
        )
        render json: {success: 'User Successfully Updated!'}
      end

      def destroy
        @user = User.find_by(id: params[:id])
        @user.destroy
        render json: {success: 'User Successfully Deleted!'}
      end
    end
  end
end
