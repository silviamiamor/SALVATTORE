import type { Prestamo } from "./Prestamo";

export type EstadoMulta = "Pendiente" | "Pagada" | "Condonada";

export class Multa {
  constructor(
    public idMulta: number,
    public monto: number,
    public fechaGeneracion: Date,
    public motivo: string,
    public estado: EstadoMulta,
    public prestamo: Prestamo
  ) {}

  calcular(): number { return this.monto; }
  registrar(): void {}
}
