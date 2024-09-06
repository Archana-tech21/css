let userlist=[
{
    city:"Bangalore",
    Customer:['ALex','Sumit','Mohit'],

},

{
    city:"Chennai",
    Customer:['Gopi','Ganesh','Raj','Punit'],

},

{
    city:"Delhi",
    Customer:['Ankit','Mukesh']

}

];

userlist.map((user,index)=>{
    console.log(user.city);
    console.log("\t",user.Customer.length,"--Customer");
    user.Customer.map((fullname,index2)=>{
        console.log("\t",fullname);
    })
})