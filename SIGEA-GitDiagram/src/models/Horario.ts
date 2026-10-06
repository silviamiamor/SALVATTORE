import type { Curso } from "./Curso";
import type { Aula } from "./Aula";

export class Horario {
  constructor(
    public idHorario: number,
    public dia: string,
    public horaInicio: string,
    public horaFin: string,
    public curso: Curso,
    public aula: Aula
  ) {}

  verificarDisponibilidad(): boolean { return true; }
  detectarConflicto(): boolean { return false; }
}
