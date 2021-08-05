function reload(){
    var nome = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var documento = document.getElementById("cpf").value;

    var result = document.getElementById("first-result").innerHTML = nome;
    var twoResult = document.getElementById("second-result").innerHTML = Email;
    var thirResult = document.getElementById("third-result").innerHTML = documento;  
}