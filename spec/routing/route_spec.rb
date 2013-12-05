# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "routes" do

  context "root" do
    it "should route to designer screen" do
      assert_routing({ path: "/", method: :get }, { controller: "designer", action: "index" })
    end
  end
end
