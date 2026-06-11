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

export const integrantes: string[] = [
	"Ezequiel Banchio",
	"Francisco Gonzalez",
	"Luka Cerrutti",
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
				"Abrir presentando el trabajo: es un diagnóstico y una propuesta de mejora para Sanatorio Bernal, dentro de la materia Calidad de Software.",
				"Aclarar desde el principio que no vamos a hablar solamente de fallas técnicas puntuales. La idea central es mostrar cómo esas fallas aparecen cuando el proceso de desarrollo, testing y despliegue no está maduro.",
				"Marcar el contexto de salud: en un sanatorio, la calidad del software impacta directamente en la atención, en la continuidad operativa y en la seguridad de los datos de los pacientes.",
				"Anticipar el recorrido: primero vemos la organización y el diagnóstico; después la propuesta de mejora; y al final cómo medir si esa mejora realmente funcionó.",
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
				description:
					"~130 camas, 800-1000 consultas ambulatorias diarias y guardia 24 horas.",
				icon: "building",
			},
			{
				title: "Equipo IT pequeño",
				description:
					"5 personas: jefe de sistemas, 2 técnicos de infraestructura y 2 analistas funcionales.",
				icon: "users",
			},
			{
				title: "Ecosistema híbrido",
				description:
					"Herramientas in-house conviven con HCE, turnos y portal del paciente tercerizados.",
				icon: "layers",
			},
		],
		note: {
			persona: 1,
			seconds: 55,
			points: [
				"Ubicar al público: Sanatorio Bernal es una organización privada de salud, de escala mediana, ubicada en Bernal, Quilmes. Atiende una zona de influencia amplia, con pacientes de Quilmes, Bernal, Don Bosco y alrededores.",
				"Mencionar los números porque explican la presión operativa: alrededor de 130 camas, entre 800 y 1000 consultas ambulatorias por día, internación con alta ocupación y guardia 24 horas con flujo constante.",
				"El área de Sistemas es muy chica para ese volumen: son 5 personas. Hay un jefe de sistemas, 2 técnicos de infraestructura y 2 analistas funcionales.",
				"El punto importante es que esos analistas funcionales concentran casi todo el ciclo de vida: hablan con usuarios, relevan necesidades, diseñan, desarrollan y además dan soporte operativo.",
				"Cerrar la idea: no estamos evaluando una empresa dedicada a producir software, sino un sanatorio cuya operación depende cada vez más de sistemas digitales, pero con un equipo IT reducido.",
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
				description:
					"Trello con checklists, pedidos verbales y sin métricas de flujo ni criterios de aceptación.",
				icon: "ticket",
			},
			{
				title: "Código en main",
				description:
					"GitHub funciona como repositorio simple, sin branching ni revisiones cruzadas.",
				icon: "git",
			},
			{
				title: "Despliegue manual",
				description:
					"El pase a producción depende del jefe de sistemas y de configuraciones WAMPP locales.",
				icon: "gear",
			},
			{
				title: "Terceros reactivos",
				description:
					"Las caídas o bugs del proveedor se gestionan recién cuando impactan en la operación.",
				icon: "alert",
			},
		],
		note: {
			persona: 1,
			seconds: 65,
			points: [
				"Explicar que el modelo actual es ad-hoc: no hay un proceso de ingeniería predecible, sino una forma de trabajo que se fue armando por necesidad y urgencia.",
				"En gestión de tareas usan Trello, pero más como checklist que como sistema de flujo. No hay métricas, estimaciones formales ni criterios claros de aceptación para saber cuándo un requerimiento está realmente terminado.",
				"En control de versiones usan GitHub, pero sin una estrategia formal de ramas. Los analistas trabajan directamente sobre la rama principal, lo cual aumenta el riesgo de romper funcionalidades existentes.",
				"En despliegue, el problema es todavía más crítico: trabajan sobre entornos WAMPP locales y el pase a producción depende manualmente del jefe de sistemas, copiando archivos y configurando puerto e IP.",
				"Con los proveedores externos, la gestión también es reactiva: si se cae o falla la HCE, turnos o portal del paciente, se actúa cuando el problema ya impactó.",
				"Aclarar que esto no se presenta como falta de voluntad del equipo, sino como síntoma de saturación: cuando el día a día está dominado por urgencias, el proceso queda informal.",
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
				description:
					"Resultados de laboratorio visibles en perfiles incorrectos y pérdida de registros digitales.",
				icon: "shield",
				tag: "Crítico",
			},
			{
				title: "Disponibilidad",
				description:
					"Portal con pantallas en blanco, timeouts y fallas en recuperación de contraseña.",
				icon: "window",
			},
			{
				title: "Interoperabilidad",
				description:
					"Órdenes quirúrgicas perdidas, turnos mal asignados y errores de facturación.",
				icon: "vector",
			},
			{
				title: "UX operativa",
				description:
					"WhatsApp en bucle, triage desincronizado y problemas de compatibilidad.",
				icon: "users",
			},
		],
		note: {
			persona: 1,
			seconds: 70,
			points: [
				"Presentar las fallas como zonas de tensión entre calidad técnica y calidad percibida. Lo que para el equipo puede verse como un bug, para el paciente es una pérdida de confianza en el sanatorio.",
				"Primera dimensión: seguridad e integridad de datos. Hubo casos como resultados de laboratorio visibles en el perfil de otro paciente y pérdida de registros de vacunación por problemas de backup. Esto tiene riesgo legal, reputacional y ético.",
				"Segunda dimensión: disponibilidad y rendimiento. El portal presenta pantallas en blanco, timeouts al descargar estudios pesados como tomografías y fallas en correos de recuperación de contraseña.",
				"Tercera dimensión: interoperabilidad. La HCE y los sistemas administrativos propios no siempre se comunican bien; eso deriva en órdenes quirúrgicas perdidas, turnos asignados a médicos que ya no trabajan, problemas con obras sociales y errores de facturación.",
				"Cuarta dimensión: experiencia de usuario y operación. El WhatsApp automatizado entra en bucles, no deriva a operadores humanos; el triage digital muestra tiempos irreales y hay incompatibilidades de formato, por ejemplo con visores en Mac.",
				"Cerrar diciendo que en salud estas fallas no son simples molestias: afectan atención, datos sensibles y continuidad del servicio.",
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
			caption:
				"Lo visible son incidentes; lo profundo es el proceso que los genera.",
		},
		cards: [
			{
				title: "Lo que se ve",
				description:
					"Quejas, caídas del portal, cruces de datos y turnos inconsistentes.",
				icon: "alert",
			},
			{
				title: "La raíz",
				description:
					"Testing tardío, despliegues manuales, sin staging, sin rollback y deuda técnica acumulada.",
				icon: "target",
			},
		],
		note: {
			persona: 1,
			seconds: 75,
			points: [
				"Usar la metáfora del iceberg: lo visible son quejas, caídas del portal, cruces de datos, turnos incorrectos y errores administrativos. Eso es lo que ve el usuario final.",
				"Pero debajo están las causas estructurales: relevamiento verbal, requisitos ambiguos, trabajo en silos, ausencia de revisiones por pares, testing superficial y despliegues manuales sin staging, rollback ni trazabilidad.",
				"Nombrar el diagnóstico del documento: el sanatorio muestra síntomas clásicos de crisis del software. El problema central es estructural y cultural, porque se trabaja desde la reacción y la improvisación.",
				"Explicar la deuda técnica: al no separar ambientes, no automatizar pruebas y depender de un servidor local configurado manualmente, cada cambio se vuelve riesgoso.",
				"También hay un problema externo: si no se auditan ni exigen estándares de calidad a los proveedores tercerizados, esos sistemas críticos generan cuellos de botella en la atención diaria.",
				"Cerrar fuerte: el riesgo ya superó la incomodidad del usuario. Estamos ante riesgo operativo y de seguridad de la información, con pérdida de órdenes médicas y exposición de datos privados.",
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
				"Arrancar el bloque de propuesta diciendo que, con este diagnóstico, no conviene imponer una transformación gigante de golpe. El sanatorio tiene que seguir funcionando todos los días.",
				"Explicar por qué elegimos Kaizen: propone mejoras pequeñas, constantes y sostenibles. No busca cambiar toda la organización de una vez, sino reducir desperdicios y estabilizar el trabajo paso a paso.",
				"Justificar lo que se descarta: IDEAL sería demasiado pesado para un equipo saturado porque exige fases formales, diagnóstico y planes administrativos complejos. Una reingeniería radical también sería riesgosa porque podría afectar la continuidad de atención.",
				"Conectar Kaizen con PDCA. Planificar significa ordenar la demanda y entender el problema; hacer significa aplicar cambios pequeños; verificar significa validar con usuarios reales; actuar significa estandarizar lo que funcionó y ajustar lo que no.",
				"La idea clave: en vez de intentar eliminar toda la incertidumbre, se la gestiona mediante ciclos cortos de aprendizaje.",
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
				description:
					"Clasificar, ordenar, limpiar, estandarizar y sostener la disciplina sobre tickets y pedidos.",
				icon: "grid",
				tag: "Frente 1",
			},
			{
				title: "Menos interrupciones",
				description:
					"Reducir llamados informales y cambios de contexto que rompen el flujo de los analistas.",
				icon: "clock",
			},
			{
				title: "Planificación temprana",
				description:
					"No codificar inmediatamente: entender el problema y definir criterios antes de implementar.",
				icon: "target",
				tag: "Frente 2",
			},
			{
				title: "Entregas cortas",
				description:
					"Validar incrementos funcionales con usuarios reales para evitar testing tardío.",
				icon: "cycle",
			},
		],
		note: {
			persona: 2,
			seconds: 75,
			points: [
				"Presentar los dos frentes como respuesta directa a los dos problemas operativos del documento: interrupciones constantes e improvisación con testing tardío.",
				"Frente 1: 5S Digitales. Seiri es clasificar y descartar tickets viejos, duplicados o sin validez. Seiton es ordenar por prioridad real del sanatorio. Seiso es limpiar tareas estancadas. Seiketsu es dejar reglas simples documentadas. Shitsuke es sostener la disciplina del nuevo flujo.",
				"Explicar el valor práctico: si los pedidos entran por cualquier canal y todo parece urgente, los analistas viven interrumpidos. Ordenar la demanda reduce desperdicio y permite terminar trabajo.",
				"Frente 2: planificación temprana y entregas cortas. El documento menciona un proyecto que estuvo 5 meses en desarrollo y recién al final, al usarse de verdad, aparecieron múltiples fallas operativas.",
				"La solución es no saltar directo a programar: dedicar tiempo a entender el problema, definir alcance, validar con usuarios y liberar partes funcionales pequeñas para recibir feedback temprano.",
				"Cerrar diciendo que ambos frentes se aplican gradualmente en próximos proyectos para no tocar de golpe sistemas críticos.",
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
				"Introducir Shift-Left Quality: la calidad se construye desde el origen, no se inspecciona recién al final cuando el sistema ya está en producción.",
				"Recorrer el flujo propuesto. Primero, cada trabajo debe venir de un ticket priorizado y entendible. Eso permite saber qué se pidió, por qué se pidió y qué criterio define que está terminado.",
				"Segundo, el desarrollo se hace en una rama separada. Esto evita que la rama principal se rompa por cambios incompletos o experimentales.",
				"Tercero, antes de integrar, se abre un Pull Request. Un analista programa y el otro revisa. La revisión cruzada busca detectar errores, supuestos incorrectos o impactos no considerados.",
				"Cuarto, se valida en staging, un entorno de pruebas lo más parecido posible a producción. Ahí pueden probar analistas y usuarios finales con datos representativos antes del lanzamiento.",
				"Quinto, recién después se pasa a producción. El mensaje importante es que no se agrega burocracia por agregarla: son controles mínimos para no descubrir defectos directamente por pacientes.",
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
				description:
					"Automatizar empaquetado y despliegue a staging para reducir copia manual y error humano.",
				icon: "gear",
			},
			{
				title: "Testing estratégico",
				description:
					"Automatizar solo flujos críticos: login, turnos, órdenes, estudios y datos sensibles.",
				icon: "test",
			},
			{
				title: "Trazabilidad",
				description:
					"Cada cambio debe vincularse a un ticket para saber qué se cambió, por qué y cómo revertirlo.",
				icon: "ticket",
			},
			{
				title: "Configuration Management",
				description:
					"Documentar versiones, puertos, librerías y datos de entorno para evitar 'en mi máquina funciona'.",
				icon: "layers",
			},
		],
		note: {
			persona: 2,
			seconds: 70,
			points: [
				"Presentar el concepto de tailoring: no copiamos una infraestructura corporativa enorme, sino que elegimos prácticas de alto impacto y bajo costo para un equipo de 5 personas.",
				"CI/CD simplificado: no hace falta una plataforma compleja. El objetivo mínimo es automatizar empaquetado y transferencia a staging para eliminar la copia manual de archivos y reducir dependencia del jefe de sistemas.",
				"Testing automatizado estratégico: no se automatiza el 100% porque sería inviable. Se automatizan flujos críticos del negocio, como acceso, turnos, órdenes, estudios y manejo de datos sensibles. Eso funciona como red de seguridad contra regresiones.",
				"Trazabilidad continua: cada cambio debe estar vinculado a un ticket. Así se puede saber qué se cambió, por qué se cambió y cómo revertir si algo falla.",
				"Configuration Management: documentar y unificar versiones de base de datos, librerías, puertos y configuración de entornos para evitar el clásico 'en mi máquina funciona'.",
				"Cerrar conectando con el diagnóstico: estas prácticas atacan despliegues manuales, falta de rollback, ambientes inconsistentes y errores que hoy aparecen tarde.",
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
				description:
					"Separar lo pendiente, en curso, en validación y terminado para transparentar bloqueos.",
				icon: "grid",
			},
			{
				title: "Limitar WIP",
				description:
					"Evitar que los analistas atiendan demasiadas tareas a la vez y acumulen trabajo sin terminar.",
				icon: "clock",
			},
		],
		note: {
			persona: 3,
			seconds: 75,
			points: [
				"Explicar que el enfoque ágil propuesto no implica adoptar Scrum completo ni sumar ceremonias pesadas. Se adapta Kanban porque el equipo ya tiene un tablero y necesita ordenar flujo.",
				"Hoy Trello funciona como una lista de tareas. La mejora es usarlo para visualizar estados reales: pendiente, en curso, bloqueado, en validación y terminado.",
				"Definir WIP limits: son límites de trabajo en progreso. Si hay demasiadas tareas abiertas al mismo tiempo, los analistas cambian de contexto constantemente y no terminan nada con calidad.",
				"Con WIP limits se obliga a terminar, probar y entregar antes de comenzar otro requerimiento. Esto está alineado con las 5S y con la disciplina de no acumular trabajo a medio hacer.",
				"Conectar con entregas iterativas: se liberan incrementos pequeños para que usuarios reales prueben en su trabajo diario, evitando repetir el caso del proyecto de 5 meses que falló recién al final.",
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
				description:
					"Enfoque basado en procesos para ordenar demanda, soporte y priorización.",
				icon: "layers",
			},
			{
				title: "ISO/IEC 25010",
				description:
					"Foco en funcionalidad, fiabilidad y seguridad por la criticidad de los datos médicos.",
				icon: "shield",
			},
			{
				title: "Everett Rogers",
				description:
					"Empezar con innovadores y adoptadores tempranos para demostrar valor antes de escalar.",
				icon: "users",
			},
			{
				title: "Curva de compromiso",
				description:
					"Acompañar la resistencia inicial hasta exploración, aceptación y adopción sostenida.",
				icon: "cycle",
			},
		],
		note: {
			persona: 3,
			seconds: 80,
			points: [
				"Aclarar que las normas se usan como guía, no como objetivo de certificación. Certificar ISO completa sería costoso, rígido y excesivo para un área IT tan chica.",
				"De ISO 9001 se toma el enfoque basado en procesos: ordenar cómo entra la demanda, cómo se prioriza, cómo se documenta soporte y cómo se evita que cada pedido dependa de conversaciones informales.",
				"De ISO/IEC 25010 se toma el modelo de calidad del producto. En este caso se priorizan funcionalidad, fiabilidad y seguridad, porque estamos en salud y los datos médicos no pueden exponerse ni perderse.",
				"Aclarar que la calidad percibida también importa, pero el foco inicial debe estar en calidad técnica: que el sistema funcione, esté disponible y proteja información sensible.",
				"Para gestionar el cambio, usar Everett Rogers: no imponer todo a toda la organización. Empezar con innovadores y adoptadores tempranos, tanto de IT como de áreas usuarias predispuestas.",
				"Luego, cuando haya resultados visibles como menor tiempo de respuesta o menos incidentes, se gana confianza para convencer a la mayoría y avanzar en la curva de compromiso.",
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
				description:
					"Reducir defectos críticos en producción de 5 por mes a 0.",
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
				description:
					"Subir el cumplimiento del SLA de soporte del 40% al 85% al finalizar el trimestre.",
				icon: "chart",
				tag: "Servicio",
			},
		],
		note: {
			persona: 3,
			seconds: 75,
			points: [
				"Explicar que las métricas también se adaptan al contexto. No queremos sumar carga administrativa que distraiga al equipo, sino medir si la mejora genera impacto real.",
				"Por eso se proponen OKR: un objetivo estratégico y resultados clave concretos. El objetivo es estabilizar las entregas de software y optimizar la capacidad de respuesta de IT.",
				"KR 1: reducir defectos críticos en producción de 5 por mes a 0. Este indicador ataca directamente el problema de que los pacientes descubran fallas en producción.",
				"KR 2: bajar el cycle time de desarrollos simples de 14 días a menos de 5. Esto mide si Kanban, WIP limits y entregas cortas realmente mejoran el flujo.",
				"KR 3: subir el cumplimiento del SLA de soporte del 40% al 85% al finalizar el trimestre. Esto mide si el área deja de vivir apagando incendios y empieza a responder con más previsibilidad.",
				"Diferenciar OKR de KPI: los OKR sirven para impulsar esta transformación; después, cuando el proceso esté estable, los KPI pueden usarse para monitorear la salud continua.",
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
				"Cerrar retomando la idea principal: los problemas del Sanatorio Bernal no son simplemente fallas en el código o en las computadoras. Son consecuencia de una cultura reactiva, improvisada y con procesos poco definidos.",
				"Resumir la propuesta en una frase: ordenar la demanda con 5S Digitales, mejorar paso a paso con Kaizen y PDCA, incorporar calidad desde el origen con branching, Pull Requests, staging y testing estratégico, y medir resultados con OKR.",
				"Remarcar que la propuesta es gradual porque el sanatorio no puede detener su operación. Justamente por eso se evita una transformación radical y se priorizan cambios sostenibles.",
				"Volver al principio de la materia: la ingeniería no elimina la incertidumbre, la gestiona. En este caso, la gestiona con procesos claros, validación temprana, trazabilidad y métricas.",
				"Dejar la idea final: en un entorno de salud, mejorar la calidad del software no es solo mejorar sistemas; es proteger pacientes, datos médicos, personal administrativo y continuidad de atención.",
				"Agradecer y abrir el espacio para preguntas.",
			],
		},
	},
];
