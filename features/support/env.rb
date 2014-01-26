ENV['RAILS_ENV'] = 'test'
require './config/environment'

require 'minitest/spec'

Dir["#{Rails.root}/features/pages/**/*.rb"].sort.each do |file|
  require file
end

Spinach.hooks.before_run do
  case ENV['headless']
    when 'false'
      Capybara.default_driver = Capybara.javascript_driver = :selenium
    else
      require 'headless'
      unless ENV['TEST_ENV_NUMBER'].blank?
        display = ENV['TEST_ENV_NUMBER'].to_i + 1
      else
        display = 99
      end
      headless = Headless.new(:display => display, :reuse => false)
      headless.start
      Capybara.default_driver = Capybara.javascript_driver = :webkit
  end
end

# require 'database_cleaner'
# DatabaseCleaner.strategy = :truncation
#
# Spinach.hooks.before_scenario{ DatabaseCleaner.clean }
#
# Spinach.config.save_and_open_page_on_failure = true
