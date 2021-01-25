function checarVoluntario(valor){
    console.log(valor);
    let quant_voluntarios = document.getElementById("tabelaVoluntarios").rows.length;
    const nivel=document.getElementById("Nivel").value;
    if(nivel == 1 && valor != 2 ){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
    } else if(nivel == 2 && (valor != 3 && valor !=4)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
    } else if(nivel == 3 && (valor != 5 && valor !=6 ) ){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
    }else if(nivel == 4 && (valor != 7 && valor !=8 )){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
    } else if(nivel == 5 && (valor != 9 && valor !=10 )){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
    } else if((nivel == 2 && (valor == 3)) || (nivel == 3 && (valor == 5)) || (nivel== 4 && (valor == 7 )) || (nivel== 5 && (valor == 9)) ) {
        document.getElementById("submit").style.backgroundColor = "red";
        document.getElementById("submit").disabled = false;
    } else if((nivel == 1 && valor ==2) || (nivel == 2 && (valor == 4)) || (nivel == 3 && (valor == 6)) || (nivel== 4 && (valor == 8)) || (nivel== 5 && (valor == 10)) ) {
        document.getElementById("submit").style.backgroundColor = "red";
        document.getElementById("submit").disabled = false;
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=true;
        }
    }; 

};


function checarEquipa(valor){
    console.log(valor);
    let quant_equipa = document.getElementById("tabelaEquipas").rows.length;
    const nivel=document.getElementById("Nivel").value; 
    if(nivel == 1 && valor != 2  ){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_equipa; i++){
            document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=true;
        }
    } else if(nivel == 2 && (valor != 3 && valor !=4)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_equipa; i++){
            document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=true;
        }
    } else if(nivel == 3 && (valor != 5 || valor !=6 ) ){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_equipa; i++){
            document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=true;
        }
    }else if(nivel == 4 && (valor != 7 || valor !=8 )){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_equipa; i++){
            document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=true;
        }
    } else if(nivel == 5 && (valor != 9 || valor !=10 )){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_equipa; i++){
            document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=true;
        }
    } else if((nivel == 1 && valor ==2) || (nivel == 2 && (valor == 3 || valor == 4)) || (nivel == 3 && (valor == 5 || valor == 6)) || (nivel== 4 && (valor == 7 || valor == 8)) || (nivel== 5 && (valor == 9 || valor == 10)) ) {
        document.getElementById("submit").style.backgroundColor = "red";
        document.getElementById("submit").disabled = false;
        for(i=1; i<quant_equipa; i++){
            document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=true;
        }
    }; 

};

function removerVoluntario(valor){
    console.log(valor);
    const nivel=document.getElementById("Nivel").value;
    let quant_voluntarios = document.getElementById("tabelaVoluntarios").rows.length;
    if(nivel == 1 && (valor != 2)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
    } else if(nivel == 2 &&(valor != 3 && valor != 4)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
    } else if(nivel == 3 && (valor !=5 && valor != 6)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
    }else if(nivel == 4 && (valor != 7 && valor != 8)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
    } else if(nivel == 5 && (valor != 9 && valor != 10)){
        document.getElementById("submit").style.backgroundColor = "grey";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
    }else if((nivel == 2 && valor == 3) || (nivel == 3 && valor == 5) || (nivel == 3 && valor == 7) || (nivel == 5 && valor == 9)) {
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
        document.getElementById("submit").style.backgroundColor = "red";
        document.getElementById("submit").setAttribute("disabled","disabled");
        
    } else if((nivel == 1 && valor == 2) || (nivel == 2 && valor == 4) || (nivel == 3 && valor == 6) || (nivel == 3 && valor == 8) || (nivel == 5 && valor == 10)) {
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=false;
        }
        document.getElementById("submit").style.backgroundColor = "red";
        document.getElementById("submit").setAttribute("disabled","disabled");
        for(i=1; i<quant_voluntarios; i++){
            document.getElementById("tabelaVoluntarios").rows[i].cells[8].firstChild.disabled=true;
        }
    } 
};

function removerEquipa(){
    document.getElementById("submit").style.backgroundColor = "grey";
    document.getElementById("submit").setAttribute("disabled","disabled");
    let quant_equipa = document.getElementById("tabelaEquipas").rows.length;
    for(i=1; i<quant_equipa; i++){
        document.getElementById("tabelaEquipas").rows[i].cells[3].firstChild.disabled=false;
    }
};



function readID(id) {

    
    fetch('http://188.166.174.213:8080/occurrences/'+id , {
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        method: 'GET',
        credentials: "include"
    })
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            document.getElementById("Nivel").setAttribute("value", data[0].id_nivel);
           
            let nivel = data[0].id_nivel;
            let soma = document.getElementById("atual").value;
            if(nivel == 1){
                document.getElementById("needed").value = "2 Pessoas 0-1 Voluntarios";
    
            }
            if(nivel == 2){
                document.getElementById("needed").value = "3-4 Pessoas 0-2 Voluntarios";

            }
            if(nivel == 3){
                document.getElementById("needed").value = "5-6 Pessoas 0-5 Voluntarios";
    
            };
            if(nivel == 4){
                document.getElementById("needed").value = "7-8 Pessoas 0-4 Voluntarios";
        
            }
            if(nivel == 5){
                document.getElementById("needed").value = "9-10 Pessoas 0-5 Voluntarios";
            
            }
            document.getElementById("descricao_pedido").value = data[0].descricao_pedido;
            document.getElementById("atual").value = 0;
            document.getElementById("submit").setAttribute("disabled", "disabled");
          //  document.getElementById("Nivel").value = data.id_nivel;
          //checar();

        })
}

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
                        
                        var button = document.createElement("button");
                            button.innerHTML = 
                           ' <a class="check" style="color: rgb(22, 224, 22);" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="confirmar">&#xE177;</i></a> '
                    
                           c.appendChild(button);

                           button.addEventListener ("click", function() {
                            var linha = $(this).closest('tr');
                            linha1 = linha.find('td:eq(0)').text();
                            id_material = linha1;

                            linha2 = linha.find('td:eq(1)').text();
                            nome = linha2;

                            linha4 = linha.find('td:eq(4)').text();
                            max = linha4;

                            linha5 = linha.find('td:eq(5)').text();
                            but = linha5;

                            let tabela = document.getElementById('MaterialSelecionado');
                                let row = tabela.insertRow();
                            
                            onclick=this.setAttribute("id",data[i].id_material+"M"),
                            this.setAttribute("hidden", "hidden");
                              
                                
                                for(let a = 0; a < 4; a++){
                                    let c = row.insertCell(a);
                                    if(a == 0){
                                   
                                        c.innerHTML = id_material;
                                    }
                                    if(a == 1){
                                   
                                        c.innerHTML = nome;
                                    }
                                    if(a == 2){
                                       
                                       c.innerHTML = '<input type="number"id="quantidade" min=1 max=' +max+' class="form-control" onkeydown="return false" value="1" required></input>'
                                        }
                                    if(a == 3){
                                       
                                        var button = document.createElement("button");
                                            button.innerHTML = 
                                           '<a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Remove">&#xE872;</i></a>';
                                           button.style.float= "right";
                                           c.appendChild(button);
                                           button.addEventListener ("click", function() {
                                            var linha = $(this).closest('tr');
                                                 linhaM = linha.find('td:eq(0)').text();
                                                 id_materialM = linhaM;
                                                 enableButton(id_materialM+'M');
                                             
                                          $(this).closest('tr').remove();
                                           })
                                        }     
                                   
                                }   
                            

                           })
                        }     
                   
                }
            }
        })

       
}
function readVoluntario() {
    fetch('http://188.166.174.213:8080/volunteersAvailable', {
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
                        c.innerHTML = data[i].problemas_saude;
                    }
                    if(a == 4){
                        c.innerHTML = data[i].experiencia;
                    }
                    if(a == 8){
                       
                        var button1 = document.createElement("button");
                            button1.innerHTML = 
                           ' <a  id="check" class="check" style="color: rgb(22, 224, 22);" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="confirmar">&#xE177;</i></a> '
                    
                           c.appendChild(button1);

                           button1.addEventListener ("click", function() {
                            var linha = $(this).closest('tr');
                            linha1 = linha.find('td:eq(0)').text();
                            id_voluntario = linha1;
                            linha2 = linha.find('td:eq(1)').text();
                            nome_voluntario = linha2;
                            

                            
                            
                            
                            onclick= tamanhoTable(this);
                            function tamanhoTable(id){
                                setTimeout(function(){ checarVoluntario(document.getElementById("atual").value) }, 100);
                                var tamanho = document.getElementById("VoluntarioSelecionado").rows.length;
                                var nivel = document.getElementById("Nivel").value;
                                if(tamanho <= nivel){
                                  id.setAttribute("id",data[i].id_voluntario+"V"),
                                  id.setAttribute("hidden", "hidden");
                                  document.getElementById("atual").value = +document.getElementById("atual").value + +1;
                                
                           
                           

                            let tabela = document.getElementById('VoluntarioSelecionado');
                            let row = tabela.insertRow();
                            
                                for(let a = 0; a < 4; a++){
                                    let c = row.insertCell(a);
                                    if(a == 0){
                                   
                                        c.innerHTML = id_voluntario;
                                    }
                                    if(a == 1){
                                   
                                        c.innerHTML = nome_voluntario;
                                    }
                                    if(a == 3){
                                       
                                        var button1 = document.createElement("button");
                                            button1.innerHTML = 
                                           '<a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Remove">&#xE872;</i></a>';
                                           button1.style.float= "right";
                                           c.appendChild(button1);
                                           button1.addEventListener ("click", function() {
                                            setTimeout(function(){ removerVoluntario(document.getElementById("atual").value) }, 100);
                                            var linha = $(this).closest('tr');
                                                 linhaV = linha.find('td:eq(0)').text();
                                                 id_materialV = linhaV;
                                                 enableButton(id_materialV+'V');
                                                 document.getElementById("atual").value = +document.getElementById("atual").value + -1;
                                                 
                                          $(this).closest('tr').remove();
                                          
                                           }, )
                                        }     
                                   
                                }   
                            }
                            }
                           })
                        } 
                  
                    
                    
                }
                
            }
        })
}

function readEquipas() {
    fetch('http://188.166.174.213:8080/teamsAvailable', {
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
                let tabela = document.getElementById('tabelaEquipas');
                let row = tabela.insertRow();
                var count = Object.keys(data[i]).length;
                
                for(let a = 0; a < count; a++){
                    let c = row.insertCell(a);
                    if(a == 0){
                        c.innerHTML = data[i].id_equipa;
                    }
                    if(a == 1){
                        c.innerHTML = data[i].creditos_equipa;
                    }
                    if(a == 2){
                        function getMembros(id_equipa) {
                            fetch('http://188.166.174.213:8080/operationalsEquipa/'+id_equipa, {
                                headers: { 'Content-Type': 'application/json' },
                                mode: 'cors',
                                method: 'GET',
                                credentials: "include"
                            })
                                .then(res => {
                                    return res.json();
                                }).then(data => {
                                    c.innerHTML = data[0].total;
                                  
                                })}

                                id_equipa = getMembros(data[i].id_equipa);
                      
                    }
                    if(a == 3){
                        var button = document.createElement("button");
                            button.innerHTML = 
                           ' <a id="check" class="check" style="color: rgb(22, 224, 22);" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="confirmar">&#xE177;</i></a> '
                           button.style.float= "right";
                           c.appendChild(button);

                           button.addEventListener ("click", function() {
                            var row = $(this).closest('tr');
                            row1 = row.find('td:eq(0)').text();
                            setTimeout(function(){ checarEquipa(document.getElementById("atual").value) }, 100);
                            //console.log(row1);
                            row3 = row.find('td:eq(2)').text();
                            //console.log(row3);
                            

                            
                            
                            
                            onclick= tamanhoTableEq(this, row3);
                            function tamanhoTableEq(id, membros){
                                var tamanho = document.getElementById("EquipaSelecionada").rows.length;
                                //console.log(tamanho);
                                
                                if(tamanho == 1){
                                  id.setAttribute("id",data[i].id_equipa+"E"),
                                  id.setAttribute("hidden", "hidden");
                                  document.getElementById("atual").value = +document.getElementById("atual").value + +membros;
                                
                                
                           
                           

                            let tabela = document.getElementById('EquipaSelecionada');
                            let row = tabela.insertRow();
                            
                                for(let a = 0; a < 4; a++){
                                    let c = row.insertCell(a);
                                    if(a == 0){
                                   
                                        c.innerHTML = data[i].id_equipa;
                                    }
                                    if(a == 1){
                                   
                                        c.innerHTML = row3;
                                    }
                                    if(a == 3){
                                       
                                        var button2 = document.createElement("button");
                                            button2.innerHTML = 
                                           '<a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Remove">&#xE872;</i></a>';
                                           button2.style.float= "right";
                                           c.appendChild(button2);
                                           button2.addEventListener ("click", function() {
                                           removerEquipa();
                                            var linha = $(this).closest('tr');
                                                 linhaE = linha.find('td:eq(0)').text();
                                                 id_equipaE = linhaE;
                                                 enableButton(id_equipaE+'E');
                                                 document.getElementById("atual").value = +document.getElementById("atual").value + -membros;
                                             
                                          $(this).closest('tr').remove();
                                           })
                                        }     
                                   
                                }   
                            }
                            }
                           })

                        
                        }
                   
                    
                }
                
            }
        })
}
function enableButton(id) {
    document.getElementById(id).hidden = false;
}


function registerVoluntarioOcurrencia() {
    
    let num_voluntarios = document.getElementById("VoluntarioSelecionado").rows.length;
    for(let i = 1; i < num_voluntarios; i++){
    let data = {};
    id_voluntario =  document.getElementById("VoluntarioSelecionado").rows[i].cells[0].innerHTML;
    
    data.id_voluntario = id_voluntario;
    console.log(id_voluntario);

    try{
        fetch('http://188.166.174.213:8080/occurrences/'+id+'/volunteers/'+id_voluntario, {
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
}

function updateOcorrenciaTeam() {
    let data = {};
    tabela = document.getElementById("EquipaSelecionada")
    let id_equipa =  tabela.rows[1].cells[0].innerHTML;
    
    console.log(id_equipa);
  

  try{
        fetch("http://188.166.174.213:8080/occurrences/"+ id +"/teams/" + id_equipa, {
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


function AceptOcorrencia() {
    let data = {};
      

    try{
        fetch("http://188.166.174.213:8080/occurrences/" + id + "/accept", {
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




function registerMaterialOcurrencia() {
    
    let num_materiais = document.getElementById("MaterialSelecionado").rows.length;
    for(let i = 1; i < num_materiais; i++){
    let data = {};
    
    id_material =  document.getElementById("MaterialSelecionado").rows[i].cells[0].innerHTML;
    quantidade_usada= document.getElementById("MaterialSelecionado").rows[i].cells[2].firstChild.value;
    console.log(id_material);
    console.log(quantidade_usada);
    data.quantidade_usada = quantidade_usada;

  try{
        fetch('http://188.166.174.213:8080/occurrences/'+id+'/materials/'+id_material, {
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
}


function submitOcurrencia(){
   registerMaterialOcurrencia()
   AceptOcorrencia()
   updateOcorrenciaTeam()
   registerVoluntarioOcurrencia()
   location.href = "./calendar.html";
}