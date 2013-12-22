source 'https://rubygems.org'

gem 'rails', '4.0.1'
gem 'turbolinks'
gem 'jbuilder', '~> 1.2'
gem 'magic_encoding'
gem 'mongoid', git: 'git://github.com/mongoid/mongoid.git'

group :assets do
  gem 'uglifier', '>= 1.3.0'
  gem 'sass-rails', '~> 4.0.0'
  gem 'jquery-rails', "~> 2.0.3"
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :production do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'rspec-rails', '~> 2.0'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  gem 'sqlite3'
  gem 'pry-rails'
  gem 'pry'
  gem 'pry-nav'
  gem 'brakeman'
  gem 'rake'
  gem 'travis-lint'
end

group :test  do
  gem 'rspec'
  gem 'factory_girl'
  gem 'fuubar'
end
