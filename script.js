
const semesters = [
  {
    year: "Primer Año 🐣",
    emoji: "📘",
    courses: [
      {
        semester: "Semestre I",
        emoji: "🌸",
        courses: [
          { id: "mat1", name: "Matemática para la Gestión I", credits: 5 },
          { id: "intro", name: "Introducción a la Gestión Pública", credits: 8 },
          { id: "historia", name: "Historia Instituciones Políticas Chile", credits: 5 },
          { id: "tic", name: "Tecnologías y Sistemas de Información", credits: 3 },
          { id: "juridicas", name: "Bases Jurídicas Adm. Estado", credits: 5 },
          { id: "ingles1", name: "Inglés I", credits: 3 },
          { id: "libre1", name: "Curso Libre", credits: 2 }
        ]
      },
      {
        semester: "Semestre II",
        emoji: "🌷",
        courses: [
          { id: "mat2", name: "Matemática para la Gestión II", credits: 5, prereq: ["mat1"] },
          { id: "evolucion", name: "Evolución y Complejidad AP", credits: 6, prereq: ["intro"] },
          { id: "ideas", name: "Ideas y Debates Políticos", credits: 5 },
          { id: "epistemologia", name: "Epistemología Ciencias Sociales", credits: 5 },
          { id: "normas1", name: "Marco Normativo I", credits: 5, prereq: ["juridicas"] },
          { id: "ingles2", name: "Inglés II", credits: 3, prereq: ["ingles1"] }
        ]
      }
    ]
  },
  {
    year: "Segundo Año 🐥",
    emoji: "📗",
    courses: [
      {
        semester: "Semestre III",
        emoji: "🌼",
        courses: [
          { id: "estad1", name: "Estadística para la Gestión I", credits: 5, prereq: ["mat1"] },
          { id: "dinamicas", name: "Dinámicas AP Chilena", credits: 5, prereq: ["evolucion"] },
          { id: "fenomenos", name: "Estudio Fenómenos Políticos", credits: 5, prereq: ["ideas"] },
          { id: "metodologia", name: "Metodología Investigación AP", credits: 5, prereq: ["epistemologia"] },
          { id: "normas2", name: "Marco Normativo II", credits: 5, prereq: ["normas1"] },
          { id: "ingles3", name: "Inglés III", credits: 3, prereq: ["ingles2"] }
        ]
      },
      {
        semester: "Semestre IV",
        emoji: "🌻",
        courses: [
          { id: "estad2", name: "Estadística para la Gestión II", credits: 5, prereq: ["estad1"] },
          { id: "diseno", name: "Diseño Organizacional", credits: 8, prereq: ["dinamicas"] },
          { id: "adminyfen", name: "AP y Fenómenos Políticos", credits: 5, prereq: ["fenomenos"] },
          { id: "cualitativos", name: "Métodos Cualitativos", credits: 5, prereq: ["metodologia"] },
          { id: "cfg1", name: "CFG", credits: 2 },
          { id: "ingles4", name: "Inglés IV", credits: 3, prereq: ["ingles3"] },
          { id: "comportamiento", name: "Comportamiento Humano en la Org.", credits: 4 }
        ]
      }
    ]
  },
  {
    year: "Tercer Año 🐤",
    emoji: "📙",
    courses: [
      {
        semester: "Semestre V",
        emoji: "🍁",
        courses: [
          { id: "micro", name: "Fenómenos Microeconómicos", credits: 5, prereq: ["estad2"] },
          { id: "procesos", name: "Gestión de Procesos en OP", credits: 6, prereq: ["diseno"] },
          { id: "internacional", name: "Análisis Político Internacional", credits: 4, prereq: ["fenomenos"] },
          { id: "contables", name: "Bases Contables para la GP", credits: 5 },
          { id: "cuantitativos", name: "Métodos Cuantitativos AP", credits: 5, prereq: ["cualitativos"] },
          { id: "marco_pp", name: "Marco Analítico Políticas Públicas", credits: 4 }
        ]
      },
      {
        semester: "Semestre VI",
        emoji: "🍂",
        courses: [
          { id: "macro", name: "Fenómenos Macroeconómicos", credits: 4, prereq: ["micro"] },
          { id: "planificacion", name: "Planificación Estratégica", credits: 6 },
          { id: "financiera", name: "Gestión Financiera y Presup.", credits: 5, prereq: ["contables"] },
          { id: "negociacion", name: "Negociación y Decisiones", credits: 4 },
          { id: "territorial", name: "Gestión Territorial", credits: 4 },
          { id: "formulacion", name: "Formulación Políticas Públicas", credits: 4, prereq: ["marco_pp"] },
          { id: "personas", name: "Gestión de Personas", credits: 4 }
        ]
      }
    ]
  },
  {
    year: "Cuarto Año 🕊️",
    emoji: "📕",
    courses: [
      {
        semester: "Semestre VII",
        emoji: "🍃",
        courses: [
          { id: "gubernamental", name: "Contabilidad Gubernamental", credits: 5, prereq: ["financiera"] },
          { id: "sector_publico", name: "Economía Sector Público", credits: 4, prereq: ["macro"] },
          { id: "control", name: "Control y Evaluación OP", credits: 6 },
          { id: "integrado", name: "Análisis Integrado PP", credits: 8 },
          { id: "evaluacion_pp", name: "Evaluación Políticas Públicas", credits: 4, prereq: ["formulacion"] },
          { id: "libre2", name: "Curso Libre", credits: 2 }
        ]
      },
      {
        semester: "Semestre VIII",
        emoji: "🍀",
        courses: [
          { id: "proyectos", name: "Gestión de Proyectos Sociales", credits: 4 },
          { id: "simulacion", name: "Simulación de Asesoría", credits: 7 },
          { id: "comunicacion", name: "Comunicación Estratégica", credits: 4 },
          { id: "seminario", name: "Seminario Investigación Aplicada", credits: 7 },
          { id: "auditoria", name: "Auditoría Gubernamental", credits: 5, prereq: ["gubernamental"] },
          { id: "analisis_emp", name: "Análisis Empírico Políticas Públicas", credits: 4, prereq: ["evaluacion_pp"] }
        ]
      }
    ]
  },
  {
    year: "Quinto Año 🎓",
    emoji: "📔",
    courses: [
      {
        semester: "Semestre IX",
        emoji: "🌟",
        courses: [
          { id: "eval_proy", name: "Evaluación de Proyectos Sociales", credits: 4, prereq: ["proyectos"] },
          { id: "electivo1", name: "Electivo I", credits: 5 },
          { id: "electivo2", name: "Electivo II", credits: 5 },
          { id: "electivo3", name: "Electivo III", credits: 5 },
          { id: "cfg2", name: "CFG", credits: 2 },
          { id: "electivo4", name: "Electivo IV", credits: 5 },
          { id: "etica", name: "Dirección y Ética Pública", credits: 4 }
        ]
      },
      {
        semester: "Semestre X",
        emoji: "🏁",
        courses: [
          { id: "practica", name: "Práctica Profesional", credits: 30 },
          { id: "titulo", name: "Examen de Título", credits: 0 }
        ]
      }
    ]
  }
];


const semesters = [
  {
    year: "Primer Año 🐣",
    emoji: "📘",
    courses: [
      {
        semester: "Semestre I",
        emoji: "🌸",
        courses: [
          { id: "mat1", name: "Matemática para la Gestión I", credits: 5 },
          { id: "intro", name: "Introducción a la Gestión Pública", credits: 8 },
          { id: "historia", name: "Historia Instituciones Políticas Chile", credits: 5 },
          { id: "tic", name: "Tecnologías y Sistemas de Información", credits: 3 },
          { id: "juridicas", name: "Bases Jurídicas Adm. Estado", credits: 5 },
          { id: "ingles1", name: "Inglés I", credits: 3 },
          { id: "libre1", name: "Curso Libre", credits: 2 }
        ]
      },
      {
        semester: "Semestre II",
        emoji: "🌷",
        courses: [
          { id: "mat2", name: "Matemática para la Gestión II", credits: 5, prereq: ["mat1"] },
          { id: "evolucion", name: "Evolución y Complejidad AP", credits: 6, prereq: ["intro"] },
          { id: "ideas", name: "Ideas y Debates Políticos", credits: 5 },
          { id: "epistemologia", name: "Epistemología Ciencias Sociales", credits: 5 },
          { id: "normas1", name: "Marco Normativo I", credits: 5, prereq: ["juridicas"] },
          { id: "ingles2", name: "Inglés II", credits: 3, prereq: ["ingles1"] }
        ]
      }
    ]
  }
];

let completed = JSON.parse(localStorage.getItem("completedCourses") || "[]");

function saveProgress() {
  localStorage.setItem("completedCourses", JSON.stringify(completed));
}

function toggleCourse(id) {
  if (completed.includes(id)) {
    completed = completed.filter(cid => cid !== id);
  } else {
    completed.push(id);
  }
  saveProgress();
  render();
}

function isUnlocked(course) {
  if (!course.prereq) return true;
  return course.prereq.every(pr => completed.includes(pr));
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  let totalCredits = 0;

  semesters.forEach(yearBlock => {
    const yearTitle = document.createElement("h2");
    yearTitle.textContent = `${yearBlock.year} ${yearBlock.emoji}`;
    app.appendChild(yearTitle);

    yearBlock.courses.forEach(sem => {
      const div = document.createElement("div");
      div.className = "semester";
      div.innerHTML = `<h3>${sem.semester} ${sem.emoji}</h3>`;

      sem.courses.forEach(course => {
        const isDone = completed.includes(course.id);
        const unlocked = isUnlocked(course);
        if (isDone) totalCredits += course.credits;

        const row = document.createElement("div");
        row.className = "course" + (isDone ? " completed" : "");
        row.style.opacity = unlocked ? "1" : "0.5";
        row.innerHTML = `
          <span>${course.name} (${course.credits} cr)</span>
          <input type="checkbox" ${isDone ? "checked" : ""} ${unlocked ? "" : "disabled"} onclick="toggleCourse('${course.id}')"/>
        `;
        div.appendChild(row);
      });

      app.appendChild(div);
    });
  });

  const creditCounter = document.createElement("h3");
  creditCounter.textContent = `🌟 Créditos completados: ${totalCredits}`;
  app.prepend(creditCounter);
}

window.onload = render;
