require 'timeout'
class Spinach::Features::UserShouldBeAbleToSaveAMockupSuccessfully < Spinach::FeatureSteps

  step 'I access home page' do
    Pages::Home.visit
  end

  step 'I provide project name' do
    home_page = Pages::Home.new
    home_page.find('#project_name').set("ui-bhasudi")
  end

  step 'I create the project' do
    home_page = Pages::Home.new
    home_page.find('.btn-default').click
  end

  step 'new project should be created' do
    project_page = Pages::Project.new
    is_success?(project_page.find('#toolbox-link').visible?).must_equal true
    is_success?(project_page.find('#phone #drawing-board').visible?).must_equal true
  end

  private
  def is_success? block
      begin
        Timeout.timeout(12) do
          sleep(2) until value = block
          value
        end
      rescue TimeoutError
        false
      end
    end
end
