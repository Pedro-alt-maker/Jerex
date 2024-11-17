const words = [
    "Olá, seja bem-vindo!",
    "Sou desenvolvedor da front-en", "Programador desenvolvemento web",
    "O meu nome é Jeremias Pedro", "Clique no botão entrar", "para ter acesso a uma nova página"
  ];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = words[wordIndex];
  const typingSpeed = 100; // Velocidade de digitação em milissegundos
  const erasingSpeed = 50; // Velocidade de apagamento em milissegundos
  const typingTextElement = document.getElementById("typing-text");
  
  function typeWord() {
    if (letterIndex < currentWord.length) {
      typingTextElement.textContent += currentWord.charAt(letterIndex); // Adiciona um caractere
      letterIndex++;
      setTimeout(typeWord, typingSpeed); // Chama a função novamente após o delay
    } else {
      setTimeout(eraseWord, 1000); // Pausa 1 segundo após a palavra ser digitada
    }
  }
  
  function eraseWord() {
    if (letterIndex > 0) {
      typingTextElement.textContent = currentWord.slice(0, letterIndex - 1); // Apaga o último caractere
      letterIndex--;
      setTimeout(eraseWord, erasingSpeed); // Chama a função novamente após o delay
    } else {
      wordIndex = (wordIndex + 1) % words.length; // Passa para a próxima palavra (loop cíclico)
      currentWord = words[wordIndex];
      setTimeout(typeWord, 500); // Pausa 0.5 segundos antes de digitar a próxima palavra
    }
  }
  
  typeWord(); // Inicia o efeito

  // Carregar loader
  document.querySelector('.btnInicio').addEventListener('click',function (){
    const loader = document.querySelector('.loader')
    loader.style.display = 'block'

    setTimeout( function (){
      loader.style.display = 'none'
      window.open("index1.html","_self")
    },2000)
  })
  