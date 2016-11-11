class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
  end

  def show
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email_address: params[:email_address],
      phone_number: params[:phone_number],
      company_name: params[:company_name]
    )
    flash[:success] = 'New Contact Added Successfully!'
    redirect_to '/contacts'
  end

  def edit
    @contact = Contact.find_by(id: params[:id])
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
  end

  def destroy
    @contact = Contact.find_by(id: params[:id])
    @contact.destroy
    flash[:success] = "#{@contact.name} has been removed successfully"
    redirect_to '/contacts'
  end
end
