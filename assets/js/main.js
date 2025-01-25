  // Tempo inicial em segundos (15 minutos = 900 segundos)
  let timeInSeconds = 15 * 60;

  // Elementos de minutos, segundos e mensagem
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  const messageElement = document.getElementById('message');

  // Verificar se o cronômetro já zerou anteriormente (utilizando localStorage)
  const timerFinished = sessionStorage.getItem('timerFinished');

  if (timerFinished === 'true') {
    // Exibe a mensagem diretamente se o cronômetro já foi concluído
    messageElement.style.display = 'block';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
  } else {
    // Função para iniciar o cronômetro regressivo
    function startCountdown() {
      const interval = setInterval(() => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        // Atualiza os valores no DOM
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        // Verifica se o tempo chegou a zero
        if (timeInSeconds <= 0) {
          clearInterval(interval); // Para o intervalo
          sessionStorage.setItem('timerFinished', 'true'); // Salva o estado no localStorage
          messageElement.style.display = 'block'; // Exibe a mensagem
        } else {
          timeInSeconds--; // Decrementa o tempo
        }
      }, 1000); // Atualiza a cada segundo
    }
      // Iniciar o cronômetro
      startCountdown();
  }


    // Lista de nomes aleatórios
    const names = [
      'Ana', 'Carlos', 'Beatriz', 'Lucas', 'Mariana',
      'João', 'Fernanda', 'Rafael', 'Camila', 'Gabriel',
      'Isabela', 'Tiago', 'Larissa', 'Pedro', 'Sofia',
      'Roberto', 'Juliana', 'Marcelo', 'Priscila', 'André',
      'Renata', 'Eduardo', 'Jéssica', 'Fabiano', 'Bruna',
      'Leandro', 'Tatiane', 'Rodrigo', 'Aline', 'Daniel',
      'Carolina', 'Felipe', 'Vanessa', 'Diego', 'Paula',
      'Vinícius', 'Thais', 'Gustavo', 'Letícia', 'Leonardo',
      'Amanda', 'Murilo', 'Natália', 'Fábio', 'Elaine',
      'Fernando', 'Catarina', 'Ricardo', 'Bianca', 'Rafaela',
      'Henrique', 'Manuela', 'Antônio', 'Evelyn', 'Caio',
      'Giovana', 'Samuel', 'Lívia', 'Arthur', 'Vitória',
      'Bruno', 'Luiza', 'Matheus', 'Cecília', 'Bernardo',
      'Clara', 'Davi', 'Helena', 'Igor', 'Alice', 'Otávio',
      'Sophia', 'Renato', 'Marcos', 'Melissa', 'Enzo'
    ];
    

    // Função para gerar um nome aleatório
    function getRandomName() {
      const randomIndex = Math.floor(Math.random() * names.length);
      return names[randomIndex];
    }

    // Função para criar e exibir o toast
    function showToast(message) {
      const toastContainer = document.querySelector('.toast-container');

      // Criar o elemento do toast
      const toast = document.createElement('div');
      toast.className = 'toast';

      // Criar o ícone de check
      const icon = document.createElement('div');
      icon.className = 'toast-icon';
      icon.textContent = '✔';

      // Criar o texto do toast
      const text = document.createElement('span');
      text.textContent = message;

      // Adicionar o ícone e o texto ao toast
      toast.appendChild(icon);
      toast.appendChild(text);

      // Adicionar o toast ao container
      toastContainer.appendChild(toast);

      // Remover o toast após a animação
      setTimeout(() => {
        toast.remove();
      }, 4000); // Tempo total da animação (4 segundos)
    }

    // Função para simular a compra
    function simulatePurchase() {
      const name = getRandomName();
      const message = `${name} acabou de comprar!`;
      showToast(message);
    }

    // Configurar o intervalo para exibir o toast a cada 40 segundos
    setInterval(simulatePurchase, 20000);

    // Exibir um toast inicial imediatamente (opcional)
    simulatePurchase();