
    //REFRESH DA TABELA  

    function readTop3Local() {
        fetch('http://188.166.174.213:8080/dashboard/Top3Local', {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            method: 'GET',
            credentials: "include"
        })
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                for(let i = 0; i < data.length; i++){
                    //console.log(data.length);
                    //console.log(data[i].quantidade_nivel);
                    local_1 = data[0].morada;
                    quant_1 = data[0].quantidade_local;
                    local_2 = data[1].morada;
                    quant_2 = data[1].quantidade_local;
                    local_3 = data[2].morada;
                    quant_3 = data[2].quantidade_local;
                    }

                    console.log(quant_1);

                    google.charts.load('current', {'packages':['corechart']});
                    google.charts.setOnLoadCallback(drawChart);

                    // Draw the chart and set the chart values

                    function drawChart() {
                        var data = google.visualization.arrayToDataTable([ 
                            ['Localidade', 'Quantidade'],
                            [local_1, quant_1],
                            [local_2, quant_2],
                            [local_3, quant_3]
                        ]);

                    // Optional; add a title and set the width and height of the chart
                    var options = {'title':'Top 3 Locais com mais ocorrencias', 'width':650, 'height':400 };

                    // Display the chart inside the <div> element with id="piechart"
                    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
                    chart.draw(data, options);
                    }
                })
    }
    
  
    function readNumPorNivel() {
        fetch('http://188.166.174.213:8080/dashboard/NumPorNivel', {
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
                
                var nivel_1;
                var nivel_2;
                var nivel_3;
                var nivel_4;
                var nivel_5;

                for(let i = 0; i < data.length; i++){
                    //console.log(data.length);
                    console.log(data[i].quantidade_nivel);
                    nivel_1 = data[0].quantidade_nivel;
                    nivel_2 = data[1].quantidade_nivel;
                    nivel_3 = data[2].quantidade_nivel;
                    nivel_4 = data[3].quantidade_nivel;
                    nivel_5 = data[4].quantidade_nivel;
                    }

                    console.log(nivel_1);

                    google.charts.load('current', {'packages':['corechart']});
                    google.charts.setOnLoadCallback(drawChart);

        
                    // Draw the chart and set the chart values
                    function drawChart() {
                        var data = google.visualization.arrayToDataTable([
                            ['Nivel', 'Numero de Ocorrencias'],
                            ['Nivel 1', nivel_1],
                            ['Nivel 2', nivel_2],
                            ['Nivel 3', nivel_3],
                            ['Nivel 4', nivel_4],
                            ['Nivel 5', nivel_5]
                        ]);

                    // Optional; add a title and set the width and height of the chart
                    var options = {'title':'Número de ocorrencias por nivel', 'width':450, 'height':400};

                    // Display the chart inside the <div> element with id="piechart"
                    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                    chart.draw(data, options);
                }
            })
    }

    function getOperacionaisAtivos() {
        fetch('http://188.166.174.213:8080/dashboard/OperacionaisAtivos', {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            method: 'GET',
            credentials: "include"
        })
            .then(res => {
                return res.json();
            }).then(data => {

                    console.log(data.length);
                    //console.log(data[i].quantidade_nivel);
                    if (data[0].disponibilidade == 'indisponível'){
                        operacionais_ativos = data[0].quantidade_operacional;
                        operacionais_total = data[0].quantidade_operacional;

                        document.getElementById('operacionaisNumero').innerHTML = operacionais_ativos+" / "+operacionais_total;
                        percentagem = ((operacionais_ativos/operacionais_total)*100).toFixed(2);
                        document.getElementById('operacionaisPercentagem').innerHTML = percentagem+"%";
                        
                        document.getElementById('operacionaisPercentagem').style.color = "red";
                        document.getElementById('operacionaisPercentagem').style.fontWeight = "bold";
    
                        console.log(operacionais_ativos);
                        console.log(operacionais_total);


                    } else if(data[0].disponibilidade == 'disponível' && data.length == 1) {
                        operacionais_ativos = 0;
                        operacionais_total = data[0].quantidade_operacional;


                        document.getElementById('operacionaisNumero').innerHTML = operacionais_ativos+" / "+operacionais_total;
                        percentagem = ((operacionais_ativos/operacionais_total)*100).toFixed(2);
                        document.getElementById('operacionaisPercentagem').innerHTML = percentagem+"%";
                        
                        document.getElementById('operacionaisPercentagem').style.color = "green";
                        
                        console.log(operacionais_ativos);
                        console.log(operacionais_total);



                    } else if(data[0].disponibilidade == 'disponível' && data[1].disponibilidade == 'indisponível'){
                        operacionais_ativos = data[1].quantidade_operacional;
                        operacionais_total = data[0].quantidade_operacional + data[1].quantidade_operacional;

                    document.getElementById('operacionaisNumero').innerHTML = operacionais_ativos+" / "+operacionais_total;
                    percentagem = ((operacionais_ativos/operacionais_total)*100).toFixed(2);
                    document.getElementById('operacionaisPercentagem').innerHTML = percentagem+"%";
                    
                    
                    if(percentagem >= 80){
                        document.getElementById('operacionaisPercentagem').style.color = "red";
                        document.getElementById('operacionaisPercentagem').style.fontWeight = "bold";

                    } else if (percentagem>=55){
                        document.getElementById('operacionaisPercentagem').style.color="darkorange";
                    } else {
                        document.getElementById('operacionaisPercentagem').style.color = "green";
                    }
                    console.log(operacionais_ativos);
                    console.log(operacionais_total);



                    }  
                    
            })}


           

    function readOcorrenciasAno() {
        fetch('http://188.166.174.213:8080/OcorenciasAno', {
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
                    //console.log(data.length);
                    console.log(data[i].quantidade_nivel);
                    janeiro = data[0].Janeiro;
                    fevereiro = data[0].Fevereiro;
                    marco = data[0].Março;
                    abril = data[0].Abril;
                    maio = data[0].Maio;
                    junho = data[0].Junho;
                    julho = data[0].Julho;
                    agosto = data[0].Agosto;
                    setembro = data[0].Setembro;
                    outubro = data[0].Outubro;
                    novembro = data[0].Novembro;
                    dezembro = data[0].Dezembro;
                    }

                    console.log(marco);

                    google.charts.load('current', {'packages':['corechart']});
                    google.charts.setOnLoadCallback(drawChart);

        
                    // Draw the chart and set the chart values
                    function drawChart() {
                        var data = google.visualization.arrayToDataTable([
                            ['Més', ' '],
                            ['Janeiro', janeiro],
                            ['Fevereiro', fevereiro],
                            ['Março', marco],
                            ['Abril', abril],
                            ['Maio', maio],
                            ['Junho', junho],
                            ['Julho', julho],
                            ['Agosto', agosto],
                            ['Setembro', setembro],
                            ['Outubro', outubro],
                            ['Novembro', novembro],
                            ['Dezembro', dezembro]

                        ]);

                    // Optional; add a title and set the width and height of the chart
                    var options = {'title':'Ocorrencias ao longo do ano', curveType: 'line',
                      hAxis: {
                        title: 'Meses'
                      },
                      vAxis: {
                        title: 'Quantidade de Ocorrencias'
                      }, 'width':650, 'height':400};

                    // Display the chart inside the <div> element with id="piechart"
                    var chart = new google.visualization.LineChart(document.getElementById('linechart'));
                    chart.draw(data, options);
                }
            })
    }

            