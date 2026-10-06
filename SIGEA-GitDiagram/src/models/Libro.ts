import type { Prestamo } from "./Prestamo";

export type EstadoLibro = "Disponible" | "Prestado" | "En reparación" | "Dado de baja";

export class Libro {
  constructor(
    public idLibro: number,
    public ISBN: string,
    public titulo: string,
    public autor: string,
    public editorial: string,
    public categoria: string,
    public anio: number,
    public cantidad: number,
    public estado: EstadoLibro
  ) {}

  prestamos: Prestamo[] = [];

  registrar(): void {}
  consultarDisponibilidad(): boolean { return true; }
}
