import type { Usuario } from "./Usuario";

export type TipoNotificacion = "Alerta" | "Recordatorio" | "Informativo";
export type EstadoNotificacion = "Enviada" | "Pendiente" | "Leída";

export class Notificacion {
  constructor(
    public idNotificacion: number,
    public tipo: TipoNotificacion,
    public mensaje: string,
    public fecha: Date,
    public estado: EstadoNotificacion,
    public usuario: Usuario
  ) {}

  enviar(): void {}
  marcarComoLeida(): void {}
}
