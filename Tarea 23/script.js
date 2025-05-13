// Función de fábrica con abreviatura de propiedades
const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    };
  };
  
  // Lógica para crear el robot y mostrar en la página
  document.getElementById('create-btn').addEventListener('click', () => {
    const newRobot = robotFactory('P-501', false);
    newRobot.beep(); // Esto también aparece en consola
  
    const output = `
  Modelo: ${newRobot.model}
  ¿Es móvil?: ${newRobot.mobile ? 'Sí' : 'No'}
  (Beep Boop mostrado en la consola)
    `;
    document.getElementById('output').textContent = output;
  });
  