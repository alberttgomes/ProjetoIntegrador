function openSearch5() {
  document.getElementById("myOverlay5").style.display = "block";
}
function closeSearch5() {
  document.getElementById("myOverlay5").style.display = "none";
}
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


function openSearch2() {
  document.getElementById("myOverlay2").style.display = "block";
}
function closeSearch2() {
  document.getElementById("myOverlay2").style.display = "none";
}

function openSearch3() {
  document.getElementById("myOverlay3").style.display = "block";
}
function closeSearch3() {
  document.getElementById("myOverlay3").style.display = "none";
}

function openSearch4() {
  document.getElementById("myOverlay4").style.display = "block";
}
function closeSearch4() {
  document.getElementById("myOverlay4").style.display = "none";
}


function openSearch5() {
  document.getElementById("myOverlay5").style.display = "block";
}
function closeSearch5() {
  document.getElementById("myOverlay5").style.display = "none";
}





function adicionar() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar) {
      localStorage.adicionar = Number(localStorage.adicionar)+1;
    } else {
      localStorage.adicionar = 1;
    }
    document.getElementById("result").innerHTML =  + localStorage.adicionar  ;
  }

   document.getElementById("result").value =  localStorage.adicionar;
}

function diminuir() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar) {
      localStorage.adicionar = Number(localStorage.adicionar) -1;
    } else {
      localStorage.adicionar = 1;
    }
    document.getElementById("result").innerHTML =  localStorage.adicionar ;
  }  
  document.getElementById("result").value =  localStorage.adicionar;
}





function adicionar2() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar2) {
      localStorage.adicionar2 = Number(localStorage.adicionar2)+1;
    } else {
      localStorage.adicionar2 = 1;
    }
    document.getElementById("result2").innerHTML =  + localStorage.adicionar2  ;
  }

   document.getElementById("result2").value =  localStorage.adicionar2;
}

function diminuir2() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar2) {
      localStorage.adicionar2 = Number(localStorage.adicionar2) -1;
    } else {
      localStorage.adicionar2 = 1;
    }
    document.getElementById("result2").innerHTML =  localStorage.adicionar2 ;
  }  
  document.getElementById("result2").value =  localStorage.adicionar2;
}




function adicionar3() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar3) {
      localStorage.adicionar3 = Number(localStorage.adicionar3)+1;
    } else {
      localStorage.adicionar3 = 1;
    }
    document.getElementById("result3").innerHTML =  + localStorage.adicionar3  ;
  }

   document.getElementById("result3").value =  localStorage.adicionar3;
}

function diminuir3() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar3) {
      localStorage.adicionar3 = Number(localStorage.adicionar3) -1;
    } else {
      localStorage.adicionar3 = 1;
    }
    document.getElementById("result3").innerHTML =  localStorage.adicionar3 ;
  }  
  document.getElementById("result3").value =  localStorage.adicionar3;
}








function adicionar4() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar4) {
      localStorage.adicionar4 = Number(localStorage.adicionar4)+1;
    } else {
      localStorage.adicionar4 = 1;
    }
    document.getElementById("result4").innerHTML =  + localStorage.adicionar4  ;
  }

   document.getElementById("result4").value =  localStorage.adicionar4;
}

function diminuir4() {  

  if (typeof(Storage) !== "undefined") {
    if (localStorage.adicionar4) {
      localStorage.adicionar4 = Number(localStorage.adicionar4) -1;
    } else {
      localStorage.adicionar4 = 1;
    }
    document.getElementById("result4").innerHTML =  localStorage.adicionar4 ;
  }  
  document.getElementById("result4").value =  localStorage.adicionar4;
}