document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("calculadora");

    formulario.addEventListener("submit", (evt) => {
        evt.preventDefault();

        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const resultado = num1 + num2;
            Swal.fire({
                title: "Resultado",
                text: `La suma es: ${resultado}`,
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "Por favor, ingresa números válidos.",
                icon: "error",
                confirmButtonText: "Intentar de nuevo"
            });
        }
    });
});

//Agegar un evento general caragar esto

/*  ..:::TAREA:::..
..... Sumar los numeros
..... Agragar evento para cuando este completo el Dom
..... Mostrar los resultados de la suma

*/