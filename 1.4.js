// Array de preguntas con acentos y caracteres especiales correctamente codificados
const preguntas = [
  {
    pregunta: "¿Cuántos lados tiene un triángulo?",
    opciones: ["2", "3", "4", "5"],
    respuestaCorrecta: "3"
  },
  {
    pregunta: "¿Qué figura tiene cuatro lados iguales y cuatro ángulos rectos?",
    opciones: ["Rectángulo", "Cuadrado", "Rombo", "Trapecio"],
    respuestaCorrecta: "Cuadrado"
  },
  {
    pregunta: "¿Cómo se llama una figura que tiene tres lados?",
    opciones: ["Cuadrilátero", "Pentágono", "Triángulo", "Hexágono"],
    respuestaCorrecta: "Triángulo"
  },
  {
    pregunta: "¿Cuál es la figura que no tiene lados rectos?",
    opciones: ["Círculo", "Cuadrado", "Triángulo", "Rombo"],
    respuestaCorrecta: "Círculo"
  },
  {
    pregunta: "¿Qué figura geométrica parece una pelota?",
    opciones: ["Cubo", "Esfera", "Prisma", "Pirámide"],
    respuestaCorrecta: "Esfera"
  },
  {
    pregunta: "¿Cuántas caras tiene un cubo?",
    opciones: ["4", "6", "8", "12"],
    respuestaCorrecta: "6"
  },
  {
    pregunta: "¿Cómo se llama el cuerpo geométrico que parece una caja?",
    opciones: ["Esfera", "Cilindro", "Cubo", "Cono"],
    respuestaCorrecta: "Cubo"
  },
  {
    pregunta: "¿Qué cuerpo geométrico tiene una base circular y termina en punta?",
    opciones: ["Cubo", "Pirámide", "Cilindro", "Cono"],
    respuestaCorrecta: "Cono"
  },
  {
    pregunta: "¿Qué figura tiene forma de rueda?",
    opciones: ["Círculo", "Óvalo", "Cuadrado", "Triángulo"],
    respuestaCorrecta: "Círculo"
  },
  {
    pregunta: "¿Cuántos vértices tiene un cuadrado?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "4"
  },
  {
    pregunta: "¿Qué figura tiene seis caras cuadradas?",
    opciones: ["Pirámide", "Prisma rectangular", "Cubo", "Cilindro"],
    respuestaCorrecta: "Cubo"
  },
  {
    pregunta: "¿Cuál es el nombre del cuerpo geométrico que parece una lata?",
    opciones: ["Esfera", "Cilindro", "Cono", "Cubo"],
    respuestaCorrecta: "Cilindro"
  },
  {
    pregunta: "¿Cuántos lados tiene un pentágono?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "5"
  },
  {
    pregunta: "¿Qué figura tiene cinco puntas iguales y lados del mismo tamaño?",
    opciones: ["Pentágono", "Estrella", "Hexágono", "Octógono"],
    respuestaCorrecta: "Estrella"
  },
  {
    pregunta: "¿Qué cuerpo geométrico tiene una sola cara curva y dos bases circulares?",
    opciones: ["Esfera", "Pirámide", "Cilindro", "Cono"],
    respuestaCorrecta: "Cilindro"
  },
  {
    pregunta: "¿Qué figura tiene cuatro lados, pero no todos son iguales?",
    opciones: ["Cuadrado", "Rectángulo", "Triángulo", "Círculo"],
    respuestaCorrecta: "Rectángulo"
  },
  {
    pregunta: "¿Cuál figura tiene exactamente un par de lados paralelos?",
    opciones: ["Cuadrado", "Rombo", "Trapecio", "Triángulo"],
    respuestaCorrecta: "Trapecio"
  },
  {
    pregunta: "¿Cómo se llama una figura que tiene seis lados?",
    opciones: ["Pentágono", "Hexágono", "Heptágono", "Octógono"],
    respuestaCorrecta: "Hexágono"
  },
  {
    pregunta: "¿Qué figura tiene tres vértices y tres lados?",
    opciones: ["Cuadrado", "Rombo", "Rectángulo", "Triángulo"],
    respuestaCorrecta: "Triángulo"
  },
  {
    pregunta: "¿Qué figura tiene más lados: un cuadrado o un hexágono?",
    opciones: ["Cuadrado", "Hexágono", "Ambos tienen igual", "Ninguno tiene lados"],
    respuestaCorrecta: "Hexágono"
  },
  {
    pregunta: "¿Qué es un plano en geometría?",
    opciones: ["Una línea recta", "Una superficie plana infinita", "Un punto", "Un ángulo"],
    respuestaCorrecta: "Una superficie plana infinita"
  },
  {
    pregunta: "¿Qué se puede dibujar sobre un plano?",
    opciones: ["Solo líneas", "Solo puntos", "Figuras geométricas", "Nada"],
    respuestaCorrecta: "Figuras geométricas"
  },
  {
    pregunta: "¿Cómo se llama la línea que no es recta?",
    opciones: ["Segmento", "Semirrecta", "Curva", "Recta"],
    respuestaCorrecta: "Curva"
  },
  {
    pregunta: "¿Qué tipo de línea es como un camino torcido?",
    opciones: ["Recta", "Segmento", "Curva", "Semirrecta"],
    respuestaCorrecta: "Curva"
  },
  {
    pregunta: "¿Qué línea va de un punto a otro en forma recta?",
    opciones: ["Curva", "Segmento", "Plano", "Punto"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "¿Cómo se llama la parte de una línea que tiene un punto de inicio y se extiende sin fin en una dirección?",
    opciones: ["Recta", "Segmento", "Semirrecta", "Curva"],
    respuestaCorrecta: "Semirrecta"
  },
  {
    pregunta: "¿Cómo se llama una línea que tiene dos puntos: uno de inicio y uno final?",
    opciones: ["Semirrecta", "Recta", "Segmento", "Curva"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "¿Qué línea tiene principio, pero no tiene fin?",
    opciones: ["Segmento", "Recta", "Semirrecta", "Curva"],
    respuestaCorrecta: "Semirrecta"
  },
  {
    pregunta: "¿Qué línea tiene principio y fin?",
    opciones: ["Semirrecta", "Recta", "Segmento", "Plano"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "¿Cuál es la diferencia entre una línea recta y una curva?",
    opciones: ["No hay diferencia", "La recta es infinita y la curva no", "La recta no cambia de dirección y la curva sí", "La curva es más larga"],
    respuestaCorrecta: "La recta no cambia de dirección y la curva sí"
  },
  {
    pregunta: "¿Cómo se llama la parte de una línea recta comprendida entre dos puntos?",
    opciones: ["Recta", "Semirrecta", "Segmento", "Curva"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "¿Cuántas líneas rectas se pueden trazar entre dos puntos?",
    opciones: ["Infinitas", "Dos", "Una", "Ninguna"],
    respuestaCorrecta: "Una"
  },
  {
    pregunta: "¿Qué es una semirrecta?",
    opciones: ["Una línea con un punto inicial pero sin fin", "Una línea con dos extremos", "Una línea infinita", "Una línea curva"],
    respuestaCorrecta: "Una línea con un punto inicial pero sin fin"
  },
  {
    pregunta: "¿Qué es un segmento?",
    opciones: ["Una línea infinita", "Una línea con un punto inicial pero sin fin", "Una línea con dos extremos", "Una línea curva"],
    respuestaCorrecta: "Una línea con dos extremos"
  },
  {
    pregunta: "¿Cómo se representa una línea curva?",
    opciones: ["Con una línea recta", "Con un arco", "Con dos puntos", "Con un ángulo"],
    respuestaCorrecta: "Con un arco"
  },
  {
    pregunta: "¿Qué línea se usa para representar un borde recto?",
    opciones: ["Curva", "Segmento", "Semirrecta", "Plano"],
    respuestaCorrecta: "Segmento"
  },
  {
    pregunta: "¿Cuál es la diferencia entre una recta y una semirrecta?",
    opciones: ["No hay diferencia", "La recta es infinita en ambas direcciones, la semirrecta tiene un punto inicial", "La semirrecta es curva", "La recta es más larga"],
    respuestaCorrecta: "La recta es infinita en ambas direcciones, la semirrecta tiene un punto inicial"
  },
  {
    pregunta: "¿Cuál es la diferencia entre una semirrecta y un segmento?",
    opciones: ["No hay diferencia", "La semirrecta tiene un punto inicial pero no final, el segmento tiene dos extremos", "El segmento es curvo", "La semirrecta es más larga"],
    respuestaCorrecta: "La semirrecta tiene un punto inicial pero no final, el segmento tiene dos extremos"
  },
  {
    pregunta: "¿Qué tipo de línea forma una esquina?",
    opciones: ["Recta", "Curva", "Segmento", "Ángulo"],
    respuestaCorrecta: "Ángulo"
  },
  {
    pregunta: "¿Qué instrumento se usa para trazar líneas rectas?",
    opciones: ["Compás", "Transportador", "Regla", "Escuadra"],
    respuestaCorrecta: "Regla"
  },
  {
    pregunta: "¿Qué es un ángulo?",
    opciones: ["Una línea curva", "Una figura geométrica de tres lados", "La unión de dos semirrectas con un origen común", "Un punto en el espacio"],
    respuestaCorrecta: "La unión de dos semirrectas con un origen común"
  },
  {
    pregunta: "¿Cómo se forma un ángulo?",
    opciones: ["Con tres puntos", "Con la unión de dos rectas paralelas", "Con la unión de dos semirrectas que comparten un punto", "Con la unión de dos curvas"],
    respuestaCorrecta: "Con la unión de dos semirrectas que comparten un punto"
  },
  {
    pregunta: "¿Cuántos lados tiene un ángulo?",
    opciones: ["1", "2", "3", "4"],
    respuestaCorrecta: "2"
  },
  {
    pregunta: "¿Qué nombre recibe el punto donde se unen dos líneas para formar un ángulo?",
    opciones: ["Vértice", "Lado", "Extremo", "Radio"],
    respuestaCorrecta: "Vértice"
  },
  {
    pregunta: "¿Qué tipo de ángulo tiene 90 grados?",
    opciones: ["Agudo", "Obtuso", "Recto", "Llano"],
    respuestaCorrecta: "Recto"
  },
  {
    pregunta: "¿Cómo se llama el ángulo que es menor que 90 grados?",
    opciones: ["Recto", "Obtuso", "Agudo", "Llano"],
    respuestaCorrecta: "Agudo"
  },
  {
    pregunta: "¿Cómo se llama el ángulo que es mayor que 90 grados pero menor que 180 grados?",
    opciones: ["Agudo", "Recto", "Obtuso", "Llano"],
    respuestaCorrecta: "Obtuso"
  },
  {
    pregunta: "¿Cuáles son los elementos de un ángulo?",
    opciones: ["Lado y vértice", "Vértice y lados", "Base y altura", "Centro y radio"],
    respuestaCorrecta: "Vértice y lados"
  },
  {
    pregunta: "¿Qué instrumento se usa para medir ángulos?",
    opciones: ["Regla", "Transportador", "Compás", "Escuadra"],
    respuestaCorrecta: "Transportador"
  },
  {
    pregunta: "¿Cómo se llama un ángulo que forma una línea recta?",
    opciones: ["Recto", "Agudo", "Obtuso", "Llano"],
    respuestaCorrecta: "Llano"
  }
];

// Asegurar que el DOM esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById("quizForm");
  const totalPreguntas = preguntas.length;
  const valorPorPregunta = 10 / totalPreguntas;

  // Crear las preguntas en el formulario
  preguntas.forEach((pregunta, index) => {
    const div = document.createElement("div");
    div.className = "question";
    
    const titulo = document.createElement("p");
    titulo.textContent = `${index + 1}. ${pregunta.pregunta}`;
    div.appendChild(titulo);
    
    pregunta.opciones.forEach((opcion, opcionIndex) => {
      const opcionDiv = document.createElement("div");
      opcionDiv.className = "option";
      
      const input = document.createElement("input");
      input.type = "radio";
      input.id = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
      input.name = `pregunta${index + 1}`;
      input.value = opcion;
      
      const label = document.createElement("label");
      label.htmlFor = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
      label.textContent = opcion;
      
      opcionDiv.appendChild(input);
      opcionDiv.appendChild(label);
      div.appendChild(opcionDiv);
    });
    
    formulario.appendChild(div);
  });

  // Configurar el formulario de login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        iniciarSesion();
      }
    });
  }

  // Configurar los botones
  const submitButton = document.getElementById("submitButton");
  if (submitButton) {
    submitButton.addEventListener("click", function(e) {
      e.preventDefault();
      mostrarResultados();
    });
  }

  const resetButton = document.getElementById("resetButton");
  if (resetButton) {
    resetButton.addEventListener("click", function(e) {
      e.preventDefault();
      reiniciarCuestionario();
    });
  }

  const loginButton = document.getElementById("loginButton");
  if (loginButton) {
    loginButton.addEventListener("click", function(e) {
      e.preventDefault();
      iniciarSesion();
    });
  }
});

// Variables globales para el temporizador
let tiempoRestante = 30 * 60; // 30 minutos en segundos
let timer;
let valorPorPregunta = 0;
let totalPreguntas = 0;

/**
 * Inicia el temporizador del cuestionario
 */
function iniciarTemporizador() {
  // Asegurarse de que el temporizador no esté ya corriendo
  if (timer) {
    clearInterval(timer);
  }
  
  tiempoRestante = 30 * 60; // Restablecer a 30 minutos
  
  // Mostrar el tiempo inicial
  actualizarTemporizador();
  
  timer = setInterval(() => {
    tiempoRestante--;
    
    actualizarTemporizador();

    if (tiempoRestante <= 0) {
      clearInterval(timer);
      mostrarResultados();
    }
  }, 1000);
}

/**
 * Actualiza la visualización del temporizador
 */
function actualizarTemporizador() {
  const temporizadorElemento = document.getElementById("temporizador");
  if (temporizadorElemento) {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    temporizadorElemento.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`;
  }
}

/**
 * Muestra los resultados del cuestionario
 */
function mostrarResultados() {
  clearInterval(timer);

  const respuestas = [];
  let respuestasCorrectas = 0;
  totalPreguntas = preguntas.length;
  valorPorPregunta = 10 / totalPreguntas;

  preguntas.forEach((pregunta, index) => {
    const seleccionadas = document.querySelectorAll(`input[name="pregunta${index + 1}"]:checked`);
    let respuestaSeleccionada = "";
    
    if (seleccionadas.length > 0) {
      respuestaSeleccionada = seleccionadas[0].value;
      if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
        respuestasCorrectas++;
      }
    }
    
    respuestas.push(respuestaSeleccionada);
  });

  const calificacion = (respuestasCorrectas * valorPorPregunta).toFixed(2);
  const resultadosElement = document.getElementById("resultados");
  
  if (resultadosElement) {
    let resultadoHTML = `
      <p>¡Muy bien! Has completado el cuestionario.</p>
      <p><strong>Tu calificación es:</strong> ${calificacion} / 10</p>
      <p><strong>Respuestas correctas:</strong> ${respuestasCorrectas} de ${totalPreguntas}</p>`;
    
    resultadosElement.innerHTML = resultadoHTML;
    
    // Mostrar botón de reiniciar y ocultar el de enviar
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");
    
    if (submitButton) submitButton.style.display = "none";
    if (resetButton) resetButton.style.display = "block";

    // Desplazarse hasta los resultados
    resultadosElement.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Reinicia el cuestionario completo
 */
function reiniciarCuestionario() {
  // Detener el temporizador
  if (timer) {
    clearInterval(timer);
  }
  
  // Mostrar el formulario de login
  const cuestionarioContainer = document.getElementById("cuestionarioContainer");
  const loginContainer = document.getElementById("loginContainer");
  
  if (cuestionarioContainer) cuestionarioContainer.classList.add("oculto");
  if (loginContainer) loginContainer.classList.remove("oculto");
  
  // Limpiar todas las selecciones
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
  
  // Limpiar resultados
  const resultadosElement = document.getElementById("resultados");
  if (resultadosElement) resultadosElement.innerHTML = "";
  
  // Mostrar botón de enviar y ocultar botón de reiniciar
  const submitButton = document.getElementById("submitButton");
  const resetButton = document.getElementById("resetButton");
  
  if (submitButton) submitButton.style.display = "block";
  if (resetButton) resetButton.style.display = "none";
  
  // Limpiar campos de login
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");
  
  if (usuarioInput) usuarioInput.value = "";
  if (contrasenaInput) contrasenaInput.value = "";
  
  // Reiniciar el temporizador a su valor inicial
  tiempoRestante = 30 * 60;
  actualizarTemporizador();
}

/**
 * Maneja el inicio de sesión
 */
function iniciarSesion() {
  const usuarioInput = document.getElementById("usuario");
  const contrasenaInput = document.getElementById("contrasena");
  const loginError = document.getElementById("loginError");
  const loginContainer = document.getElementById("loginContainer");
  const cuestionarioContainer = document.getElementById("cuestionarioContainer");
  
  if (!usuarioInput || !contrasenaInput || !loginError || !loginContainer || !cuestionarioContainer) {
    console.error("Faltan elementos en el DOM");
    return;
  }
  
  const usuario = usuarioInput.value.trim().toLowerCase();
  const contrasena = contrasenaInput.value;

  if (usuario === "admin" && contrasena === "1234") {
    loginContainer.classList.add("oculto");
    cuestionarioContainer.classList.remove("oculto");
    loginError.textContent = "";
    iniciarTemporizador();
  } else {
    loginError.textContent = "Usuario o contraseña incorrectos.";
  }
}