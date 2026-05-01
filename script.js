// Espera a que el documento cargue
document.addEventListener("DOMContentLoaded", function() {
    let indice = 0;
    const imagenes = document.querySelectorAll('.foto-carrusel');
    const tiempoCambio = 4000; // 4 segundos

    function cambiarImagen() {
        // Quita la clase activo de la imagen actual
        imagenes[indice].classList.remove('activo');
        
        // Calcula el siguiente índice (vuelve a 0 al llegar al final)
        indice = (indice + 1) % imagenes.length;
        
        // Añade la clase activo a la nueva imagen
        imagenes[indice].classList.add('activo');
    }

    // Inicia el ciclo automático
    setInterval(cambiarImagen, tiempoCambio);
});