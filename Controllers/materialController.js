/*window.onload = function () {
    //chama a função para atualizar a lista de pedidos
    readMaterial();
}*/

function readMaterial() {
    fetch('http://188.166.174.213:8080/materials', {
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
                let tabela = document.getElementById('tabelaMateriais');
                let row = tabela.insertRow();
                var count = Object.keys(data[i]).length;
                for(let a = 0; a < count; a++){
                    let c = row.insertCell(a);
                    if(a == 0){
                        c.innerHTML = data[i].id_material;
                    }
                    if(a == 1){
                        c.innerHTML = data[i].nome_material;
                    }
                    if(a == 2){
                        c.innerHTML = data[i].descricao_material;
                    }
                    if(a == 3){
                        c.innerHTML = data[i].quantidade_total;
                    }
                    if(a == 4){
                        c.innerHTML = data[i].quantidade_disponivel;
                    }
                    if(a == 5){
                        cargo = localStorage.getItem("id_cargo");
                        if(cargo == 2){
                        var button = document.createElement("button");
                         button.innerHTML = 
                        '<a href="#editEmployeeModal" id="add" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>' + 
                        '<a href="#deleteEmployeeModal" id="remove" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>';
                        
                        // 2. Append somewhere
                         //var body = document.getElementsByID("teste")[0];
                         c.appendChild(button);
 
                         // 3. Add event handler
                         button.addEventListener ("click", function() {
                            var row = $(this).closest('tr');
                            row1 = row.find('td:eq(0)').text();
                            row2 = row.find('td:eq(1)').text();
                            row3 = row.find('td:eq(2)').text();
                            row5 = row.find('td:eq(4)').text();

                             id_material = row1;
                             nome_material = row2;
                             descricao = row3;

                             document.getElementById("idVal").value = row1;
                             document.getElementById("nomeVal").value = row2;
                             document.getElementById("descricaoVal").value = row3;
                             document.getElementById("quantidadeVal").setAttribute("min","1")
                             

                             document.getElementById("idValDam").value = row1;
                             document.getElementById("nomeValDam").value = row2;
                             document.getElementById("descricaoValDam").value = row3;
                             document.getElementById("quantidadeValDam").setAttribute("min","1")
                             document.getElementById("quantidadeValDam").setAttribute("max",row5)

                             
                     })

                     
                     
                    }
                    }         
                   
                }
            }
        })

       
}
var id_material;
var nome_material;
var descricao;

let domain = "http://188.166.174.213:8080/";
function registerMaterial() {
    let data = {};
    data.nome_material = document.getElementById('nomeInput').value;
    data.descricao_material = document.getElementById('descricaoInput').value;
    data.quantidade = document.getElementById('quantidadeInput').value;
    

    try{
        fetch(domain+"materials", {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(data),
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        })
    } catch(err){
        console.log({msg: err});
    }
}

function updateQuantity() {
    let data = {};
    data.id_material = id_material;
    data.quantidade_nova = document.getElementById('quantidadeVal').value;
  

    try{
        fetch(domain+"materials/"+id_material+"/increase", {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            credentials: "include",
            body: JSON.stringify(data),
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        })
    } catch(err){
        console.log({msg: err});
    }
}

function updateQuantityDamaged() {
    let data = {};
    data.id_material = id_material;
    data.quantidade_estragada = document.getElementById('quantidadeValDam').value;
  

    try{
        fetch(domain+"materials/"+id_material+"/decrease", {
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



