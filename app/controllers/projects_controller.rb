# -*- encoding : utf-8 -*-
class ProjectsController < ApplicationController

  before_action :okta_authenticate!, only: [:create, :show]

  def create
    project = Project.create(project_id: SecureRandom.hex)
    project.sketches.create(sketch_id: "1", name: "Homepage")
    #project.update_attribute(:user_id, current_user.user_id)
    redirect_to "/projects/#{project.project_id}#1"
  end

  def show
    @project_id = params[:id]
    project = Project.find_by(project_id: params[:id])
    @no_of_sketches = project.sketches.size
    @preview_url = "/preview/#{project.project_id}#1"
    @edit_url = "/projects/#{project.project_id}#1"
  end
end
