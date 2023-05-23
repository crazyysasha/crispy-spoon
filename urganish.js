export function urganganNarsalarimiz() {


    // console.log([1, 3, 5, 45].length);

    // let users = ["Ravshan", "Diyorbek"];
    // users.push("Diyorbek 2");
    // users[3] = "Barish"
    // users[2] = "Otabek"
    // users[users.length] = "Sasha";
    // users[users.length] = "Diyorbek 2";
    // users[users.length] = "Ravshan 2";


    class User {
        name;
        surname;
        age;
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        getFullname() {
            // this.addAge();
            return this['surname'] + "     " + this.name;
        }
        addAge(age) {
            this.age = age;
        }
    }

    console.log(new User('Ravshanbek', 'Yo`ldoshev'));

    let users = [new User("Sasha", "Raimov"), new User("Ravshan", "Yo`ldoshev")];

    console.log(users);


    users[0].addAge(43);
    users[1].addAge(20);

    for (let user of users) {
        // user.addAge(23);
        console.log(user.getFullname());
    }

    for (let index in users) {
        console.log(users[index]);
    }


    for (let index = 0; index < 10; index += 3) {
        console.log(index);
    }

    users.forEach(function (user) {
        user.addAge(19);
        console.log(user);
    });


    let mappedUsers = users.map(function (user) {
        user.addAge(19);
        return {};
    });

    console.log(mappedUsers);

    console.log(users.find((user) => { return user.name == 'Sasha' }));

}