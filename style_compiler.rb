require 'sinatra'

get '/style.css' do
  scss :style
end
