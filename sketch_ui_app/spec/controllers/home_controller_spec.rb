# -*- encoding : utf-8 -*-
require 'spec_helper'

describe HomeController do
  context "index" do
    it "should return index" do
      get :index
      response.should be_success
      response.should render_template :index
    end
  end
end
