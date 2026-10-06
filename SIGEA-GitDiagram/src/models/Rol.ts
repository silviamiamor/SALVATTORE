import type { Usuario } from "./Usuario";

export class Rol {
  constructor(
    public idRol: number,
    public nombre: string,
    public descripcion: string,
    public estado: string
  ) {}

  usuarios: Usuario[] = [];

  asignarPermiso(): void {}
  revocarPermiso(): void {}
}
