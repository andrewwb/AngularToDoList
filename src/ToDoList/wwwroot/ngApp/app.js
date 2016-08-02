var App;
(function (App) {
    angular.module("ToDoList", []);
    var HomeController = (function () {
        function HomeController() {
            this.edit = [];
            this.listItems = [
                "Mow lawn",
                "Dog bath",
                "Wipe counter tops"
            ];
        }
        HomeController.prototype.addItem = function (item) {
            this.listItems.push(item);
        };
        HomeController.prototype.deleteItem = function (item) {
            var _this = this;
            this.listItems.forEach(function (current, idx) {
                if (current == item) {
                    _this.listItems.splice(idx, 1);
                }
            });
        };
        HomeController.prototype.editItem = function (item, replace) {
            var _this = this;
            console.log(item + ": " + replace);
            this.listItems.forEach(function (current, idx) {
                if (current == item) {
                    _this.listItems.splice(idx, 1, replace);
                }
            });
        };
        return HomeController;
    }());
    angular.module("ToDoList").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map