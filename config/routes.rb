# -*- encoding : utf-8 -*-
SketchUi::Application.routes.draw do
  #devise_scope :user do
  #  get '/login', :to => 'devise/sessions#new', :as => :login
  #  get '/logout', :to => 'devise/sessions#destroy', :as => :logout
  #end
  #devise_for :users, :sign_out_via => :get
  root 'projects#create'

  resource :projects, only: [:create]
  get "projects/:id" => "projects#show"
  get "preview/:id" => "projects#show"
  get "projects/:project_id/sketches/:id" => "sketches#data"
  post "projects/:project_id/sketches/add" => "sketches#add"
  post "projects/:project_id/sketches/:id" => "sketches#save"
end
