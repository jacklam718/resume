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
  self.templateUrl = 'client/templates/users/resume/_progress.ng.html';
  self.scope = {
    title: '@',
    grade: '@'
  };

  self.link = function (scope, elem, attrs) {
  }

  return self;
})
.controller('ResumeCtrl', function($scope, $meteor, $window, $mdToast) {
  new WOW({scrollContainer: 'md-content'}).init();

  $scope.sendEmail = function () {
    $scope.contact.senddingEmail = true;
    var form = angular.copy($scope.contact.form);

    if (form.name) {
      form.from = [form.name, '<', form.from, '>'].join('');
    }

    $meteor.call('sendEmail', form).then(function (resp) {
      $scope.contact.senddingEmail = false;
      $scope.contact.form = {
        to: 'jacklam718@gmail.com'
      };

      $mdToast.show({
        hideDelay: 4000,
        position: 'top right',
        template: [
          '<md-toast class="md-toast notification bg-green-500 color-white">',
            '<p>Email Sent. <ng-md-icon icon="check_circle"></ng-md-icon></p>',
          '</md-toast>'
        ].join('')
      });
    }, function(err) {
      console.error(err);
    });
  }
});
