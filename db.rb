load 'user.rb'

user = User.find id: 1
puts "1. #{user}\n"
puts "2. Done!\n"