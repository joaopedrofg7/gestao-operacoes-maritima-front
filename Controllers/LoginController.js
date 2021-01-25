
let success;
function Login() {
     
    
    document.getElementById("Login").onclick = function () {
            
        let data = {};
    data.password = document.getElementById('password').value;
    data.email_utilizador = document.getElementById('Email').value;

    try{
        fetch("http://188.166.174.213:8080/signin", {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(data)

        }).then(res => {
            return res.json();
        }).then(data => {
            success = data.success;
            if(success == true){
                location.href = "./CoolAdmin-master/graficos.html";
               }
               else{
                alert("credenciais invalidas");
               }
        })
    } catch(err){
           console.log({msg: err});
      
    }
 
}
}
/*
document.getElementById("Login").onclick = function () {
    Login()
    location.href = "./CoolAdmin-master/graficos.html";
 }

 document.getElementById("Logout").onclick = function(){
     Logout()
     location.href = "../login.html"
    }
//document.getElementById("Login").onclick = function () {
  //  location.href = "./CoolAdmin-master/graficos.html";
//};

*/
function Logout() {

    document.getElementById("Logout").onclick = function(){
       
    try{
        fetch("http://188.166.174.213:8080/logout", {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
            credentials: "include",
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        })
        location.href = "../login.html"
    } catch(err){
       
        console.log({msg: err});

    }
  }
}