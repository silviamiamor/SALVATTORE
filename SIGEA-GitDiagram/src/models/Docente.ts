import type { Curso } from "./Curso";
import type { Horario } from "./Horario";
import type { Asistencia } from "./Asistencia";
import type { Especialidad } from "./Especialidad";
import type { AsignacionDocenteCurso } from "./AsignacionDocenteCurso";

export type EstadoDocente = "Activo" | "Inactivo" | "Licencia";

export class Docente {
  constructor(
    public idDocente: number,
    public DNI: string,
    public nombres: string,
    public apellidos: string,
    public telefono: string,
    public correo: string,
    public estado: EstadoDocente,
    public especialidad: Especialidad
  ) {}

  cursos: Curso[] = [];
  horarios: Horario[] = [];
  asistencias: Asistencia[] = [];
  asignaciones: AsignacionDocenteCurso[] = [];

  registrar(): void {}
  asignarCurso(): void {}
  consultarHorario(): void {}
}
