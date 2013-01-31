require 'sinatra'
require 'haml'

#this just exposes a url through which to serve the view contents
get "/partials/animals/:animal" do
	haml :"/animals/#{params['animal']}"
end

get "/partials/animals/dogs/:dog" do
	haml :"/animals/dogs/#{params['dog']}"
end

#routes all the rest to the same file
get "*" do
	haml :animals
end