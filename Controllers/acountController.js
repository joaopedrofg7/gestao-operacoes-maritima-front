
function read() {
    try{
    fetch('http://188.166.174.213:8080/usersProfile', {
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        method: 'GET',
        credentials: "include"
 
    }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            let UserName = document.getElementById("Nome");
            UserName.value = data[0].nome;
            let EmailUser = document.getElementById("Email");
            EmailUser.value = data[0].email_utilizador;
      
            
        })
} catch(err){
    console.log({msg: err});
}
}


function Recover() {
     
    
    document.getElementById("Recover").onclick = function () {
            
        let data = {};
   
    data.email_utilizador = document.getElementById('Email').value;

    try{
        fetch("http://188.166.174.213:8080/usersRecoverPassword", {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify(data)

        }).then(res => {
            return res.json();
        }).then(data => {
            success = data.success;
            if(success == true){
               }
               else{
               }
        })
    } catch(err){
           console.log({msg: err});
      
    }
     alert("caso o email exista será enviada uma nova palavra pass para o seu email");
}
}


function ChangeProfile() {
     
    
    document.getElementById("save").onclick = function () {
            
        let data = {};
        data.email_utilizador = document.getElementById('Email').value;
        data.nome= document.getElementById("Nome").value;
    
    try{
        fetch("http://188.166.174.213:8080/usersProfileName", {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify(data)

        }).then(res => {
            return res.json();
        }).then(data => {
            success = data.success;
            if(success == true){
               }
               else{
               }
        })
    } catch(err){
           console.log({msg: err});
      
    }
}
}

function  SaveChanges(){
  document.getElementById("save").addEventListener ("click", function() {
    var novapass = document.forms["field"]["novapass"].value;
    var novapassconf = document.forms["field"]["novapassconf"].value;

   if(novapass == "" && novapassconf == ""){
    ChangeProfile();  
   }
   
   else if(novapass == novapassconf){
    
    ChangeProfile();
     
    let data = {};
    data.nova_password = document.getElementById('password').value;
    data.repetir_password = document.getElementById("passwordConf").value;
    
    try{
        fetch("http://188.166.174.213:8080/usersProfilePassword", {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify(data)

        }).then(res => {
            return res.json();
        }).then(data => {
            success = data.success;
            if(success == true){
               }
               else{
               }
        })
    } catch(err){
           console.log({msg: err});
      
    }
    ChangeProfile();
  
}
else{
    alert("As passwords não coincidem, tente novamente")
    document.getElementById("password").value = '';
    document.getElementById("passwordConf").value = '';
}

  
})
}
