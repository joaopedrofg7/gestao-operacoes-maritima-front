
let a;
   

    //REFRESH DA TABELA    
    function read() {
        fetch('http://188.166.174.213:8080/operationals', {
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
                    let tabela = document.getElementById('tabelaOperacionais');
                    let row = tabela.insertRow();
                    var count = Object.keys(data[i]).length;
                    for(let a = 0; a < count; a++){
                        let c = row.insertCell(a);
                        if(a == 0){
                            c.innerHTML = data[i].id_operacional;
                        }
                        if(a == 1){
                            c.innerHTML = data[i].username;
                        }
                        if(a == 2){
                            c.innerHTML = data[i].disponibilidade;
                        }
                        if(a == 3){
                            c.innerHTML = data[i].horario;
                        }
                        if(a == 4){
                            c.innerHTML = data[i].pontos_gamificacao;
                        }
                        if(a == 5){
                            c.innerHTML = data[i].id_equipa;
                        }
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
                            row3 = row.find('td:eq(3)').text();
                            row4 = row.find('td:eq(5)').text();
                             //alert("O id é: " + row1 );

                             id_operacional = row1;
                             username = row2;

                             document.getElementById("idOpe").value = row1;
                             document.getElementById("userOpe").value = row2;
                             document.getElementById("horario").value = row3;
                             document.getElementById("equipa").value = row4;
                        })
                        
                    }}
                    }
                    
                }
            })
    }

var id_operacional
var username;


    function editOperacional() {

        horario = document.getElementById('horario').value;
        id_equipa = document.getElementById('equipa').value;
        id_operacional = document.getElementById('idOpe').value;
            
       try{

            let data = {}

            fetch('http://188.166.174.213:8080/'+ id_operacional +'/teams/'+ id_equipa, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(data),
            credentials: "include"
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);

                try{
                    let data = {};
                        
                    data.horario = document.getElementById('horario').value;
        
                    fetch('http://188.166.174.213:8080/operationals/'+ id_operacional +'/schedule', {
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

            })
        } catch(err){
            console.log({msg: err});
        }
    }

    
