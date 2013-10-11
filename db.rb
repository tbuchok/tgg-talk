load File.join(File.dirname(__FILE__), 'models/', 'user.rb')

user = User.find id: 1
puts "1. #{user}\n"
puts "2. Done!\n"