class AddUsertypuToUser < ActiveRecord::Migration
  def change
    add_column :users, :usertype, :string
  end
end
