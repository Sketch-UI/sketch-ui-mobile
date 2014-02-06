# -*- encoding : utf-8 -*-
class ProjectsController < ApplicationController
  def create
    project = Project.create(name: params[:project_name], width: params[:width], height: params[:height], project_id: SecureRandom.hex)
    project.sketches.create(sketch_id: "1", name: "Homepage")
    redirect_to "/projects/#{project.project_id}#1"
  end

  def show
    @project_id = params[:id]
    project = Project.find_by(project_id: params[:id])
    @preview_url = "/preview/#{project.project_id}#1"
    @edit_url = "/projects/#{project.project_id}#1"
  end
end
