function Sheduler($scope) {
    $scope.OwnerName = "Test";
    $scope.Staff = ["Worker1", "Worker2"];
    $scope.Project = ["Project1", "Project2"];

    $scope.Task = [{
        Description: "TaskDescription",
        Executor: $scope.Staff[0],
        Project: $scope.Project[0],
    }];

    $scope.ViewTypes =
    [
            {
                name: "ProjectPrewiev",
                getGroups: function () {
                    return $scope.Project;
                }()
            },
        {
            name: "StaffPrewiev",
            getGroups: function () {
                return $scope.Staff;
            }()
        }
    ];

    $scope.ViewMode = $scope.ViewTypes[0];
}