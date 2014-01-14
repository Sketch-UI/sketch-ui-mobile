# -*- encoding : utf-8 -*-
SketchUi::Application.routes.draw do
  root 'sketches#home'
  get "sketches/new" => "sketches#new"
  get "sketches/:id" => "sketches#show"
  get "sketches/:id/data" => "sketches#data"
  post "sketches/" => "sketches#create"
end
