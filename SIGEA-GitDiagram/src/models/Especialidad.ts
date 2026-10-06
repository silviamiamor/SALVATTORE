import type { Docente } from "./Docente";

export class Especialidad {
  constructor(
    public idEspecialidad: number,
    public nombre: string,
    public area: string
  ) {}

  docentes: Docente[] = [];
}
