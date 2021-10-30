var users = ["Custom", "Admin", "Team Lead", "it"];
console.log(users[1])

var masUsers = users.push("distribuidor", "visit");
// ["custom", "admin", "tl", "it", "distribuidor", "visit"]
var deleteUsers = users.pop()
// ["custom", "admin", "tl", "it", "distribuidor"]
var addBegining = users.unshift("ceo");
// [ 'ceo', "custom", "admin", "tl", "it", "distribuidor" ]
var deleteUser = users.shift();
// [ "custom", "admin", "tl", "it", "distribuidor" ]
var position = users.indexOf("Team Lead");
// 2
console.log(position);