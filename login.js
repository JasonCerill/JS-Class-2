let userEmail = prompt("Enter your Email:  ");
let password = prompt("Enter your Password:  ");
console.log(userEmail, password);
if(userEmail=="admin@admin.com" && password=="Test1234"){
    document.write("Welcome" + userEmail);

}else{
    document.write("Invalid credentials");
}

