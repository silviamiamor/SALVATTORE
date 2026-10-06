import type { Alumno } from "./Alumno";
import type { Curso } from "./Curso";
import type { PeriodoAcademico } from "./PeriodoAcademico";

export type EstadoMatricula = "Pendiente" | "Confirmada" | "Anulada";

export class Matricula {
  constructor(
    public idMatricula: number,
    public fecha: Date,
    public estado: EstadoMatricula,
    public alumno: Alumno,
    public curso: Curso,
    public periodoAcademico: PeriodoAcademico
  ) {}

  registrar(): void {}
  confirmar(): void {}
  anular(): void {}
}
