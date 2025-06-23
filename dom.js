let puntuacion = 0; // Guardar cuantas respuestas correctas lleva
let preguntaActual = 0; // Control del numero de la pregunta actual


// Guardar referencias al DOM
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const opciones = document.getElementById('opciones');

//  Crear función para limpiar las opciones y crear botones
function crearOpcion(texto, callback) {
  const boton = document.createElement('button');
  boton.textContent = texto;
  boton.onclick = callback;
  opciones.appendChild(boton);
}

// Crear Nivel 1 (Inicio del Protocolo)
function nivel1() {
  titulo.textContent = "Nivel 1: ESCOGE LA RUTA";
  descripcion.textContent = "CRUDY despierta. ¿Que ruta eliges para continuar?";
  opciones.innerHTML = "";

  crearOpcion("🔷 Nucleo lógico", nivel2);
  crearOpcion("🔶 Entorno simulado", nivel2);
  crearOpcion("❌ Trampa activa", gameOver);
}

// Crear función para perder
function gameOver() {
  titulo.textContent = "⚠️ Trampa activada";
  descripcion.textContent = "Has caido en una trampa. Fin del juego.";
  opciones.innerHTML = "";

  crearOpcion("🔁 Reiniciar", nivel1);
}

// Crear funcion para el siguiente nivel ()
function nivel2() {
  titulo.textContent = "Nivel 2: El Laberinto de Decisión";
  descripcion.textContent = "Aquí comienza el laberinto... (a programar)";
  opciones.innerHTML = "";

}

//  Iniciar el juego al cargar la página
nivel1();


function nivel2() {
  titulo.textContent = "Nivel 2: El Laberinto de Decisión";
  descripcion.textContent = "Te encuentras ante tres puertas misteriosas. Solo una lleva más cerca del núcleo lógico.";
  opciones.innerHTML = "";

  crearOpcion("🚪 Puerta de Código", nivel3);         // Correcta , avanza al nivel 3
  crearOpcion("🚪 Puerta Condicional", trampaNivel2); // Incorrecta , trampa
  crearOpcion("🚪 Puerta de Acceso Directo", trampaNivel2); // Incorrecta , trampa
}

function trampaNivel2() {
  titulo.textContent = "🚨 Trampa Digital";
  descripcion.textContent = "CRUDY detectó un intento inseguro. Tu código colapsa. Reinicia el sistema.";
  opciones.innerHTML = "";

  crearOpcion("🔁 Reiniciar desde Nivel 1", nivel1);
}

function nivel3() {
  titulo.textContent = "Nivel 3: Desafío de Reconstrucción";
  descripcion.textContent = "CRUDY prepara una secuencia lógica que deberás memorizar... (lo programaremos después)";
  opciones.innerHTML = "";

}

function nivel3() {
  titulo.textContent = "Nivel 3: Desafío de Reconstrucción";
  descripcion.textContent = "CRUDY generará una secuencia lógica. Memorízala y repítela correctamente.";
  opciones.innerHTML = "";

  crearOpcion("📜 Ver secuencia", mostrarSecuencia);
}

const secuenciaCorrecta = ["2", "4", "6"]; // Secuencia correcta

function mostrarSecuencia() {
  descripcion.textContent = "Secuencia: " + secuenciaCorrecta.join(" - ");
  opciones.innerHTML = "";

  setTimeout(() => {
    descripcion.textContent = "Ahora repite la secuencia correcta.";
    mostrarOpcionesSecuencia();
  }, 3000); // Se muestra durante 3 segundos
}

function mostrarOpcionesSecuencia() {
  opciones.innerHTML = "";

  const opcionesSecuencia = [
    { texto: "2 - 4 - 6", correcta: true },
    { texto: "2 - 6 - 4", correcta: false },
    { texto: "4 - 2 - 6", correcta: false }
  ];

  opcionesSecuencia.forEach(opcion => {
    const boton = document.createElement('button');
    boton.textContent = opcion.texto;
    boton.onclick = () => verificarSecuencia(opcion.correcta);
    opciones.appendChild(boton);
  });
}

function verificarSecuencia(correcta) {
  if (correcta) {
    nivel4(); // Si acierta , pasar a Nivel 4
  } else {
    gameOver(); // Si falla , Game Over
  }
}

function nivel4() {
  titulo.textContent = "Nivel 4: Lógica Fractal";
  descripcion.textContent = "CRUDY prepara un desafío de lógica encadenada... (por programar)";
  opciones.innerHTML = "";

}

function nivel4() {
  titulo.textContent = "Nivel 4: Lógica Fractal";
  descripcion.textContent = "CRUDY te presenta una cadena lógica. Deberás tomar varias decisiones encadenadas para avanzar.";
  opciones.innerHTML = "";

  crearOpcion("Iniciar desafío lógico", iniciarLaberintoLogico);
}

function iniciarLaberintoLogico() {
  titulo.textContent = "Decisión 1";
  descripcion.textContent = "Si A es verdadero, ¿qué debería ser B?";

  opciones.innerHTML = "";
  crearOpcion("B también verdadero", decision2Correcta);
  crearOpcion("B falso", gameOver);
}

function decision2Correcta() {
  titulo.textContent = "Decisión 2";
  descripcion.textContent = "Si B es verdadero, ¿cuál debería ser C?";
  
  opciones.innerHTML = "";
  crearOpcion("C verdadero", decision3Correcta);
  crearOpcion("C falso", gameOver);
}

function decision3Correcta() {
  titulo.textContent = "Decisión 3";
  descripcion.textContent = "Si C es verdadero, ¿qué sucede?";

  opciones.innerHTML = "";
  crearOpcion("Avanzas al núcleo", nivel5);
  crearOpcion("Sistema se bloquea", gameOver);
}

function nivel5() {
  titulo.textContent = "Nivel 5: Juicio del Núcleo";
  descripcion.textContent = "Has llegado al núcleo de CRUDY. Te espera la prueba final... (lo programaremos después)";
  opciones.innerHTML = "";
}

const preguntas = [
  {
    texto: "¿Qué significa 'DOM' en JavaScript?",
    opciones: [
      { texto: "Document Object Model", correcta: true },
      { texto: "Data Output Management", correcta: false },
      { texto: "Dynamic Object Map", correcta: false }
    ]
  },
  {
    texto: "¿Cuál es el operador de estrictamente igual en JavaScript?",
    opciones: [
      { texto: "=", correcta: false },
      { texto: "==", correcta: false },
      { texto: "===", correcta: true }
    ]
  },
  {
    texto: "¿Qué estructura permite repetir código múltiples veces?",
    opciones: [
      { texto: "Condicional", correcta: false },
      { texto: "Bucle (for, while)", correcta: true },
      { texto: "Variable", correcta: false }
    ]
  }
];

function nivel5() {
  puntuacion = 0;
  preguntaActual = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  if (preguntaActual >= preguntas.length) {
    mostrarResultadoFinal();
    return;
  }

  const pregunta = preguntas[preguntaActual];
  titulo.textContent = `Pregunta ${preguntaActual + 1}`;
  descripcion.textContent = pregunta.texto;
  opciones.innerHTML = "";

  pregunta.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.textContent = opcion.texto;
    boton.onclick = () => {
      if (opcion.correcta) puntuacion++;
      preguntaActual++;
      mostrarPregunta();
    };
    opciones.appendChild(boton);
  });
}

function mostrarResultadoFinal() {
  titulo.textContent = "Juicio Final del Núcleo";

  if (puntuacion === preguntas.length) {
    descripcion.textContent = "¡Felicidades! Has superado todas las pruebas de CRUDY. Eres un verdadero maestro lógico.";
  } else if (puntuacion >= Math.floor(preguntas.length / 2)) {
    descripcion.textContent = "Superaste varias pruebas, pero CRUDY aún no confía del todo en tu lógica.";
  } else {
    descripcion.textContent = "CRUDY te ha derrotado. Debes mejorar tu lógica.";
  }

  opciones.innerHTML = "";
  crearOpcion("🔁 Volver a empezar", nivel1);
}
