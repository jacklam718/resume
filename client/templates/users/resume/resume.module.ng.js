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
.controller('ResumeCtrl', function($scope, $meteor, $window, $mdToast, $mdDialog) {
  new WOW({scrollContainer: 'md-content'}).init();

  $scope.onOpenProjectDialog = function (projectKey, ev) {
    $mdDialog.show({
      controller: function($scope) {
        $scope.onCloseDialog = function() {$mdDialog.hide();};
        $scope.project = {
          'gogovan-hk': {
            name: 'GoGoVan HK',
            role: 'front end',
            stacks: 'AngularJs, Jquery, KOA'
          },
          'gogovan-cn': {
            name: 'GoGoVan CN',
            role: 'front end',
            stacks: 'AngularJs, Jquery, KOA'
          },
          'gogovan-sg': {
            name: 'GoGoVan SG',
            role: 'front end',
            stacks: 'AngularJs, Jquery, KOA'
          },
          'chefconnect': {
            name: 'ChefConnect',
            role: 'front end + back end',
            stacks: 'AngularJs, Jquery, Ruby on Rails'
          }
        }[projectKey];

      },
      templateUrl: 'client/templates/users/resume/_project.dialog.ng.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

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
