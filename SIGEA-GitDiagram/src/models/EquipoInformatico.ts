import type { Mantenimiento } from "./Mantenimiento";

export type EstadoEquipo =
  | "Operativo"
  | "En mantenimiento"
  | "Dado de baja"
  | "Fuera de servicio";

export class EquipoInformatico {
  constructor(
    public idEquipo: number,
    public codigo: string,
    public tipo: string,
    public marca: string,
    public modelo: string,
    public numeroSerie: string,
    public ubicacion: string,
    public estado: EstadoEquipo
  ) {}

  mantenimientos: Mantenimiento[] = [];

  registrar(): void {}
  consultarEstado(): void {}
}
