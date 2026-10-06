import type { Curso } from "./Curso";
import type { Matricula } from "./Matricula";

export class PeriodoAcademico {
  constructor(
    public idPeriodo: number,
    public nombre: string,
    public fechaInicio: Date,
    public fechaFin: Date,
    public estado: string
  ) {}

  cursos: Curso[] = [];
  matriculas: Matricula[] = [];

  activar(): void {}
  cerrar(): void {}
}
