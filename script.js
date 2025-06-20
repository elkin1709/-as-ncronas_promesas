function lanzarMonedaConDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultado = Math.random() < 0.5 ? 'Cara' : 'Sello';
      resolve(resultado);
    }, 1500); // 1.5 segundos de delay
  });
}

const flipBtn = document.getElementById('flipBtn');
const resultDiv = document.getElementById('result');
const coinDiv = document.getElementById('coin');

flipBtn.addEventListener('click', async () => {
  // Deshabilitar el botón durante la animación
  flipBtn.disabled = true;
  flipBtn.style.opacity = '0.6';
  
  // Mostrar "Lanzando..." con efecto
  resultDiv.textContent = 'Lanzando...';
  resultDiv.className = 'launching';
  
  // Iniciar animación de la moneda
  coinDiv.classList.add('flipping');
  
  // Esperar el resultado
  const resultado = await lanzarMonedaConDelay();
  
  // Remover animación de la moneda
  coinDiv.classList.remove('flipping');
  
  // Mostrar resultado con animación
  resultDiv.textContent = resultado;
  resultDiv.className = resultado.toLowerCase();
  resultDiv.classList.add('showing');
  
  // Reactivar el botón
  flipBtn.disabled = false;
  flipBtn.style.opacity = '1';
  
  // Remover clase de animación después de un tiempo
  setTimeout(() => {
    resultDiv.classList.remove('showing');
  }, 500);
});
