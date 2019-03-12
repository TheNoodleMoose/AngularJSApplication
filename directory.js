angular
  .module("directoryApp", ["ngAnimate"])
  .controller("directoryController", function($q) {
    const dirList = this;
    // This is our list of people, each has a name, age, and img
    dirList.list = [
      {
        name: "Christian",
        age: 20,
        img:
          "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
        github: "https://github.com/TheNoodleMoose"
      },
      {
        name: "Kaylee",
        age: 19,
        img:
          "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg",
        github: "https://github.com/nosidam48"
      },
      {
        name: "Caleb",
        age: 10,
        img:
          "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg",
        github: "https://github.com/asharman"
      },
      {
        name: "Greg",
        age: 48,
        img: "https://randomuser.me/api/portraits/men/36.jpg",
        github: "https://github.com/efinfl"
      }
    ];
    // This function takes our inputs submitted by the users and pushes them to our dirList.list
    dirList.addPerson = () => {
      if (dirList.name && dirList.age && dirList.userName) {
        $q.when(fetch(`https://api.github.com/users/${dirList.userName}`))
          .then(response => {
            return response.json();
          })
          .then(myJson => {
            const userImg = myJson.avatar_url;
            const githubLink = myJson.html_url;
            dirList.list.push({
              name: dirList.name,
              age: dirList.age,
              img: userImg,
              github: githubLink
            });
            // After the users sumbits and we push to our list, reset input fields back to empty
            dirList.name = "";
            dirList.age = "";
            dirList.userName = "";
          });
      }
    };
  });
