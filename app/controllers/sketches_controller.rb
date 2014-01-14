# -*- encoding : utf-8 -*-
class SketchesController < ApplicationController
  def home
  end

  def new
    @sketch = Sketch.create(identifier: SecureRandom.hex)
    redirect_to :action => 'show', :id => @sketch.identifier
  end

  def show
    @sketch_identifier = params[:id]
  end

  def create
    sketch = Sketch.find_by(identifier: params[:identifier])
    sketch.data = [params[:data]]
    sketch.save
    render :json => {}
  end
end
