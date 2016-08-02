namespace App {
    angular.module("ToDoList", []);

    class HomeController {
        public listItems: string[];
        public edit: boolean[];
        public editAnItem: string;

        constructor() {
            this.edit = [];
            this.listItems = [
                "Mow lawn",
                "Dog bath",
                "Wipe counter tops"
            ];
        }

        public addItem(item) {
            this.listItems.push(item);
        }

        public deleteItem(item) {
            this.listItems.forEach((current, idx) => {
                if (current == item) {
                    this.listItems.splice(idx, 1);
                }
            });
        }

        public editItem(item, replace) {
            console.log(`${item}: ${replace}`);
            this.listItems.forEach((current, idx) => {
                if (current == item) {
                    this.listItems.splice(idx, 1, replace);
                }
            });
        }
    }

    angular.module("ToDoList").controller("HomeController", HomeController);
}