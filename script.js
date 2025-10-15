// Modelo: contiene los datos y funciones relacionadas con ellos
const Model = (() => {
  const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7',
                    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  function getRandomHexColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      color += hexChars[randomIndex];
    }
    return color;
  }

  return {
    getRandomHexColor
  };
})();

// Vista: gestiona la interfaz del usuario
const View = (() => {
  const colorCodeElement = document.getElementById('colorCode');
  const body = document.body;
  const button = document.getElementById('changeColorBtn');

  function setBackgroundColor(color) {
    body.style.backgroundColor = color;
  }

  function displayColorCode(color) {
    colorCodeElement.textContent = color;
  }

  function bindChangeColor(handler) {
    button.addEventListener('click', handler);
  }

  return {
    setBackgroundColor,
    displayColorCode,
    bindChangeColor
  };
})();

// Presentador: lógica que conecta modelo y vista
const Presenter = ((model, view) => {
  function init() {
    view.bindChangeColor(handleChangeColor);
  }

  function handleChangeColor() {
    const newColor = model.getRandomHexColor();
    view.setBackgroundColor(newColor);
    view.displayColorCode(newColor);
  }

  return {
    init
  };
})(Model, View);

// Inicializar la aplicación
Presenter.init();
