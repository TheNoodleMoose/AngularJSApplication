angular
  .module("directoryApp", [])
  .controller("directoryController", function() {
    const dirList = this;
    // This is our list of people, each has a name, age, and img
    dirList.list = [
      {
        name: "Christian",
        age: 20,
        img:
          "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg"
      },
      {
        name: "Kaylee",
        age: 19,
        img:
          "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
      },
      {
        name: "Caleb",
        age: 10,
        img:
          "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg"
      },
      {
        name: "Greg",
        age: 48,
        img: "https://randomuser.me/api/portraits/men/36.jpg"
      }
    ];
    // This function takes our inputs submitted by the users and pushes them to our dirList.list
    dirList.addPerson = () => {
      if (dirList.name && dirList.age) {
        dirList.list.push({ name: dirList.name, age: dirList.age });
        // After the users sumbits and we push to our list, reset input fields back to empty
        dirList.name = "";
        dirList.age = "";
      }
    };
  });
