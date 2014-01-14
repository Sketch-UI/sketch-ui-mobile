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

  def data
    sketch = Sketch.find_by(identifier: params[:id])
    render :json => {
        controls_data: sketch.data
    }
  end

  def create
    sketch = Sketch.find_by(identifier: params[:identifier])
    sketch.data = parse_data
    sketch.save
    render :json => {}
  end

  private
  def parse_data
    parsed_data = []
    return parsed_data unless params[:data].present?
    params[:data].keys.each do |key|
      parsed_data << params["data"][key]
    end
    parsed_data
  end
end
