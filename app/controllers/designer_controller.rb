# -*- encoding : utf-8 -*-
class DesignerController < ApplicationController
  def index
    @sketch = Sketch.create(identifier: SecureRandom.hex)
  end
end
