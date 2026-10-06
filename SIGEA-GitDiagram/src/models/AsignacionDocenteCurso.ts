import type { Docente } from "./Docente";
import type { Curso } from "./Curso";

export type TipoAsignacion = "Titular" | "Suplente";

export class AsignacionDocenteCurso {
  constructor(
    public idAsignacion: number,
    public fechaAsignacion: Date,
    public tipoAsignacion: TipoAsignacion,
    public docente: Docente,
    public curso: Curso
  ) {}

  registrar(): void {}
  actualizar(): void {}
}
