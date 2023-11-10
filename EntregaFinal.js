function iniciarCuestionario() {
    
    const Preguntas = [
        {
            question: "¿Cuál es la capital de Argentina?",
            options: ["Mendoza", "Córdoba", "Rosario", "Buenos Aires"],
            correct: 3
        },
        {
            question: "¿Quién es considerado un héroe nacional de Argentina?",
            options: ["Lionel Messi", "Eva Perón", "Che Guevara", "Juan Manuel Fangio"],
            correct: 0
        },
        {
            question: "¿Cuál de los siguientes ríos es el más largo de Argentina?",
            options: ["Rio Parana", "Rio Colorado", "Rio de la Plata", "Rio Salado"],
            correct: 0
        },
        {
            question: "¿Qué famosa montaña se encuentra en la provincia de Mendoza y es la montaña más alta de América?",
            options: ["Cerro Fitz Roy", "Aconcagua", "Cerro Torre", "Cerro Mercenario"],
            correct: 1
        },
        {
            question: "¿Qué deporte es más popular en Argentina?",
            options: ["Futbol", "Rubgy", "Hockey", "Tenis"],
            correct: 0
        },
        {
            question: "¿Quién fue la figura política argentina conocida como Evita y esposa de un presidente muy influyente?",
            options: ["Isabel Allende", "Maria Callas", "Eva Peron", "Gabriela Mistrial"],
            correct: 2
        },
        {
            question: "¿Cuál es la bebida nacional de Argentina?",
            options: ["Te", "Vino", "Cafe", "Mate"],
            correct: 3
        },
        {
            question: "¿Qué festividad argentina se celebra el 25 de mayo?",
            options: ["Dia de la Patria", "Dia de la Revolucion", "Dia de la Independencia", "Dia de la Bandera"],
            correct: 1
        },
        {
            question: "¿Cuál es la famosa cascada que se encuentra en la provincia de Misiones?",
            options: ["Catarata del Diablo", "Catarata de la Luna", "Catarata del Angel", "Catarata del Rocio"],
            correct: 0
        },
        {
            question: "¿Cuál es la comida tipica de Argentina?",
            options: ["Sushi", "Empanadas", "Asado", "Arroz con leche"],
            correct: 2
        },  
    ];

    let P = 0;
    let Puntaje = 0;
    let CuentaAtras = 60;

    function PreguntaD() {
        const PreguntaE = document.getElementById("question");
        const Opcionesl = document.getElementById("options");
        const PreguntaR = Preguntas[P];

        PreguntaE.textContent = PreguntaR.question;

        Opcionesl.innerHTML = "";

        PreguntaR.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => VerPregunta(index));
            Opcionesl.appendChild(li);
        });
    }

    function VerPregunta(OpcionElegida) {
        const RespuestaCorrecta = Preguntas[P].correct;
        if (OpcionElegida === RespuestaCorrecta) {
            Puntaje++;
        }
        P++;

        if (P < Preguntas.length) {
            PreguntaD();
        } else {
            TerminarCuestionario();
        }
    }

    function TiempoA() {
        const CuentaAtrasE = document.getElementById("CuentaAtrasR");
        CuentaAtras--;

        if (CuentaAtras <= 0) {
            TerminarCuestionario();
        } else {
            CuentaAtrasE.textContent = CuentaAtras;
        }
    }

    function TerminarCuestionario() {
        clearInterval(TiempoI);
        document.getElementById("Cuestionario-container").style.display = "none";
        document.getElementById("results").textContent = `Resultado: ${Puntaje} de ${Preguntas.length} respuestas correctas`;

        if (Puntaje === Preguntas.length) {
            setTimeout(function() {
                let boton = document.getElementById('FinalizarBtn'); 
                boton.addEventListener('click' , iniciarCuestionario);
                boton.style.display = 'block';
            }, 1000);
        }
    }

    PreguntaD();
    const TiempoI = setInterval(TiempoA, 1000);
} 

iniciarCuestionario();