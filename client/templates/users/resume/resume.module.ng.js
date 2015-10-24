var module = angular.module('users.resume.module', []);

module.config(function($stateProvider) {
  $stateProvider.state('resume', {
    url: '/',
    templateUrl: 'client/templates/users/resume/resume.ng.html',
    controller: 'ResumeCtrl',
    controllerAs: 'resumeCtrl'
  });
})
.directive('skillsProgress', function () {
  var self = this;
  console.log(self);
  self.templateUrl = 'client/templates/users/resume/_progress.ng.html';
  self.transclude = true;
  self.scope = {
    title: '@',
    grade: '@'
  };

  self.link = function (scope, elem, attrs) {
  }

  return self;
})
.controller('ResumeCtrl', function($scope, $window) {
  new WOW({scrollContainer: 'md-content'}).init();
});
