angular
  .module("directoryApp", [])
  .controller("directoryController", function($scope) {
    $scope.list = [
      { name: "Christian", age: 20 },
      { name: "Kaylee", age: 19 },
      { name: "Caleb", age: 10 },
      { name: "Greg", age: 48 }
    ];

    $scope.addPerson = () => {
      if ($scope.name && $scope.age) {
        $scope.list.push({ name: $scope.name, age: $scope.age });
        $scope.name = "";
        $scope.age = "";
      }
    };
  });
