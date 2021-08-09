//Declaration the variable with student of Javascript
var Name;

var eMail;

var PassWord;

var num = 0;

//Date the today too declaration with student Javascript
hoje = new Date();
dia =  hoje.getDate()
mes = hoje.getMonth() + 1
ano = hoje.getYear() + 1900

//go date today in screen
document.write("<h3>Hoje:" + dia + '/' + mes + '/' + ano + "</h3>");

// declaration of function basic with student Javascript
function escrever(quadro){
  info = "Usuário número" + (num++) + "/n";
  info += "Name:" + Name + "/n";
  info += "E-mail:" + eMail + "/n/n";
  quadro.value += info
  this.form.Area
}

window.status = "hello word";


//Function is in the ok!!
//event onclick in HTML
function Place(){
  var nome = document.getElementById("nome").value;
  var Email = document.getElementById("email").value;
  var pass = document.getElementById("senha").value;

  var txt = document.getElementById("campo").value;
  txt[0] = nome;
  console.log(txt);


}




console.log('hello word');

/*
 ____      ____  _____    _____      ___  ____    ________   _______     
|_  _|    |_  _||_   _|  |_   _|    |_  ||_  _|  |_   __  | |_   __ \    
  \ \  /\  / /    | |      | |        | |_/ /      | |_ \_|   | |__) |   
   \ \/  \/ /     | |      | |   _    |  __'.      |  _| _    |  __ /    
    \  /\  /     _| |_    _| |__/ |  _| |  \ \_   _| |__/ |  _| |  \ \_  
     \/  \/     |_____|  |________| |____||____| |________| |____| |___| 
                                                                         
                                         
 */