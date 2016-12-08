class AddStateToPost < ActiveRecord::Migration
  def change
    add_column :posts, :state, :string, default: 'draft'
  end
end
