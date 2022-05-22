let random = Math.round(Math.random() * 100 + 5);

const usersObject = {
    property: "Value",
    [`id_${random}`]: "Random Value"
};

console.log(usersObject);

const users = ["Beto", "Dayana", "pque", "lola", "kika"];

users.forEach((users, index) => usersObject[`id_${index}`] = users);
console.log(usersObject);