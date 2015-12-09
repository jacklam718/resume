angular.module('app', [
  'angular-meteor',
  'ngAnimate',
  'ngMaterial',
  'ngMdIcons',
  'ui.router',
  'users.resume.module'
])
.config(function($locationProvider, $mdThemingProvider, $mdIconProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  // theme
  $mdThemingProvider
    .definePalette('customBackground', {
      '50': '#a4d4fa',
      '100': '#8cc9f9',
      '200': '#74bdf8',
      '300': '#5bb2f7',
      '400': '#43a6f5',
      '500': '#2B9BF4',
      '600': '#1390f3',
      '700': '#0c82e0',
      '800': '#0a74c8',
      '900': '#0966b0',
      'A100': '#2B9BF4',
      'A200': '#2B9BF4',
      'A400': '#2B9BF4',
      'A700': '#2B9BF4'
    });

  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('light-blue')
    // .backgroundPalette('blue-grey')
});
