let user ={
    fullname:"ALex",
    mobile:9035616844,
    age:30,
    gender:"Female"
}

console.log(user.fullname);
console.log(user.mobile);
console.log(user.age);
console.log(user.gender);

let userList =[
{
    fullname:"Archana",
    mobile:9035616844,
    age:30,
    Year:"Female",
    edu:"MCA"
},
{
    fullname:"Jason",
    mobile:9035616844,
    age:36,
    Year:"MALE",
    edu:"Btech"
},

{
    fullname:"Smith",
    mobile:9035616844,
    age:35,
    Year:"MAle",
    edu:"BA"
},

{
    fullname:"Ram",
    mobile:9035616844,
    age:40,
    Year:"MALE",
    edu:"CA"
},


];

console.log("Total user:::", userList.length);

userList.map((oneUser,index)=>{
    console.log(index,oneUser.fullname,oneUser.mobile,oneUser.age,oneUser.Year,oneUser.edu);
    console.log("--------------------");
})

