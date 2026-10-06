import type { Rol } from "./Rol";
import type { Alumno } from "./Alumno";
import type { Docente } from "./Docente";
import type { PersonalAdministrativo } from "./PersonalAdministrativo";
import type { Notificacion } from "./Notificacion";
import type { Reporte } from "./Reporte";

export type EstadoUsuario = "Activo" | "Inactivo" | "Bloqueado";

export class Usuario {
  constructor(
    public idUsuario: number,
    public username: string,
    public contrasena: string,
    public nombre: string,
    public correo: string,
    public estado: EstadoUsuario,
    public rol: Rol
  ) {}

  alumno?: Alumno;
  docente?: Docente;
  personalAdministrativo?: PersonalAdministrativo;
  notificaciones: Notificacion[] = [];
  reportes: Reporte[] = [];

  autenticar(): boolean { return true; }
  verificarPermiso(): boolean { return true; }
}
