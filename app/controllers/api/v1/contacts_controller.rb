module Api
  module V1
    class ContactsController < ApplicationController

      def index
        @contacts = Contact.all
      end

      def update
        @contact = Contact.find_by(id: params[:id])
        @contact.update(
          first_name: params[:first_name],
          last_name: params[:last_name],
          email_address: params[:email_address],
          phone_number: params[:phone_number],
          company_name: params[:company_name]
        )
        render json: {success: 'Contact Successfully Updated!'}
      end

      def destroy
        @contact = Contact.find_by(id: params[:id])
        @contact.destroy
        render json: {success: 'Contact Successfully Deleted!'}
      end
    end
  end
end
