# -*- encoding : utf-8 -*-
class SketchesController < ApplicationController
  def add
    project = Project.find_by(project_id: params[:project_id])
    sketch_id = project.sketches.last.sketch_id.to_i + 1
    sketch = project.sketches.create(sketch_id: sketch_id, name: params[:sketch_name])
    render :json => sketch
  end

  def data
    project = Project.find_by(project_id: params[:project_id])
    sketch = project.sketches.select{|s| s.sketch_id == params[:id]}.first
    render :json => {
        controls_data: sketch.data
    }
  end

  def save
    project = Project.find_by(project_id: params[:project_id])
    sketch = project.sketches.select{|s| s.sketch_id == params[:id]}.first
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

    parsed_data.each do |control|
      control["properties"].keys.each do |key|
        unless control["properties"][key].is_a?(String)
          control["properties"][key] = control["properties"][key].values.map(&:symbolize_keys)
        end
      end
    end

    parsed_data.each do |control|
      convert_to_boolean control["properties"]
    end
    parsed_data
  end

  def convert_to_boolean(hash)
    hash.each {|key, value|
      if value.is_a?(Hash)
        convert_to_boolean(value)
      elsif value.is_a?(Array)
        value.each do |v|
          convert_to_boolean(v)
        end
      else
        if value == "true"
          hash[key] = true
        elsif value == "false"
          hash[key] = false
        end
      end
    }
  end
end
