source "https://rubygems.org"
ruby '3.1.0'

gem "jekyll", "~> 4.2.2"

# To get latest stable, uncomment:
# gem "jekyll-openui5"
# To get current development, uncomment:
# gem 'jekyll-openui5', git: "https://github.com/jekyll-octopod/jekyll-openui5"
# For developers, use it locally installed, uncomment:
gem 'jekyll-openui5', path: "../jekyll-openui5"

# Markdown parser
gem "kramdown-parser-gfm", "~> 1.1.0"

# Webserver
gem "webrick", "~> 1.7.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.16"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1" if Gem.win_platform?
