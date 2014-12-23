class Project
  include Mongoid::Document
  has_many :sketches
  field :name, type: String
  field :width, type: String
  field :height, type: String
  field :project_id, type: String
  field :user_id, type: Integer
end
