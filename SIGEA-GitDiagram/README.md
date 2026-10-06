# SIGEA — Modelo POO para GitDiagram

Este repositorio contiene una representación en código del modelo de dominio del
**Sistema Integral de Gestión Educativa y Administrativa (SIGEA)**, elaborada a
partir del informe académico proporcionado.

## Objetivo

La estructura está preparada para que GitDiagram encuentre una aplicación con
código fuente y pueda visualizar sus clases y relaciones.

## Estructura

```text
src/
└── models/
    ├── Alumno.ts
    ├── Matricula.ts
    ├── Curso.ts
    ├── Docente.ts
    ├── Horario.ts
    ├── Aula.ts
    ├── Asistencia.ts
    ├── PersonalAdministrativo.ts
    ├── Libro.ts
    ├── Prestamo.ts
    ├── Multa.ts
    ├── EquipoInformatico.ts
    ├── Mantenimiento.ts
    ├── Usuario.ts
    ├── Rol.ts
    ├── Notificacion.ts
    ├── Reporte.ts
    ├── PeriodoAcademico.ts
    ├── Especialidad.ts
    └── AsignacionDocenteCurso.ts
```

## Relaciones principales modeladas

- Alumno 1 — * Matrícula
- Matrícula * — 1 Curso
- Matrícula * — 1 Periodo Académico
- Curso * — 1 Periodo Académico
- Curso 1 — * Horario
- Docente * — * Curso mediante Asignación Docente-Curso
- Docente * — 1 Especialidad
- Aula 1 — * Horario
- Alumno 1 — * Asistencia
- Docente 1 — * Asistencia
- Personal Administrativo 1 — * Asistencia
- Alumno 1 — * Préstamo
- Libro 1 — * Préstamo
- Préstamo 1 — 0..1 Multa
- Equipo Informático 1 — * Mantenimiento
- Usuario * — 1 Rol
- Usuario 1 — * Notificación
- Usuario 1 — * Reporte
- Usuario 0..1 — 0..1 Alumno / Docente / Personal Administrativo

## Cómo usarlo con GitDiagram

1. Descomprime este archivo.
2. Sube el contenido a tu repositorio de GitHub.
3. Mantén la carpeta `src/models/`.
4. Abre el repositorio en GitDiagram y regenera el diagrama.

El PDF original puede conservarse en una carpeta `docs/`, pero el código de
`src/models/` es lo que permite que una herramienta de visualización de código
reconozca el modelo como una estructura de software.

## Nota

Los atributos, responsabilidades y relaciones se mantienen alineados con el
modelo de dominio del informe. No se implementa aquí una base de datos ni una
aplicación web completa; estos archivos representan la etapa de modelado POO.
