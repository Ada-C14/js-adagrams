require 'ostruct'
greeting = OpenStruct.new(type: : Hello, target: : World, source: : Opal)
puts "#{greeting.type} #{greeting.target} from #{greeting.source}!"