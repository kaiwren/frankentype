require 'rubygems'
require 'bundler'
require 'bundler/setup'
require 'jslint/tasks'
JSLint.config_path = "config/jslint.yml"

desc 'Combine all of the js files into one'
task :collate do
  here = File.expand_path(File.dirname(__FILE__))
  out = File.join(here, ENV['FRANKENTYPE_OUT'] || 'out', 'frankentype.js')
  files = %w(
  ajax.js
  extensions.js
  utils.js
  sizzle.js
  outro.js
  )
  File.open(out, "w") do |outfile|
    files.each do |infile|
      outfile.puts File.open(File.join(here, "lib", infile)).readlines
    end
  end
end

task :default => ['jslint', 'collate']