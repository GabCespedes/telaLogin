function ValidarLogin(){
    const username = document.getElementById("Email").value;
    const id = document.getElementById("Id").value;
    const password = document.getElementById("Senha").value;
    
    if (username === "" || id === "" || password === "") {
        alert("Preencha todos os campos!");
        return false;
    }
}