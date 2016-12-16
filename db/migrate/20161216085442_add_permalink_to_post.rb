class AddPermalinkToPost < ActiveRecord::Migration
  def up
    add_column :posts, :permalink, :string
    Post.all.each do |post|
    	post.set_permalink
    	post.save
    end
  end
  def down
  	remove_column :posts, :permalink, :string
  end
end
