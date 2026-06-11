# Notas del orador

Diagnóstico y Propuesta de Mejora para Sanatorio Bernal.
Notas de alto nivel: conceptos a mencionar en cada diapositiva (no es el texto exacto a leer).

Tiempo total estimado: 15 min · 13 diapositivas · 3 integrantes.

Integrantes (persona N):
1. Integrante #1 — diapositivas 1, 2, 3, 4, 5 · ~5 min
2. Integrante #2 — diapositivas 6, 7, 8, 9 · ~5 min
3. Integrante #3 — diapositivas 10, 11, 12, 13 · ~5 min

---

#### Slide 1 (Integrante #1, 35 s)

**Diagnóstico y Propuesta de Mejora para Sanatorio Bernal**

- Abrir presentando el trabajo: es un diagnóstico y una propuesta de mejora para Sanatorio Bernal, dentro de la materia Calidad de Software.
- Aclarar desde el principio que no vamos a hablar solamente de fallas técnicas puntuales. La idea central es mostrar cómo esas fallas aparecen cuando el proceso de desarrollo, testing y despliegue no está maduro.
- Marcar el contexto de salud: en un sanatorio, la calidad del software impacta directamente en la atención, en la continuidad operativa y en la seguridad de los datos de los pacientes.
- Anticipar el recorrido: primero vemos la organización y el diagnóstico; después la propuesta de mejora; y al final cómo medir si esa mejora realmente funcionó.

#### Slide 2 (Integrante #1, 55 s)

**Un sanatorio mediano con alta demanda operativa**

- Ubicar al público: Sanatorio Bernal es una organización privada de salud, de escala mediana, ubicada en Bernal, Quilmes. Atiende una zona de influencia amplia, con pacientes de Quilmes, Bernal, Don Bosco y alrededores.
- Mencionar los números porque explican la presión operativa: alrededor de 130 camas, entre 800 y 1000 consultas ambulatorias por día, internación con alta ocupación y guardia 24 horas con flujo constante.
- El área de Sistemas es muy chica para ese volumen: son 5 personas. Hay un jefe de sistemas, 2 técnicos de infraestructura y 2 analistas funcionales.
- El punto importante es que esos analistas funcionales concentran casi todo el ciclo de vida: hablan con usuarios, relevan necesidades, diseñan, desarrollan y además dan soporte operativo.
- Cerrar la idea: no estamos evaluando una empresa dedicada a producir software, sino un sanatorio cuya operación depende cada vez más de sistemas digitales, pero con un equipo IT reducido.

#### Slide 3 (Integrante #1, 1 min 5 s)

**El área de Sistemas trabaja en modo ad-hoc**

- Explicar que el modelo actual es ad-hoc: no hay un proceso de ingeniería predecible, sino una forma de trabajo que se fue armando por necesidad y urgencia.
- En gestión de tareas usan Trello, pero más como checklist que como sistema de flujo. No hay métricas, estimaciones formales ni criterios claros de aceptación para saber cuándo un requerimiento está realmente terminado.
- En control de versiones usan GitHub, pero sin una estrategia formal de ramas. Los analistas trabajan directamente sobre la rama principal, lo cual aumenta el riesgo de romper funcionalidades existentes.
- En despliegue, el problema es todavía más crítico: trabajan sobre entornos WAMPP locales y el pase a producción depende manualmente del jefe de sistemas, copiando archivos y configurando puerto e IP.
- Con los proveedores externos, la gestión también es reactiva: si se cae o falla la HCE, turnos o portal del paciente, se actúa cuando el problema ya impactó.
- Aclarar que esto no se presenta como falta de voluntad del equipo, sino como síntoma de saturación: cuando el día a día está dominado por urgencias, el proceso queda informal.

#### Slide 4 (Integrante #1, 1 min 10 s)

**Las fallas ya afectan pacientes y operación clínica**

- Presentar las fallas como zonas de tensión entre calidad técnica y calidad percibida. Lo que para el equipo puede verse como un bug, para el paciente es una pérdida de confianza en el sanatorio.
- Primera dimensión: seguridad e integridad de datos. Hubo casos como resultados de laboratorio visibles en el perfil de otro paciente y pérdida de registros de vacunación por problemas de backup. Esto tiene riesgo legal, reputacional y ético.
- Segunda dimensión: disponibilidad y rendimiento. El portal presenta pantallas en blanco, timeouts al descargar estudios pesados como tomografías y fallas en correos de recuperación de contraseña.
- Tercera dimensión: interoperabilidad. La HCE y los sistemas administrativos propios no siempre se comunican bien; eso deriva en órdenes quirúrgicas perdidas, turnos asignados a médicos que ya no trabajan, problemas con obras sociales y errores de facturación.
- Cuarta dimensión: experiencia de usuario y operación. El WhatsApp automatizado entra en bucles, no deriva a operadores humanos; el triage digital muestra tiempos irreales y hay incompatibilidades de formato, por ejemplo con visores en Mac.
- Cerrar diciendo que en salud estas fallas no son simples molestias: afectan atención, datos sensibles y continuidad del servicio.

#### Slide 5 (Integrante #1, 1 min 15 s)

**El iceberg: síntomas visibles, causas estructurales**

- Usar la metáfora del iceberg: lo visible son quejas, caídas del portal, cruces de datos, turnos incorrectos y errores administrativos. Eso es lo que ve el usuario final.
- Pero debajo están las causas estructurales: relevamiento verbal, requisitos ambiguos, trabajo en silos, ausencia de revisiones por pares, testing superficial y despliegues manuales sin staging, rollback ni trazabilidad.
- Nombrar el diagnóstico del documento: el sanatorio muestra síntomas clásicos de crisis del software. El problema central es estructural y cultural, porque se trabaja desde la reacción y la improvisación.
- Explicar la deuda técnica: al no separar ambientes, no automatizar pruebas y depender de un servidor local configurado manualmente, cada cambio se vuelve riesgoso.
- También hay un problema externo: si no se auditan ni exigen estándares de calidad a los proveedores tercerizados, esos sistemas críticos generan cuellos de botella en la atención diaria.
- Cerrar fuerte: el riesgo ya superó la incomodidad del usuario. Estamos ante riesgo operativo y de seguridad de la información, con pérdida de órdenes médicas y exposición de datos privados.

#### Slide 6 (Integrante #2, 1 min 15 s)

**Kaizen + PDCA: mejorar sin paralizar al sanatorio**

- Arrancar el bloque de propuesta diciendo que, con este diagnóstico, no conviene imponer una transformación gigante de golpe. El sanatorio tiene que seguir funcionando todos los días.
- Explicar por qué elegimos Kaizen: propone mejoras pequeñas, constantes y sostenibles. No busca cambiar toda la organización de una vez, sino reducir desperdicios y estabilizar el trabajo paso a paso.
- Justificar lo que se descarta: IDEAL sería demasiado pesado para un equipo saturado porque exige fases formales, diagnóstico y planes administrativos complejos. Una reingeniería radical también sería riesgosa porque podría afectar la continuidad de atención.
- Conectar Kaizen con PDCA. Planificar significa ordenar la demanda y entender el problema; hacer significa aplicar cambios pequeños; verificar significa validar con usuarios reales; actuar significa estandarizar lo que funcionó y ajustar lo que no.
- La idea clave: en vez de intentar eliminar toda la incertidumbre, se la gestiona mediante ciclos cortos de aprendizaje.

#### Slide 7 (Integrante #2, 1 min 15 s)

**Dos frentes para atacar las causas raíz**

- Presentar los dos frentes como respuesta directa a los dos problemas operativos del documento: interrupciones constantes e improvisación con testing tardío.
- Frente 1: 5S Digitales. Seiri es clasificar y descartar tickets viejos, duplicados o sin validez. Seiton es ordenar por prioridad real del sanatorio. Seiso es limpiar tareas estancadas. Seiketsu es dejar reglas simples documentadas. Shitsuke es sostener la disciplina del nuevo flujo.
- Explicar el valor práctico: si los pedidos entran por cualquier canal y todo parece urgente, los analistas viven interrumpidos. Ordenar la demanda reduce desperdicio y permite terminar trabajo.
- Frente 2: planificación temprana y entregas cortas. El documento menciona un proyecto que estuvo 5 meses en desarrollo y recién al final, al usarse de verdad, aparecieron múltiples fallas operativas.
- La solución es no saltar directo a programar: dedicar tiempo a entender el problema, definir alcance, validar con usuarios y liberar partes funcionales pequeñas para recibir feedback temprano.
- Cerrar diciendo que ambos frentes se aplican gradualmente en próximos proyectos para no tocar de golpe sistemas críticos.

#### Slide 8 (Integrante #2, 1 min 20 s)

**Construir calidad desde el origen**

- Introducir Shift-Left Quality: la calidad se construye desde el origen, no se inspecciona recién al final cuando el sistema ya está en producción.
- Recorrer el flujo propuesto. Primero, cada trabajo debe venir de un ticket priorizado y entendible. Eso permite saber qué se pidió, por qué se pidió y qué criterio define que está terminado.
- Segundo, el desarrollo se hace en una rama separada. Esto evita que la rama principal se rompa por cambios incompletos o experimentales.
- Tercero, antes de integrar, se abre un Pull Request. Un analista programa y el otro revisa. La revisión cruzada busca detectar errores, supuestos incorrectos o impactos no considerados.
- Cuarto, se valida en staging, un entorno de pruebas lo más parecido posible a producción. Ahí pueden probar analistas y usuarios finales con datos representativos antes del lanzamiento.
- Quinto, recién después se pasa a producción. El mensaje importante es que no se agrega burocracia por agregarla: son controles mínimos para no descubrir defectos directamente por pacientes.

#### Slide 9 (Integrante #2, 1 min 10 s)

**Alto impacto, bajo costo de mantenimiento**

- Presentar el concepto de tailoring: no copiamos una infraestructura corporativa enorme, sino que elegimos prácticas de alto impacto y bajo costo para un equipo de 5 personas.
- CI/CD simplificado: no hace falta una plataforma compleja. El objetivo mínimo es automatizar empaquetado y transferencia a staging para eliminar la copia manual de archivos y reducir dependencia del jefe de sistemas.
- Testing automatizado estratégico: no se automatiza el 100% porque sería inviable. Se automatizan flujos críticos del negocio, como acceso, turnos, órdenes, estudios y manejo de datos sensibles. Eso funciona como red de seguridad contra regresiones.
- Trazabilidad continua: cada cambio debe estar vinculado a un ticket. Así se puede saber qué se cambió, por qué se cambió y cómo revertir si algo falla.
- Configuration Management: documentar y unificar versiones de base de datos, librerías, puertos y configuración de entornos para evitar el clásico 'en mi máquina funciona'.
- Cerrar conectando con el diagnóstico: estas prácticas atacan despliegues manuales, falta de rollback, ambientes inconsistentes y errores que hoy aparecen tarde.

#### Slide 10 (Integrante #3, 1 min 15 s)

**Kanban con WIP limits para recuperar el flujo**

- Explicar que el enfoque ágil propuesto no implica adoptar Scrum completo ni sumar ceremonias pesadas. Se adapta Kanban porque el equipo ya tiene un tablero y necesita ordenar flujo.
- Hoy Trello funciona como una lista de tareas. La mejora es usarlo para visualizar estados reales: pendiente, en curso, bloqueado, en validación y terminado.
- Definir WIP limits: son límites de trabajo en progreso. Si hay demasiadas tareas abiertas al mismo tiempo, los analistas cambian de contexto constantemente y no terminan nada con calidad.
- Con WIP limits se obliga a terminar, probar y entregar antes de comenzar otro requerimiento. Esto está alineado con las 5S y con la disciplina de no acumular trabajo a medio hacer.
- Conectar con entregas iterativas: se liberan incrementos pequeños para que usuarios reales prueben en su trabajo diario, evitando repetir el caso del proyecto de 5 meses que falló recién al final.

#### Slide 11 (Integrante #3, 1 min 20 s)

**Normas como guía, no como burocracia**

- Aclarar que las normas se usan como guía, no como objetivo de certificación. Certificar ISO completa sería costoso, rígido y excesivo para un área IT tan chica.
- De ISO 9001 se toma el enfoque basado en procesos: ordenar cómo entra la demanda, cómo se prioriza, cómo se documenta soporte y cómo se evita que cada pedido dependa de conversaciones informales.
- De ISO/IEC 25010 se toma el modelo de calidad del producto. En este caso se priorizan funcionalidad, fiabilidad y seguridad, porque estamos en salud y los datos médicos no pueden exponerse ni perderse.
- Aclarar que la calidad percibida también importa, pero el foco inicial debe estar en calidad técnica: que el sistema funcione, esté disponible y proteja información sensible.
- Para gestionar el cambio, usar Everett Rogers: no imponer todo a toda la organización. Empezar con innovadores y adoptadores tempranos, tanto de IT como de áreas usuarias predispuestas.
- Luego, cuando haya resultados visibles como menor tiempo de respuesta o menos incidentes, se gana confianza para convencer a la mayoría y avanzar en la curva de compromiso.

#### Slide 12 (Integrante #3, 1 min 15 s)

**OKR para medir impacto, no actividad**

- Explicar que las métricas también se adaptan al contexto. No queremos sumar carga administrativa que distraiga al equipo, sino medir si la mejora genera impacto real.
- Por eso se proponen OKR: un objetivo estratégico y resultados clave concretos. El objetivo es estabilizar las entregas de software y optimizar la capacidad de respuesta de IT.
- KR 1: reducir defectos críticos en producción de 5 por mes a 0. Este indicador ataca directamente el problema de que los pacientes descubran fallas en producción.
- KR 2: bajar el cycle time de desarrollos simples de 14 días a menos de 5. Esto mide si Kanban, WIP limits y entregas cortas realmente mejoran el flujo.
- KR 3: subir el cumplimiento del SLA de soporte del 40% al 85% al finalizar el trimestre. Esto mide si el área deja de vivir apagando incendios y empieza a responder con más previsibilidad.
- Diferenciar OKR de KPI: los OKR sirven para impulsar esta transformación; después, cuando el proceso esté estable, los KPI pueden usarse para monitorear la salud continua.

#### Slide 13 (Integrante #3, 1 min 10 s)

**La ingeniería no elimina la incertidumbre, la gestiona**

- Cerrar retomando la idea principal: los problemas del Sanatorio Bernal no son simplemente fallas en el código o en las computadoras. Son consecuencia de una cultura reactiva, improvisada y con procesos poco definidos.
- Resumir la propuesta en una frase: ordenar la demanda con 5S Digitales, mejorar paso a paso con Kaizen y PDCA, incorporar calidad desde el origen con branching, Pull Requests, staging y testing estratégico, y medir resultados con OKR.
- Remarcar que la propuesta es gradual porque el sanatorio no puede detener su operación. Justamente por eso se evita una transformación radical y se priorizan cambios sostenibles.
- Volver al principio de la materia: la ingeniería no elimina la incertidumbre, la gestiona. En este caso, la gestiona con procesos claros, validación temprana, trazabilidad y métricas.
- Dejar la idea final: en un entorno de salud, mejorar la calidad del software no es solo mejorar sistemas; es proteger pacientes, datos médicos, personal administrativo y continuidad de atención.
- Agradecer y abrir el espacio para preguntas.

