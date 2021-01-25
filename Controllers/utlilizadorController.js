let a;


   

    //REFRESH DA TABELA    
    function read() {
        fetch('http://188.166.174.213:8080/users', {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            method: 'GET',
            credentials: "include"
        })
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                a = data;
                for(let i = 0; i < data.length; i++){
                    let tabela = document.getElementById('tabelaUtilizadores');
                    let row = tabela.insertRow();
                    var count = Object.keys(data[i]).length;
                    for(let a = 0; a < count; a++){
                        let c = row.insertCell(a);
                        if(a == 0){
                            c.innerHTML = data[i].username;
                        }
                        if(a == 1){
                            c.innerHTML = data[i].nome;
                        }
                        if(a == 2){
                            c.innerHTML = data[i].email_utilizador;
                        }
                        if(a == 3){
                            if( data[i].id_cargo == "1"){
                                c.innerHTML = 'Operacional'
                            }
                            if( data[i].id_cargo == "2"){
                                c.innerHTML = 'Gestor de operações'
                            }
                            if( data[i].id_cargo == "3"){
                                c.innerHTML = 'Colaborador'
                            }
                            if( data[i].id_cargo == "4"){
                                c.innerHTML = 'Admin'
                            }
                           
                        }
                    }
                    
                }
            })
    }

    var username;

    function editUtilizador() {
        let data = {};
        data.username = document.getElementById('usernameedit').value;
        data.nome = document.getElementById('nomeedit').value;
        data.email_utilizador = document.getElementById('emailedit').value;
        try{
            fetch("http://188.166.174.213:8080/usersProfile"+username, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(data),
                credentials: "include"
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
            })
        } catch(err){
            console.log({msg: err});
        }
    }


    function registerGestor() {
        let data = {};
        data.username = document.getElementById('usernameInput').value;
        data.nome = document.getElementById('nomeInput').value;
        data.email_utilizador = document.getElementById('emailInput').value;
        data.password = document.getElementById('passswordInput').value;
        data.password_confirmar = document.getElementById('confpasswordInput').value;
        
    
        try{
            fetch("http://188.166.174.213:8080/signup", {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(data),
                credentials: "include"
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
            })
        } catch(err){
            console.log({msg: err});
        }
    }
    
