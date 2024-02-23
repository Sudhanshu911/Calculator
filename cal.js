function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    var expression = document.getElementById('display').value;
    try {
      var result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  const body = document.body;
        const themeToggle = document.getElementById('theme-toggle');

        themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        });