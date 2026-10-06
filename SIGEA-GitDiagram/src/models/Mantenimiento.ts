import type { EquipoInformatico } from "./EquipoInformatico";

export type TipoMantenimiento = "Preventivo" | "Correctivo";
export type EstadoMantenimiento = "Programado" | "En proceso" | "Completado";

export class Mantenimiento {
  constructor(
    public idMantenimiento: number,
    public fecha: Date,
    public tipo: TipoMantenimiento,
    public descripcion: string,
    public responsable: string,
    public estado: EstadoMantenimiento,
    public equipo: EquipoInformatico
  ) {}

  registrar(): void {}
  actualizarEstado(): void {}
}
