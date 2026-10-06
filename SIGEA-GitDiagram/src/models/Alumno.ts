import type { Matricula } from "./Matricula";
import type { Asistencia } from "./Asistencia";
import type { Prestamo } from "./Prestamo";

export type EstadoAlumno = "Activo" | "Inactivo" | "Egresado" | "Retirado";

export class Alumno {
  constructor(
    public idAlumno: number,
    public DNI: string,
    public nombres: string,
    public apellidos: string,
    public fechaNacimiento: Date,
    public telefono: string,
    public correo: string,
    public direccion: string,
    public estado: EstadoAlumno
  ) {}

  matriculas: Matricula[] = [];
  asistencias: Asistencia[] = [];
  prestamos: Prestamo[] = [];

  registrar(): void {}
  modificar(): void {}
  consultar(): void {}
}
