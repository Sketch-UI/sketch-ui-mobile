desc 'generate control files'
task :generate_control_files do

  puts "Enter Control ID (Camel case, must be unique Eg: ButtonControl)"
  control_metadata_id = STDIN.gets.chomp

  puts "Enter Display name for control"
  control_display_name = STDIN.gets.chomp

  metadata_file_name = control_metadata_id.dup
  metadata_file_name = metadata_file_name.slice!(0).downcase + metadata_file_name
  metadata_file = File.new("#{Rails.root}/app/assets/javascripts/controls/#{metadata_file_name}.js", "w")
  metadata_file.puts("window.ControlsMetadata = window.ControlsMetadata || {};")
  metadata_file.puts("window.ControlsMetadata['#{control_metadata_id}'] = {")
  metadata_file.puts("  initialData: {},")
  metadata_file.puts("  propertyWindowCallback: function(ractiveControl){}")
  metadata_file.puts("};")
  metadata_file.close

  links_file = File.open("#{Rails.root}/app/views/partials/_links.html", 'a')
  links_file.puts("<li><a href='#' data-metadata-id='#{control_metadata_id}'>#{control_display_name}</a></li>")
  links_file.close


  templates_file = File.new("#{Rails.root}/app/views/templates/controls/#{metadata_file_name.underscore}.html", "w")
  templates_file.puts("<script id='#{control_metadata_id}-control-template' type='text/ractive'>")
  templates_file.puts(" <div class='control' data-control-id='{{controlId}}' data-metadata-id='#{control_metadata_id}'>")
  templates_file.puts("   <!--PASTE YOUR CONTROL HTML HERE-->")
  templates_file.puts(" </div>")
  templates_file.puts("</script>")
  templates_file.close


  properties_file = File.new("#{Rails.root}/app/views/templates/property/#{metadata_file_name.underscore}.html", "w")
  properties_file.puts("<script id='#{control_metadata_id}-property-template' type='text/ractive'>")
  properties_file.puts(" <div class='form-group properties' data-control-id='{{controlId}}'>")
  properties_file.puts("   <!--<input type='text' class='property' value='{{dummy_property}}'>-->")
  properties_file.puts(" </div>")
  properties_file.puts("</script>")
  properties_file.close

  p "#{control_metadata_id} is created successfully."
end