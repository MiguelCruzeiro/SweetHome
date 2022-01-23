const pesquisar = () =>{
    const input = document.getElementById("localizacao").value.toUpperCase();
    //const filtro = input.value.toUpperCase();
    const menu = document.getElementById("menu");
    const product = document.querySelectorAll(".item");
    const menuitem = menu.getElementsByTagName("h6");
    //const match = product[0].getElementsByTagName('h6')[0];
    //console.log(match);

    for(var i = 0; i < menuitem.length; i++){
        let match = product[i].getElementsByTagName("h6")[0];
        console.log(match);
        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(input) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";               
            }
        }
    }

}

function limpar(){
    document.getElementById("localizacao").value = "";
    pesquisar();
}
