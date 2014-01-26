# -*- encoding : utf-8 -*-
module Pages
  class Project < Pages::Base
    path '/projects/new/'

    def initialize
      @path_regex = /projects\/(.*)/
    end

  end
end