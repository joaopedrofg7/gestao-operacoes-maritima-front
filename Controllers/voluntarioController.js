let domain = "http://188.166.174.213:8080/";
let a;

   

    //REFRESH DA TABELA    
    function read() {
        fetch('http://188.166.174.213:8080/volunteers', {
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
                    let tabela = document.getElementById('tabelaVoluntarios');
                    let row = tabela.insertRow();
                    var count = Object.keys(data[i]).length;
                    for(let a = 0; a < count; a++){
                        let c = row.insertCell(a);
                        if(a == 0){
                            c.innerHTML = data[i].id_voluntario;
                        }
                        if(a == 1){
                            c.innerHTML = data[i].nome_voluntario;
                        }
                        if(a == 2){
                            c.innerHTML = data[i].idade;
                        }
                        if(a == 3){
                         c.innerHTML = data[i].email_voluntario;
                           
                        }
                        if(a == 4){
                            c.innerHTML = data[i].motivo_participacao;
                        }
                        if(a == 5){
                            c.innerHTML = data[i].problemas_saude;
                        }
                        if(a == 6){
                            c.innerHTML = data[i].situacao;
                        }
                        if(a == 7){
                            c.innerHTML = data[i].experiencia;
                        }
                      
                        
                        if(a == 8){
                            cargo = localStorage.getItem("id_cargo");
                            if(cargo == 2){
                            
                          if( data[i].situacao == "Aprovado"){
                         var button = document.createElement("button");
                         button.innerHTML = 
                        ' <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> ' + 
                        ' <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a> '
 
                         c.appendChild(button);
                         button.addEventListener ("click", function() {
                            var row = $(this).closest('tr');
                            row1 = row.find('td:eq(0)').text();
                            
                            id_voluntario = row1;
                        })
                        } else{

                            var button = document.createElement("button");
                            button.innerHTML = 
                           ' <a onclick="getID()" href="#editEmployeeModal2" id="edit" class="edit" style="color: rgb(22, 224, 22);" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE177;</i></a> ' + 
                           ' <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a> '
    
                            c.appendChild(button);
                            button.addEventListener ("click", function() {
                                var row = $(this).closest('tr');
                                row1 = row.find('td:eq(0)').text();
                                id_voluntario = row1;

                        if(a == 6){
                            cargo = localStorage.getItem("id_cargo");
                            if(cargo == 2){
                                var button = document.createElement("button");
                         var button = document.createElement("button");
                         button.innerHTML = 
                        ' <a href="#editEmployeeModal" id="popup" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a> ' 
                        
                         // 2. Append somewhere
                         //var body = document.getElementsByID("teste")[0];
                         c.appendChild(button);
 
                         // 3. Add event handler
                         //button.addEventListener ("click", function() {});
                         button.addEventListener ("click", function() {
                            var row = $(this).closest('tr');
                            row1 = row.find('td:eq(0)').text();
                            row2 = row.find('td:eq(1)').text();
                            row3 = row.find('td:eq(2)').text();
                            row4 = row.find('td:eq(3)').text();
                            row5 = row.find('td:eq(4)').text();
                            row6 = row.find('td:eq(5)').text();
                            row8 = row.find('td:eq(7)').text();
                             //alert("O id é: " + row1 );

                             id_operacional = row1;
                             username = row2;

                             document.getElementById("nomeInput").value = row2;
                             document.getElementById("emailInput").value = row4;
                             document.getElementById("experienciaInput").value = row8;
                             document.getElementById("problemasInput").value = row6;
                        })
                        
                    }}



                         })
                            
                        }
                    }}
                    }
                    
                }
            })
    }

    var id_voluntario;

    function updateSituacao(){
        let data = {};

        if(document.getElementById("aprovadoRadio").checked){
            fetch(domain+"volunteers/"+id_voluntario+"/accept",{
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(data),
                credentials: "include"
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
            });
        } else if((document.getElementById("repRadio").checked)){
            fetch(domain+"volunteers/"+id_voluntario+"/reject", {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(data),
                credentials: "include"
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
            })

        }

    }
    

    function editVoluntario() {
        let data = {};
        data.nome_voluntario = document.getElementById('nomeInput').value;
        //data.idade = document.getElementById('idadeInput').value;
        data.email = document.getElementById('emailInput').value;
        //data.motivo_participacao = document.getElementById('motivoInput').value;
        data.problemas_saude = document.getElementById('problemasInput').value;
        data.experiencia = document.getElementById('experienciaInput').value;
        data.id_voluntario = id_voluntario;
        try{
            fetch(domain+"volunteers/"+id_voluntario, {
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
