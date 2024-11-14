const questions = [
    "¿Tienes experiencia en ventas?",
    "¿Buscas un trabajo flexible?",
    "¿Sin grandes inversiones?",
    "¿Solo tu tiempo libre y ganas de vender?"
  ];

  const questionsEmpresas = [
    "¿Buscas ampliar tu red de ventas?",
    "¿Gestionar a tus vendedores?",
    "¿Gastar menos en campañas de contratación?",
    "¿Sientes que no estas sacandole todo el jugo a tu producto?"
  ];
  
  let questionIndex = 0;
  const questionText = document.getElementById('question-text');
  const questionTextEmpresas = document.getElementById('question-text-empresas');
  const vamosBtn = document.getElementById('vamos-btn');
  
  document.body.addEventListener('click', () => {
    if (questionIndex < questions.length) {
      questionText.textContent = questions[questionIndex];
      questionIndex++;
    } else {
      questionText.style.display = 'none';
      vamosBtn.style.display = 'block';
    }
  });

  document.body.addEventListener('click', () => {
    if (questionIndex < questionsEmpresas.length) {
      questionTextEmpresas.textContent = questionsEmpresas[questionIndex];
      questionIndex++;
    } else {
      questionTextEmpresas.style.display = 'none';
      vamosBtn.style.display = 'block';
    }
  });
  