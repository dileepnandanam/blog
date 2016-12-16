class Post < ActiveRecord::Base
	has_many :comments
	default_scope { where('deleted != true')}
	def to_param
		title.parameterize
	end
end
