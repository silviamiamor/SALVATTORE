import type { Usuario } from "./Usuario";

export type FormatoReporte = "PDF" | "Excel" | "HTML";

export class Reporte {
  constructor(
    public idReporte: number,
    public nombre: string,
    public fecha: Date,
    public formato: FormatoReporte,
    public usuario: Usuario
  ) {}

  generar(): void {}
  consultar(): void {}
}
