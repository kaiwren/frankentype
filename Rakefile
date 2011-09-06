require 'rubygems'
require 'bundler'
require 'bundler/setup'
require 'rake'
load 'jasmine/tasks/jasmine.rake'
require 'jslint/tasks'
JSLint.config_path = "config/jslint.yml"

desc 'Combine all of the js files into one'
task :collate do
  here = File.expand_path(File.dirname(__FILE__))
  out = File.join(here, ENV['FRANKENTYPE_OUT'] || 'out', 'Frankentype.js')
  files = %w(
  ajax.js
  extensions.js
  utils.js
  sizzle.js
  outro.js
  )
  outfile = File.new(out,  File::CREAT|File::TRUNC|File::RDWR)
  files.each do |infile|
    outfile.puts File.open(File.join(here, "lib", infile)).readlines
  end
  outfile.close
end

task :default => ['collate', 'jasmine:ci', 'jslint']