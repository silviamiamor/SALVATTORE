import type { Matricula } from "./Matricula";
import type { Horario } from "./Horario";
import type { PeriodoAcademico } from "./PeriodoAcademico";
import type { AsignacionDocenteCurso } from "./AsignacionDocenteCurso";

export type EstadoCurso = "Planificado" | "En curso" | "Finalizado" | "Cancelado";

export class Curso {
  constructor(
    public idCurso: number,
    public codigo: string,
    public nombre: string,
    public nivel: string,
    public horas: number,
    public estado: EstadoCurso,
    public periodoAcademico: PeriodoAcademico
  ) {}

  matriculas: Matricula[] = [];
  horarios: Horario[] = [];
  asignacionesDocente: AsignacionDocenteCurso[] = [];

  registrar(): void {}
  modificar(): void {}
  consultar(): void {}
}
