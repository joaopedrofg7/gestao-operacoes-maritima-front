/*window.onload = function () {
    //chama a função para atualizar a lista de pedidos
    getNotifications();
}*/


function getNotifications() {
    fetch('http://188.166.174.213:8080/', {
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
                let tabela = document.getElementById('tabelaNotifications');
                let row = tabela.insertRow();
             //   var count = Object.keys(data[i]).length;
                for(let a = 0; a < 4; a++){
                    let c = row.insertCell(a);
                    let nivel = data[i].id_nivel;
                    
                    if(a == 0){
                        c.innerHTML = '<a> Nivel </a> <br>' + data[i].id_nivel;
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
                    c.innerHTML = '<a> ID </a> <br>' + '<p>' + data[i].id_ocorrencia + '</p>';
                }
                if(a == 3){
                    cargo = localStorage.getItem("id_cargo");
                    if(cargo == 2){
                    var button = document.createElement("button");
                     button.innerHTML = 
                   // '<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>' 
                   '<a href="ocorrencias.html" target_self><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254</i></a>'
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
            let tabela = document.getElementById('tabelaNotifications');
            let numeronot = document.getElementById('numeroNot');
            let numero = tabela.rows.length;
            let numero_ocorrencia = document.getElementById('numero_pedidos');
          
                numeronot.innerHTML = numero;
                numero_ocorrencia.innerHTML = "You have" + " " + numero + " " + "Notifications";
                    
            
                
                     
                })
                
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
