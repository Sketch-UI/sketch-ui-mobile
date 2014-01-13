class Sketch
  include Mongoid::Document
  field :identifier, type: String
  field :data, type: Array
end
