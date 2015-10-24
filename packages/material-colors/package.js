Package.describe({
  summary: "material-colors - Colors of Google's Material Design made available to coders"
});

Package.on_use(function(api) {
  api.add_files(['material-colors/dist/colors.js', 'material-colors/dist/colors.css'], 'client');
});
