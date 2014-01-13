# -*- encoding : utf-8 -*-
class SketchesController < ApplicationController
  def create
    sketch = Sketch.find_by(identifier: params[:identifier])
    sketch.data = [params[:data]]
    sketch.save
    render :json => {}
  end
end
