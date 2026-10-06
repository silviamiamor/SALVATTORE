import type { Alumno } from "./Alumno";
import type { Libro } from "./Libro";
import type { Multa } from "./Multa";

export type EstadoPrestamo = "Vigente" | "Devuelto" | "Vencido" | "Perdido";

export class Prestamo {
  constructor(
    public idPrestamo: number,
    public fechaPrestamo: Date,
    public fechaDevolucion: Date,
    public estado: EstadoPrestamo,
    public observacion: string,
    public alumno: Alumno,
    public libro: Libro
  ) {}

  multa?: Multa;

  registrar(): void {}
  devolver(): void {}
  verificarVencimiento(): boolean { return false; }
}
