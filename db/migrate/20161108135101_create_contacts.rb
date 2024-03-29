class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :email_address
      t.string :phone_number
      t.string :company_name

      t.timestamps
    end
  end
end
