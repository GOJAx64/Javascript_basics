const person = {
    name: "",
    lastName: "",
    age: 0
}

const handler = {
    set(obj, prop, value) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`The property "${prop}" does not exist in the object person.`);
        }
        if ((prop === "name" || prop === "lastName") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(value))) {
            return console.error(`The property "${prop}"" just aceppt letters and white spaces.`);
        }
        obj[prop] = value;
    }
}

const beto = new Proxy(person, handler);

beto.name = "beto";
beto.lastName = "García";
beto.age = 22;
beto.twitter = "@beto";
console.log(beto);
console.log(person);