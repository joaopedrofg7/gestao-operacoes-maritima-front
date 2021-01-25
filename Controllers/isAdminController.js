function ligacaoUtilizadoresTabela(){

    cargo = localStorage.getItem("id_cargo");
    if(cargo == 4){
        document.getElementById("butaohiden").hidden = false;;

}
}


function ligacaoMaterialTabela(){

    cargo = localStorage.getItem("id_cargo");
    if(cargo == 2){
        document.getElementById("butaoMaterial").hidden = false;;

}
}
