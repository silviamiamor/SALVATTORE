import type { Horario } from "./Horario";

export type EstadoAula = "Disponible" | "Ocupada" | "En mantenimiento" | "Inhabilitada";

export class Aula {
  constructor(
    public idAula: number,
    public codigo: string,
    public nombre: string,
    public capacidad: number,
    public ubicacion: string,
    public estado: EstadoAula
  ) {}

  horarios: Horario[] = [];

  consultarDisponibilidad(): boolean { return true; }
}
