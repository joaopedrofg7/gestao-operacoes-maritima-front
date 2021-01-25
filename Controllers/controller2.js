let domain = "http://188.166.174.213:8080/";
function register() {
    if(document.getElementById('nomeInput').value.length == 0){alert("porfavor insira o seu nome")}
    else if(document.getElementById('emailInput').value.length == 0){alert("porfavor insira a sua idade")}
    else if(document.getElementById('emailInput').value.length == 0){alert("porfavor insira um email")}
    else{
    var data = {};
    data.nome_voluntario = document.getElementById('nomeInput').value;
    data.idade = document.getElementById('idadeInput').value;
    data.email_voluntario = document.getElementById('emailInput').value;
    data.motivo_participacao = document.getElementById('motivoInput').value;
    data.problemas_saude = document.getElementById('problemasInput').value;
    data.experiencia = document.getElementById('experienciaInput').value;
    try{
        fetch(domain+"volunteers", {
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(data),
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        })
        alert("Formulário submetido com sucesso")
    } catch(err){
        console.log({msg: err});
    }
}
}