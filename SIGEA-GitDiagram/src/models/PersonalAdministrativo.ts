import type { Asistencia } from "./Asistencia";

export class PersonalAdministrativo {
  constructor(
    public idPersonal: number,
    public DNI: string,
    public nombres: string,
    public apellidos: string,
    public cargo: string,
    public telefono: string,
    public correo: string,
    public estado: string
  ) {}

  asistencias: Asistencia[] = [];

  registrar(): void {}
  consultar(): void {}
}
