# -*- encoding : utf-8 -*-
require 'spec_helper'

describe ApplicationHelper do
  it "should load all templates" do
    templates.any?.should_not be_blank

    templates.size.should == Dir["#{Rails.root}/app/views/templates/*/*.html"].size
    templates.select{|t| t.include?("controls")}.size.should == templates.size/2
    templates.select{|t| t.include?("property")}.size.should == templates.size/2
  end
end
