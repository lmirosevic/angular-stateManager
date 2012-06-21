require 'sinatra'
require 'haml'

get "/partials/console/:page" do
	haml :"/console/#{params['page']}"
end

get "/partials/console/monitors/:mode" do
	haml :"/console/monitors/#{params['mode']}"
end

get "*" do
	haml :console
end