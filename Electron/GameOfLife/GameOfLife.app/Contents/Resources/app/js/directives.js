angular.module('app')
  .directive('lifeMain', [function() {
    return {
      templateUrl: './views/main.html'
    };
  }])
  .directive('lifeBoard', [function() {
    return {
      templateUrl: './views/board.html'
    };
  }])
  .directive('hudFooter', [function() {
    return {
      templateUrl: './views/hud.html'
    };
  }])
.directive('modal', function () {
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ title }}</h4>' +
              '</div>' +
              '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        // scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true) {
            $(element).modal('show');
            // scope.title = attrs.title;
          } else
            $(element).modal('hide');
        });
        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
            scope.title = attrs.title;
          });
        });
        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
