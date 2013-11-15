# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "routes" do

  context "root" do
    it "should route to root" do
      assert_routing({ path: "/", method: :get }, { controller: "home", action: "index" })
    end
  end

  context "designer" do
    it "should route to index action" do
      assert_routing({ path: "/designer", method: :get }, { controller: "designer", action: "index" })
    end
  end
end
