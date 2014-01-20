class Sketch
  include Mongoid::Document
  field :sketch_id, type: String
  field :name, type: String
  field :data, type: Array
  belongs_to :project
end
