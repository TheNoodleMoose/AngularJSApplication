angular
  .module("directoryApp", [])
  .controller("directoryController", function() {
    const dirList = this;

    dirList.list = [
      { name: "Christian", age: 20 },
      { name: "Kaylee", age: 19 },
      { name: "Caleb", age: 10 },
      { name: "Greg", age: 48 }
    ];

    dirList.addPerson = () => {
      if (dirList.name && dirList.age) {
        dirList.list.push({ name: dirList.name, age: dirList.age });
        dirList.name = "";
        dirList.age = "";
      }
    };
  });
