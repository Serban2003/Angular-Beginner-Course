"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: 'John', email: "john@example.com" };
//Object distructuring
// user.name;
// user.email;
let { name: username, email } = { id: 1, name: 'John', email: "john@example.com" };
username;
email;
let employee = { name: 'John', id: 1, email: 'john@example.com', salary: 1000 };
//Object restructuring
let [user1, user2, ...restUsers] = [
    { id: 1, name: 'John', email: "john@example.com" },
    { id: 2, name: 'Mary', email: "mary@example.com" },
    { id: 3, name: 'Peter', email: "peter@example.com" },
    { id: 4, name: 'Lisa', email: "lisa@example.com" },
    { id: 5, name: 'Jane', email: "jane@example.com" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
//# sourceMappingURL=interface.js.map