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

- Presentar el trabajo, la materia y el caso: Sanatorio Bernal.
- Aclarar la tesis de la presentación: los problemas no son aislados, sino síntomas de un proceso de software informal.
- Anticipar que la propuesta busca mejorar sin frenar la operación de un entorno crítico de salud.

#### Slide 2 (Integrante #1, 55 s)

**Un sanatorio mediano con alta demanda operativa**

- Ubicar al público: no es una software factory, es una organización de salud con operación continua.
- Remarcar la desproporción entre volumen operativo y capacidad del equipo de sistemas.
- Explicar que IT cumple demasiados roles a la vez: releva, desarrolla, soporta, administra terceros y despliega.

#### Slide 3 (Integrante #1, 1 min 5 s)

**El área de Sistemas trabaja en modo ad-hoc**

- Describir el modelo de desarrollo actual como informal y reactivo.
- Conectar cada práctica con un riesgo: pedidos ambiguos, código sin revisión, despliegues no repetibles y dependencia de personas puntuales.
- No presentar esto como culpa del equipo: es una consecuencia de operar saturados y sin proceso.

#### Slide 4 (Integrante #1, 1 min 10 s)

**Las fallas ya afectan pacientes y operación clínica**

- Agrupar las fallas en cuatro dimensiones: seguridad, disponibilidad, interoperabilidad y experiencia operativa.
- Enfatizar que en salud un defecto de software no es solo una molestia: puede exponer datos sensibles o interrumpir atención médica.
- Preparar la transición al iceberg: estos son síntomas visibles de causas más profundas.

#### Slide 5 (Integrante #1, 1 min 15 s)

**El iceberg: síntomas visibles, causas estructurales**

- Usar la metáfora del iceberg: arriba están los incidentes que perciben pacientes y usuarios; abajo están las causas del proceso.
- Nombrar el diagnóstico: síntomas clásicos de crisis del software, con deuda técnica y ausencia de gestión de cambios.
- Cerrar el bloque de diagnóstico con la idea central: el riesgo pasó de incomodidad a riesgo operativo y de seguridad de la información.

#### Slide 6 (Integrante #2, 1 min 15 s)

**Kaizen + PDCA: mejorar sin paralizar al sanatorio**

- Explicar por qué Kaizen es adecuado: mejora continua, bajo riesgo y menor resistencia al cambio.
- Contrastar brevemente con IDEAL y reingeniería radical: demasiado administrativos o riesgosos para un sanatorio en operación.
- Recorrer PDCA: planificar, hacer, verificar y actuar como ciclo de aprendizaje permanente.

#### Slide 7 (Integrante #2, 1 min 15 s)

**Dos frentes para atacar las causas raíz**

- Presentar los dos frentes como una respuesta directa al diagnóstico.
- Frente 1: ordenar la demanda para recuperar foco y eliminar desperdicio por interrupciones.
- Frente 2: frenar la improvisación y reemplazar el gran lanzamiento final por validaciones cortas y frecuentes.

#### Slide 8 (Integrante #2, 1 min 20 s)

**Construir calidad desde el origen**

- Explicar el concepto de calidad desde el origen: detectar problemas temprano cuesta menos que corregirlos en producción.
- Recorrer el nuevo flujo: ticket, rama, pull request, staging y producción.
- Remarcar que no es un proceso pesado: son controles mínimos para proteger sistemas críticos.

#### Slide 9 (Integrante #2, 1 min 10 s)

**Alto impacto, bajo costo de mantenimiento**

- Presentar tailoring: adaptar prácticas al contexto y capacidad real del equipo.
- Explicar que CI/CD no tiene que ser complejo: alcanza con automatizar lo repetitivo y riesgoso.
- Vincular testing, trazabilidad y configuración con los incidentes diagnosticados: regresiones, cambios sin explicación y ambientes inconsistentes.

#### Slide 10 (Integrante #3, 1 min 15 s)

**Kanban con WIP limits para recuperar el flujo**

- Explicar que ya existe Trello, pero falta usarlo como sistema de gestión y no solo como checklist.
- Definir WIP limits: límites de trabajo en progreso para reducir sobrecarga y cambio de contexto.
- Conectar con entregas iterativas: terminar y validar antes de empezar más tareas.

#### Slide 11 (Integrante #3, 1 min 20 s)

**Normas como guía, no como burocracia**

- Aclarar que no se propone certificar ISO ni llenar al equipo de documentación.
- De ISO 9001 se toma el enfoque por procesos; de 25010 se priorizan atributos de producto críticos para salud.
- Explicar la gestión del cambio: iniciar con personas predispuestas, mostrar resultados y luego convencer a la mayoría.

#### Slide 12 (Integrante #3, 1 min 15 s)

**OKR para medir impacto, no actividad**

- Explicar por qué se eligen OKR: orientan una transformación temporal y se enfocan en impacto.
- Diferenciar de métricas de actividad: no importa cuántos tickets se mueven, sino si baja el riesgo y mejora el servicio.
- Recorrer los tres resultados clave y relacionarlos con los problemas iniciales.

#### Slide 13 (Integrante #3, 1 min 10 s)

**La ingeniería no elimina la incertidumbre, la gestiona**

- Cerrar retomando el diagnóstico: no eran fallas aisladas de código, sino una cultura reactiva e informal.
- Resumir la solución: Kaizen, 5S, entregas cortas, branching, PRs, staging, testing estratégico, normas adaptadas y OKR.
- Dejar la idea final: en salud, la calidad de software protege la continuidad operativa y los datos de los pacientes.
- Agradecer y abrir preguntas.

