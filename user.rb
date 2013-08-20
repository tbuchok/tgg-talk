class User
  def self.find(options = {})
    s = ARGV[0].to_i || 0
    ms = s * 1000
    sleep s
    puts "Query: #{ms}ms"
    { 
      id:  options[:id], 
      name: 'Tom Buchok',
      created_at: Time.now,
      updated_at: Time.now
    }
  end
end