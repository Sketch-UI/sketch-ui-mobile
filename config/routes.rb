# -*- encoding : utf-8 -*-
SketchUi::Application.routes.draw do
  root 'sketches#home'
  get "sketches/new" => "sketches#new"
  post "sketches/" => "sketches#create"
end
