// Single source of truth for the Software Quality presentation.
// The deck (/, /1.../N), the speaker-notes page (/notas) and Notas.md
// derive from this file so they never drift apart.

export const REPO_URL = "";
export const DOCUMENT_URL = "/document.pdf";

export type PresentationIcon =
	| "users"
	| "grid"
	| "leaf"
	| "ruler"
	| "alert"
	| "target"
	| "satellite"
	| "vector"
	| "window"
	| "scissors"
	| "layers"
	| "sprout"
	| "map"
	| "drop"
	| "gear"
	| "chart"
	| "check"
	| "building"
	| "shield"
	| "git"
	| "test"
	| "clock"
	| "cycle"
	| "ticket";

export type SlideVariant =
	| "cover"
	| "split"
	| "cards"
	| "flow"
	| "formula"
	| "environments"
	| "thanks";

export type SlideTone = "green" | "lime" | "earth" | "sky";

export interface SlideImage {
	src: string;
	alt: string;
	caption?: string;
}

export interface SlideCard {
	title: string;
	description: string;
	icon: PresentationIcon;
	tag?: string;
}

export interface EnvironmentItem {
	code: string;
	name: string;
	description: string;
	level: 1 | 2 | 3 | 4;
}

export interface SlideLink {
	label: string;
	href: string;
	external?: boolean;
}

/** High-level speaker note: who talks, for how long, and the ideas to cover. */
export interface SpeakerNote {
	/** Presenter number (1..3), see `integrantes`. */
	persona: number;
	seconds: number;
	points: string[];
}

export interface Slide {
	eyebrow: string;
	title: string;
	lead?: string;
	variant: SlideVariant;
	tone: SlideTone;
	team?: string[];
	image?: SlideImage;
	cards?: SlideCard[];
	flow?: { label: string; icon: PresentationIcon }[];
	formula?: {
		expr: string;
		legend: { sym: string; meaning: string }[];
	};
	environments?: EnvironmentItem[];
	stat?: { value: string; label: string };
	links?: SlideLink[];
	note: SpeakerNote;
}

/** Presenters — persona N in the notes maps to `integrantes[N - 1]`. */
export const integrantes: string[] = [
	"Integrante #1",
	"Integrante #2",
	"Integrante #3",
];

export const presentationSlides: Slide[] = [
	// 1 — Portada (P1)
	{
		eyebrow: "Calidad de Software · UADE",
		title: "Diagnóstico y Propuesta de Mejora para Sanatorio Bernal",
		lead: "Cómo pasar de una operación reactiva y riesgosa a un sistema de calidad gradual, medible y sostenible.",
		variant: "cover",
		tone: "green",
		team: integrantes,
		image: {
			src: "/img/calidad/sanatorio-logo.png",
			alt: "Logo de Sanatorio Bernal.",
		},
		note: {
			persona: 1,
			seconds: 35,
			points: [
				"Presentar el trabajo, la materia y el caso: Sanatorio Bernal.",
				"Aclarar la tesis de la presentación: los problemas no son aislados, sino síntomas de un proceso de software informal.",
				"Anticipar que la propuesta busca mejorar sin frenar la operación de un entorno crítico de salud.",
			],
		},
	},

	// 2 — Organización (P1)
	{
		eyebrow: "Contexto de la organización",
		title: "Un sanatorio mediano con alta demanda operativa",
		lead: "Sanatorio Bernal es una institución privada de salud en zona sur, con procesos asistenciales intensivos y un área de IT reducida.",
		variant: "cards",
		tone: "sky",
		image: {
			src: "/img/calidad/sanatorio-building.png",
			alt: "Ilustración de un edificio sanitario.",
		},
		cards: [
			{
				title: "Escala sanitaria",
				description: "~130 camas, 800-1000 consultas ambulatorias diarias y guardia 24 horas.",
				icon: "building",
			},
			{
				title: "Equipo IT pequeño",
				description: "5 personas: jefe de sistemas, 2 técnicos de infraestructura y 2 analistas funcionales.",
				icon: "users",
			},
			{
				title: "Ecosistema híbrido",
				description: "Herramientas in-house conviven con HCE, turnos y portal del paciente tercerizados.",
				icon: "layers",
			},
		],
		note: {
			persona: 1,
			seconds: 55,
			points: [
				"Ubicar al público: no es una software factory, es una organización de salud con operación continua.",
				"Remarcar la desproporción entre volumen operativo y capacidad del equipo de sistemas.",
				"Explicar que IT cumple demasiados roles a la vez: releva, desarrolla, soporta, administra terceros y despliega.",
			],
		},
	},

	// 3 — Modelo actual (P1)
	{
		eyebrow: "Modelo actual",
		title: "El área de Sistemas trabaja en modo ad-hoc",
		lead: "El ciclo de vida del software carece de prácticas formales de ingeniería, trazabilidad y validación previa.",
		variant: "cards",
		tone: "earth",
		cards: [
			{
				title: "Gestión informal",
				description: "Trello con checklists, pedidos verbales y sin métricas de flujo ni criterios de aceptación.",
				icon: "ticket",
			},
			{
				title: "Código en main",
				description: "GitHub funciona como repositorio simple, sin branching ni revisiones cruzadas.",
				icon: "git",
			},
			{
				title: "Despliegue manual",
				description: "El pase a producción depende del jefe de sistemas y de configuraciones WAMPP locales.",
				icon: "gear",
			},
			{
				title: "Terceros reactivos",
				description: "Las caídas o bugs del proveedor se gestionan recién cuando impactan en la operación.",
				icon: "alert",
			},
		],
		note: {
			persona: 1,
			seconds: 65,
			points: [
				"Describir el modelo de desarrollo actual como informal y reactivo.",
				"Conectar cada práctica con un riesgo: pedidos ambiguos, código sin revisión, despliegues no repetibles y dependencia de personas puntuales.",
				"No presentar esto como culpa del equipo: es una consecuencia de operar saturados y sin proceso.",
			],
		},
	},

	// 4 — Fallas visibles (P1)
	{
		eyebrow: "Calidad percibida y técnica",
		title: "Las fallas ya afectan pacientes y operación clínica",
		lead: "Las reseñas y situaciones reportadas muestran una brecha crítica entre lo que el sistema debería garantizar y lo que realmente entrega.",
		variant: "cards",
		tone: "green",
		cards: [
			{
				title: "Seguridad de datos",
				description: "Resultados de laboratorio visibles en perfiles incorrectos y pérdida de registros digitales.",
				icon: "shield",
				tag: "Crítico",
			},
			{
				title: "Disponibilidad",
				description: "Portal con pantallas en blanco, timeouts y fallas en recuperación de contraseña.",
				icon: "window",
			},
			{
				title: "Interoperabilidad",
				description: "Órdenes quirúrgicas perdidas, turnos mal asignados y errores de facturación.",
				icon: "vector",
			},
			{
				title: "UX operativa",
				description: "WhatsApp en bucle, triage desincronizado y problemas de compatibilidad.",
				icon: "users",
			},
		],
		note: {
			persona: 1,
			seconds: 70,
			points: [
				"Agrupar las fallas en cuatro dimensiones: seguridad, disponibilidad, interoperabilidad y experiencia operativa.",
				"Enfatizar que en salud un defecto de software no es solo una molestia: puede exponer datos sensibles o interrumpir atención médica.",
				"Preparar la transición al iceberg: estos son síntomas visibles de causas más profundas.",
			],
		},
	},

	// 5 — Iceberg (P1)
	{
		eyebrow: "Diagnóstico crítico",
		title: "El iceberg: síntomas visibles, causas estructurales",
		lead: "La crisis no está en una pantalla o un módulo puntual, sino en una cultura reactiva que desplaza la calidad al final.",
		variant: "split",
		tone: "sky",
		image: {
			src: "/img/calidad/iceberg.png",
			alt: "Ilustración de un iceberg que representa síntomas y causas ocultas.",
			caption: "Lo visible son incidentes; lo profundo es el proceso que los genera.",
		},
		cards: [
			{
				title: "Lo que se ve",
				description: "Quejas, caídas del portal, cruces de datos y turnos inconsistentes.",
				icon: "alert",
			},
			{
				title: "La raíz",
				description: "Testing tardío, despliegues manuales, sin staging, sin rollback y deuda técnica acumulada.",
				icon: "target",
			},
		],
		note: {
			persona: 1,
			seconds: 75,
			points: [
				"Usar la metáfora del iceberg: arriba están los incidentes que perciben pacientes y usuarios; abajo están las causas del proceso.",
				"Nombrar el diagnóstico: síntomas clásicos de crisis del software, con deuda técnica y ausencia de gestión de cambios.",
				"Cerrar el bloque de diagnóstico con la idea central: el riesgo pasó de incomodidad a riesgo operativo y de seguridad de la información.",
			],
		},
	},

	// 6 — Estrategia (P2)
	{
		eyebrow: "Estrategia de mejora",
		title: "Kaizen + PDCA: mejorar sin paralizar al sanatorio",
		lead: "Se descartan cambios rígidos o radicales. La mejora debe ser pequeña, continua y compatible con un equipo saturado.",
		variant: "flow",
		tone: "green",
		image: {
			src: "/img/calidad/kanban-team.png",
			alt: "Equipo trabajando frente a un tablero de tareas.",
		},
		flow: [
			{ label: "Planificar la demanda", icon: "ticket" },
			{ label: "Hacer cambios pequeños", icon: "gear" },
			{ label: "Verificar con usuarios", icon: "test" },
			{ label: "Actuar y estandarizar", icon: "check" },
		],
		note: {
			persona: 2,
			seconds: 75,
			points: [
				"Explicar por qué Kaizen es adecuado: mejora continua, bajo riesgo y menor resistencia al cambio.",
				"Contrastar brevemente con IDEAL y reingeniería radical: demasiado administrativos o riesgosos para un sanatorio en operación.",
				"Recorrer PDCA: planificar, hacer, verificar y actuar como ciclo de aprendizaje permanente.",
			],
		},
	},

	// 7 — Dos frentes (P2)
	{
		eyebrow: "Plan de acción",
		title: "Dos frentes para atacar las causas raíz",
		lead: "Primero se ordena la entrada de trabajo; después se evita que el software llegue tarde y sin validación real.",
		variant: "cards",
		tone: "earth",
		cards: [
			{
				title: "5S Digitales",
				description: "Clasificar, ordenar, limpiar, estandarizar y sostener la disciplina sobre tickets y pedidos.",
				icon: "grid",
				tag: "Frente 1",
			},
			{
				title: "Menos interrupciones",
				description: "Reducir llamados informales y cambios de contexto que rompen el flujo de los analistas.",
				icon: "clock",
			},
			{
				title: "Planificación temprana",
				description: "No codificar inmediatamente: entender el problema y definir criterios antes de implementar.",
				icon: "target",
				tag: "Frente 2",
			},
			{
				title: "Entregas cortas",
				description: "Validar incrementos funcionales con usuarios reales para evitar testing tardío.",
				icon: "cycle",
			},
		],
		note: {
			persona: 2,
			seconds: 75,
			points: [
				"Presentar los dos frentes como una respuesta directa al diagnóstico.",
				"Frente 1: ordenar la demanda para recuperar foco y eliminar desperdicio por interrupciones.",
				"Frente 2: frenar la improvisación y reemplazar el gran lanzamiento final por validaciones cortas y frecuentes.",
			],
		},
	},

	// 8 — Procesos (P2)
	{
		eyebrow: "Shift-left quality",
		title: "Construir calidad desde el origen",
		lead: "La calidad deja de inspeccionarse al final y se incorpora desde la primera decisión técnica.",
		variant: "flow",
		tone: "sky",
		flow: [
			{ label: "Ticket priorizado", icon: "ticket" },
			{ label: "Rama separada", icon: "git" },
			{ label: "Pull Request", icon: "users" },
			{ label: "Staging", icon: "window" },
			{ label: "Producción", icon: "check" },
		],
		note: {
			persona: 2,
			seconds: 80,
			points: [
				"Explicar el concepto de calidad desde el origen: detectar problemas temprano cuesta menos que corregirlos en producción.",
				"Recorrer el nuevo flujo: ticket, rama, pull request, staging y producción.",
				"Remarcar que no es un proceso pesado: son controles mínimos para proteger sistemas críticos.",
			],
		},
	},

	// 9 — Prácticas técnicas (P2)
	{
		eyebrow: "Prácticas técnicas",
		title: "Alto impacto, bajo costo de mantenimiento",
		lead: "Por tailoring, se eligen prácticas realistas para cinco personas y no una infraestructura corporativa imposible de sostener.",
		variant: "cards",
		tone: "green",
		cards: [
			{
				title: "CI/CD simplificado",
				description: "Automatizar empaquetado y despliegue a staging para reducir copia manual y error humano.",
				icon: "gear",
			},
			{
				title: "Testing estratégico",
				description: "Automatizar solo flujos críticos: login, turnos, órdenes, estudios y datos sensibles.",
				icon: "test",
			},
			{
				title: "Trazabilidad",
				description: "Cada cambio debe vincularse a un ticket para saber qué se cambió, por qué y cómo revertirlo.",
				icon: "ticket",
			},
			{
				title: "Configuration Management",
				description: "Documentar versiones, puertos, librerías y datos de entorno para evitar 'en mi máquina funciona'.",
				icon: "layers",
			},
		],
		note: {
			persona: 2,
			seconds: 70,
			points: [
				"Presentar tailoring: adaptar prácticas al contexto y capacidad real del equipo.",
				"Explicar que CI/CD no tiene que ser complejo: alcanza con automatizar lo repetitivo y riesgoso.",
				"Vincular testing, trazabilidad y configuración con los incidentes diagnosticados: regresiones, cambios sin explicación y ambientes inconsistentes.",
			],
		},
	},

	// 10 — Agilidad (P3)
	{
		eyebrow: "Enfoque ágil en calidad",
		title: "Kanban con WIP limits para recuperar el flujo",
		lead: "El tablero deja de ser una lista pasiva y se convierte en una herramienta para visualizar carga, priorizar y limitar trabajo en curso.",
		variant: "split",
		tone: "sky",
		image: {
			src: "/img/calidad/kanban-team.png",
			alt: "Equipo frente a un tablero Kanban.",
			caption: "Menos tareas simultáneas, más entrega validada.",
		},
		cards: [
			{
				title: "Visualizar el trabajo",
				description: "Separar lo pendiente, en curso, en validación y terminado para transparentar bloqueos.",
				icon: "grid",
			},
			{
				title: "Limitar WIP",
				description: "Evitar que los analistas atiendan demasiadas tareas a la vez y acumulen trabajo sin terminar.",
				icon: "clock",
			},
		],
		note: {
			persona: 3,
			seconds: 75,
			points: [
				"Explicar que ya existe Trello, pero falta usarlo como sistema de gestión y no solo como checklist.",
				"Definir WIP limits: límites de trabajo en progreso para reducir sobrecarga y cambio de contexto.",
				"Conectar con entregas iterativas: terminar y validar antes de empezar más tareas.",
			],
		},
	},

	// 11 — Modelos y adopción (P3)
	{
		eyebrow: "Modelo de calidad y cambio",
		title: "Normas como guía, no como burocracia",
		lead: "ISO 9001 e ISO/IEC 25010 se usan de forma adaptada, priorizando procesos claros y software confiable.",
		variant: "cards",
		tone: "earth",
		cards: [
			{
				title: "ISO 9001",
				description: "Enfoque basado en procesos para ordenar demanda, soporte y priorización.",
				icon: "layers",
			},
			{
				title: "ISO/IEC 25010",
				description: "Foco en funcionalidad, fiabilidad y seguridad por la criticidad de los datos médicos.",
				icon: "shield",
			},
			{
				title: "Everett Rogers",
				description: "Empezar con innovadores y adoptadores tempranos para demostrar valor antes de escalar.",
				icon: "users",
			},
			{
				title: "Curva de compromiso",
				description: "Acompañar la resistencia inicial hasta exploración, aceptación y adopción sostenida.",
				icon: "cycle",
			},
		],
		note: {
			persona: 3,
			seconds: 80,
			points: [
				"Aclarar que no se propone certificar ISO ni llenar al equipo de documentación.",
				"De ISO 9001 se toma el enfoque por procesos; de 25010 se priorizan atributos de producto críticos para salud.",
				"Explicar la gestión del cambio: iniciar con personas predispuestas, mostrar resultados y luego convencer a la mayoría.",
			],
		},
	},

	// 12 — Métricas (P3)
	{
		eyebrow: "Métricas de calidad",
		title: "OKR para medir impacto, no actividad",
		lead: "El éxito se mide por resultados operativos: menos defectos críticos, menor tiempo de ciclo y mejor cumplimiento de soporte.",
		variant: "cards",
		tone: "green",
		cards: [
			{
				title: "KR 1 — Defectos críticos",
				description: "Reducir defectos críticos en producción de 5 por mes a 0.",
				icon: "alert",
				tag: "Calidad",
			},
			{
				title: "KR 2 — Cycle Time",
				description: "Bajar desarrollos simples de 14 días a menos de 5 días.",
				icon: "clock",
				tag: "Flujo",
			},
			{
				title: "KR 3 — SLA soporte",
				description: "Subir el cumplimiento del SLA de soporte del 40% al 85% al finalizar el trimestre.",
				icon: "chart",
				tag: "Servicio",
			},
		],
		note: {
			persona: 3,
			seconds: 75,
			points: [
				"Explicar por qué se eligen OKR: orientan una transformación temporal y se enfocan en impacto.",
				"Diferenciar de métricas de actividad: no importa cuántos tickets se mueven, sino si baja el riesgo y mejora el servicio.",
				"Recorrer los tres resultados clave y relacionarlos con los problemas iniciales.",
			],
		},
	},

	// 13 — Cierre (P3)
	{
		eyebrow: "Conclusión",
		title: "La ingeniería no elimina la incertidumbre, la gestiona",
		lead: "La propuesta permite que Sanatorio Bernal deje de correr detrás de urgencias y construya software confiable para médicos, administrativos y pacientes.",
		variant: "thanks",
		tone: "green",
		image: {
			src: "/img/calidad/sanatorio-building.png",
			alt: "Ilustración de un sanatorio.",
		},
		stat: {
			value: "Kaizen + calidad desde el origen",
			label: "mejoras pequeñas, medibles y sostenibles en un entorno crítico",
		},
		links: [
			{
				label: "Ver documento fuente",
				href: DOCUMENT_URL,
			},
		],
		note: {
			persona: 3,
			seconds: 70,
			points: [
				"Cerrar retomando el diagnóstico: no eran fallas aisladas de código, sino una cultura reactiva e informal.",
				"Resumir la solución: Kaizen, 5S, entregas cortas, branching, PRs, staging, testing estratégico, normas adaptadas y OKR.",
				"Dejar la idea final: en salud, la calidad de software protege la continuidad operativa y los datos de los pacientes.",
				"Agradecer y abrir preguntas.",
			],
		},
	},
];
