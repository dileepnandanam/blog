class Post < ActiveRecord::Base
	has_many :comments
	default_scope { where('deleted != true')}
end
