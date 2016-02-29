angular.module('templates-main', ['index.html']);

angular.module("index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("index.html",
    "<!DOCTYPE html><html lang=\"en\" ng-app=\"app\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><head><title>Food Time</title><link rel=\"stylesheet\" href=\"css/dependente.css\"/></head><body><ui-view></ui-view></body><script src=\"js/dependente.js\"> </script><script src=\"js/templates.js\"> </script><script src=\"js/scripts.js\"> </script></html>");
}]);
