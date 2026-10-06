import type { Alumno } from "./Alumno";
import type { Docente } from "./Docente";
import type { PersonalAdministrativo } from "./PersonalAdministrativo";

export type EstadoAsistencia = "Presente" | "Tardanza" | "Inasistencia" | "Justificado";

export class Asistencia {
  constructor(
    public idAsistencia: number,
    public fecha: Date,
    public horaEntrada: string,
    public horaSalida: string,
    public estado: EstadoAsistencia,
    public observacion: string
  ) {}

  alumno?: Alumno;
  docente?: Docente;
  personalAdministrativo?: PersonalAdministrativo;

  registrar(): void {}
  consultar(): void {}
}
