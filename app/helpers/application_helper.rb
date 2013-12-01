# -*- encoding : utf-8 -*-
module ApplicationHelper
  def load_templates
    Dir["#{Rails.root}/app/views/templates/controls/*.html"].each do |file|
      render template: "templates/controls/#{File.basename(file, ".html")}"
    end

    Dir["#{Rails.root}/app/views/templates/property/*.html"].each do |file|
      render template: "templates/property/#{File.basename(file, ".html")}"
    end
  end

  def templates
     templates = []
     Dir["#{Rails.root}/app/views/templates/controls/*.html"].each do |file|
       templates << "templates/controls/#{File.basename(file, ".html")}"
     end
     Dir["#{Rails.root}/app/views/templates/property/*.html"].each do |file|
       templates << "templates/property/#{File.basename(file, ".html")}"
     end
    templates
  end
end
