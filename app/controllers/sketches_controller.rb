# -*- encoding : utf-8 -*-
class SketchesController < ApplicationController
  def home
  end

  def new
    @sketch = Sketch.create(identifier: SecureRandom.hex)
  end

  def create
    sketch = Sketch.find_by(identifier: params[:identifier])
    sketch.data = [params[:data]]
    sketch.save
    render :json => {}
  end
end
