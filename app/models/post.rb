class Post < ActiveRecord::Base

	has_many :comments
	default_scope { where('deleted != true')}
	def to_param
		permalink
	end

	before_save :set_permalink
	def set_permalink
		self.permalink = title.parameterize
	end
end
