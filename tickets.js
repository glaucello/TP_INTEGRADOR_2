function Calcular_Pago() {
    var select = document.getElementById('Categoria');
    var value = select.options[select.selectedIndex].value;
   
    var cuenta = 200;
    switch (value) {
        case 'Estudiante': 
          cuenta = cuenta - (cuenta * 80) / 100;
            break;
        case 'Trainee': 
          cuenta = cuenta - (cuenta * 50) / 100;;
            break;
        case 'Junior': 
            cuenta = cuenta - (cuenta * 30) / 100;;
              break;
        default: 
          cuenta = 200;
            break;
        }

        document.getElementById('Total').value = 'Total a pagar: $ ' + cuenta;

  }

  function Limpiar_Pantalla() {
    document.getElementById("Formulario").reset();
  }

  function Comprar_Tickets(){
    location.href = "tickets.html";
  }