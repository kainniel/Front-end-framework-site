// Verifica se pelo menos um checkbox está marcado
function checkInterests() {
    var interests = document.querySelectorAll("input[name='interesse[]']");
    var checked = false;
  
    for (var i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
        checked = true;
        break;
        }
    }
  
    if (!checked) {
        alert("É obrigatório selecionar pelo menos um interesse");
        event.preventDefault();
    }
    return true;
  }
  
  // Add a submit event listener to the form
  document.querySelector("form").addEventListener("submit", checkInterests);
  