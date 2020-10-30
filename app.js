var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
/*const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
*/
var person /*: {
  firstname: string;
  lastname: string;
} */ = {
    firstname: "Sunshine",
    lastname: "Cookie",
    hobbies: ['Dance', 'Code', 'Paint'],
    role: Role.AUTHOR
};
person.hobbies.push('Writing');
//person.hobbies[0]='Live';
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
console.log(person);
console.log(person.hobbies);
if (person.role === Role.ADMIN) {
    console.log('isAdmin');
}
else {
    console.log('is not ADMIN');
}
