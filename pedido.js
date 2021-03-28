function enviarUm(){

  var telefone =  "55819999999999";
  var item1 = document.getElementById("item1").value;
  var item2 = document.getElementById("item2").value;
  var item3 = document.getElementById("item3").value;

  if (document.getElementById("doissabores").checked == true)
  var Radio = document.getElementById("doissabores").value;
  
  if (document.getElementById("tressabores").checked == true)
  var Radio = document.getElementById("tressabores").value;

  if (document.getElementById("quatrosabores").checked == true)
  var Radio = document.getElementById("quatrosabores").value;

  if (document.getElementById("cincosabores").checked == true)
  var Radio = document.getElementById("cincosabores").value;

  if (document.getElementById("seissabores").checked == true)
  var Radio = document.getElementById("seissabores").value;

  if (document.getElementById("setesabores").checked == true)
  var Radio = document.getElementById("setesabores").value;

  if (document.getElementById("oitosabores").checked == true)
  var Radio = document.getElementById("oitosabores").value;

  if (document.getElementById("novesabores").checked == true)
  var Radio = document.getElementById("novesabores").value;

  var Sabores = document.getElementById("SaborTapi").value;

  var pedido= "Foi solicitado pela@ "+item1+" "+item2+" do bloco "+item3+", Tapioca de " + Radio + ", são eles :" + Sabores ; 

  document.getElementById('ad').innerHTML = pedido;
  window.location.href=`https://api.whatsapp.com/send?phone=${telefone}&text=${pedido}`;
}





function enviarDois(){

var telefone =  "55819999999999";
var item1 = document.getElementById("item4").value;
var item2 = document.getElementById("item5").value;
var item3 = document.getElementById("item6").value;

if (document.getElementById("trigo").checked == true)
  var Radio = document.getElementById("trigo").value;
        
if (document.getElementById("laranja").checked == true)
        var Radio = document.getElementById("laranja").value;

if (document.getElementById("tortac").checked == true)
var Radio2 = document.getElementById("tortac").value;

if (document.getElementById("bolor").checked == true)
var Radio2 = document.getElementById("bolor").value;

if (document.getElementById("bolorint").checked == true)
var Radio2 = document.getElementById("bolorint").value;

var pedido= "Foi solicitado pela@ "+ item1 +" "+ item2 +" do bloco "+ item3 +", uma bolo fatia de bolo de: " + Radio + " e uma fatia de torta/bolo de rolo: "+ Radio2;

document.getElementById('ad2').innerHTML = pedido;
window.location.href=`https://api.whatsapp.com/send?phone=${telefone}&text=${pedido}`;

}



  function enviarTres(){

    var telefone = "5581999999999";
    var item1 = document.getElementById("item7").value;
    var item2 = document.getElementById("item8").value;
    var item3 = document.getElementById("item9").value;

    if (document.getElementById("frangoere").checked == true)
    var Radio = document.getElementById("frangoere").value;

    if (document.getElementById("requeijãoeri").checked == true)
    var Radio = document.getElementById("requeijãoeri").value;

    var pedido= "Foi solicitado pela@ "+item1+" "+item2+" do bloco "+item3+", um sanduíche natural de " + Radio;

  document.getElementById('ad3').innerHTML = pedido;
  window.location.href=`https://api.whatsapp.com/send?phone=${telefone}&text=${pedido}`;
  }




 function enviarQuatro(){

  var item1 = document.getElementById("item10").value;
  var item2 = document.getElementById("item11").value;
  var item3 = document.getElementById("item12").value;

  if (document.getElementById("cinquenta").checked == true)
  var Radio = document.getElementById("cinquenta").value;

  if (document.getElementById("centoedez").checked == true)
  var Radio = document.getElementById("centoedez").value;

  if (document.getElementById("centoeoitenta").checked == true)
  var Radio = document.getElementById("centoeoitenta").value;

  if (document.getElementById("cinquentaml").checked == true)
  var Radio = document.getElementById("cinquentaml").value;

  if (document.getElementById("centoedezml").checked == true)
  var Radio = document.getElementById("centoedezml").value;
  
  if (document.getElementById("centoeoitentaml").checked == true)
  var Radio = document.getElementById("centoeoitentaml").value;

  var pedido= "Foi solicitado pela@ "+ item1 +" "+ item2 +" do bloco "+ item3 +", um café de "+ Radio;
  var telefone = "5581999999999";

  document.getElementById('ad4').innerHTML = pedido;
  window.location.href=`https://api.whatsapp.com/send?phone=${telefone}&text=${pedido}`;

 }