# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "routes" do

  context "root" do
    it "should route to home" do
      assert_routing({ path: "/", method: :get }, { controller: "home", action: "index" })
    end
  end
end
