

function readOcorenciasProgress() {
    fetch('http://188.166.174.213:8080/occurrencesInProgress', {
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
                let tabela = document.getElementById('table1');
                let row = tabela.insertRow();
                var count = Object.keys(data[i]).length;
                for(let a = 0; a < count; a++){
                    let c = row.insertCell(a);
                    if(a == 0){
                        c.innerHTML = data[i].id_ocorrencia;
                    }
                    if(a == 1){
                        let id_local = data[i].id_local;
                        
                        function getLocal(id_local) {
                            fetch('http://188.166.174.213:8080/local/'+id_local, {
                                headers: { 'Content-Type': 'application/json' },
                                mode: 'cors',
                                method: 'GET',
                                credentials: "include"
                            })
                                .then(res => {
                                    return res.json();
                                }).then(data => {
                                    console.log(data);
                                    var local = data[0].morada;
                                  
                                    c.innerHTML = '<a> Local </a> <br>' + local;
                                    })}
                        
                        getLocal(id_local);   
                    }
                    if(a == 2){
                        c.innerHTML = data[i].id_equipa;
                    }
                    if(a == 3){
                        c.innerHTML = data[i].descricao_pedido;
                    }
                    if(a == 4){
                        var m = new Date(data[i].data_ocorrencia);
                        var dataString = m.getUTCFullYear() + "/" +
                        ("0" + (m.getUTCMonth()+1)).slice(-2) + "/"+
                        ("0" + (m.getUTCDate())).slice(-2) + "  "+
                        ("0" + (m.getUTCHours())).slice(-2) + " :"+
                        ("0" + (m.getUTCMinutes())).slice(-2) + ":"+
                        ("0" + (m.getUTCSeconds())).slice(-2);
                        

                        c.innerHTML = dataString
                    }
                    if(a == 5){
                        c.innerHTML = data[i].id_nivel;
                    }
              

            }
        }

            
    })

       
}
function nome_e_email() {
try{
    fetch("http://188.166.174.213:8080/usersProfile", {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
        credentials: "include",
    }).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        let UserName = document.getElementById("NomeUser1");
        UserName.innerHTML = data[0].username;
        let UserName2 = document.getElementById("NomeUser2");
        UserName2.innerHTML = data[0].username;
        let EmailUser= document.getElementById("EmailUser");
        EmailUser.innerHTML = data[0].email_utilizador;
        localStorage.setItem('id_cargo', data[0].id_cargo);
        
    })
} catch(err){
    console.log({msg: err});



}
}
function readOcorenciasHold() {
    fetch('http://188.166.174.213:8080/occurrencesOnHold', {
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
                let tabela = document.getElementById('table2');
                let row = tabela.insertRow();
                var count = Object.keys(data[i]).length;
                for(let a = 0; a < count; a++){
                    let c = row.insertCell(a);
                    if(a == 0){
                        c.innerHTML = data[i].id_ocorrencia;
                    }
                    if(a == 1){
                        let id_local = data[i].id_local;
                        
                        function getLocal(id_local) {
                            fetch('http://188.166.174.213:8080/local/'+id_local, {
                                headers: { 'Content-Type': 'application/json' },
                                mode: 'cors',
                                method: 'GET',
                                credentials: "include"
                            })
                                .then(res => {
                                    return res.json();
                                }).then(data => {
                                    console.log(data);
                                    var local = data[0].morada;
                                  
                                    c.innerHTML = '<a> Local </a> <br>' + local;
                                    })}
                        
                        getLocal(id_local);   
                    }
                    if(a == 2){
                        c.innerHTML = data[i].descricao_pedido;
                    }
                    if(a == 3){
                        var m = new Date(data[i].data_ocorrencia);
                        var dataString = m.getUTCFullYear() + "/" +
                        ("0" + (m.getUTCMonth()+1)).slice(-2) + "/"+
                        ("0" + (m.getUTCDate())).slice(-2) + "  "+
                        ("0" + (m.getUTCHours())).slice(-2) + " :"+
                        ("0" + (m.getUTCMinutes())).slice(-2) + ":"+
                        ("0" + (m.getUTCSeconds())).slice(-2);
                        

                        c.innerHTML = dataString
                    }
                    if(a == 4){
                        c.innerHTML = data[i].id_nivel;
                    }
                    if(a == 5){
                        cargo = localStorage.getItem("id_cargo");
                    if(cargo == 2){
                        var button = document.createElement("button");
                         button.innerHTML = 
                       // '<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>' 
                       '<a href="ocorrencias.html" target_self><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>'
                        // 2. Append somewhere
                         //var body = document.getElementsByID("teste")[0];
                         c.appendChild(button);
    
                         // 3. Add event handler
                         button.addEventListener ("click", function() {
                            var row = $(this).closest('tr');
                            row1 = row.find('td:eq(0)').text();
                            row2 = row.find('td:eq(1)').text();
                            
    
                            row3 = row.find('p:eq(0)').text();
                            
                       //     var number = parseInt(row3, 1);
                            localStorage.setItem('id_ocorencia', row3);
                        // alert(row3);
    
                            
                           
    
                             
                     })
    
                     
                     
                    }
                    } 
              

            }
        }

            
    })

       
}

function readOcorenciasFinish() {
    fetch('http://188.166.174.213:8080/occurrencesFinished', {
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
                let tabela = document.getElementById('table3');
                let row = tabela.insertRow();
                var count = Object.keys(data[i]).length;
                for(let a = 0; a < count; a++){
                    let c = row.insertCell(a);
                    if(a == 0){
                        c.innerHTML = data[i].id_ocorrencia;
                    }
                    if(a == 1){
                        let id_local = data[i].id_local;
                        
                        function getLocal(id_local) {
                            fetch('http://188.166.174.213:8080/local/'+id_local, {
                                headers: { 'Content-Type': 'application/json' },
                                mode: 'cors',
                                method: 'GET',
                                credentials: "include"
                            })
                                .then(res => {
                                    return res.json();
                                }).then(data => {
                                    console.log(data);
                                    var local = data[0].morada;
                                  
                                    c.innerHTML = '<a> Local </a> <br>' + local;
                                    })}
                        
                        getLocal(id_local);   
                    }
                    if(a == 2){
                        c.innerHTML = data[i].descricao_pedido;
                    }
                    if(a == 3){
                        var m = new Date(data[i].data_ocorrencia);
                        var dataString = m.getUTCFullYear() + "/" +
                        ("0" + (m.getUTCMonth()+1)).slice(-2) + "/"+
                        ("0" + (m.getUTCDate())).slice(-2) + "  "+
                        ("0" + (m.getUTCHours())).slice(-2) + " :"+
                        ("0" + (m.getUTCMinutes())).slice(-2) + ":"+
                        ("0" + (m.getUTCSeconds())).slice(-2);
                        

                        c.innerHTML = dataString
                    }
                    if(a == 4){
                        c.innerHTML = data[i].id_nivel;
                    }
                    if(a == 5){
                        var m = new Date(data[i].data_fim_ocorrencia);
                        var dataString = m.getUTCFullYear() + "/" +
                        ("0" + (m.getUTCMonth()+1)).slice(-2) + "/"+
                        ("0" + (m.getUTCDate())).slice(-2) + "  "+
                        ("0" + (m.getUTCHours())).slice(-2) + " :"+
                        ("0" + (m.getUTCMinutes())).slice(-2) + ":"+
                        ("0" + (m.getUTCSeconds())).slice(-2);
                        

                        c.innerHTML = dataString
                    }
                   
              

            }
        }

            
    })

       
}

