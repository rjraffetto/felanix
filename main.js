function calcularPromedio() {
    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    const nota4 = parseInt(document.getElementById("nota4").value);
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
      alert("Por favor, introduce cuatro notas válidas.");
      return;
    }
  
    if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10 || nota4 < 1 || nota4 > 10) {
      alert("Las notas deben estar entre 1 y 10.");
      return;
    }
  
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById("promedio").innerHTML = promedio.toFixed(2);
  }