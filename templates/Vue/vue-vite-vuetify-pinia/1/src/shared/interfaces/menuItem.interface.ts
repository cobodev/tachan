/** Item del menú lateral */
export interface IMenuItem {

  /** Código de item */
  code: string;

  /** Etiqueta del item */
  label: string;

  /** Descripción del item */
  description: string;

  /** Icono del item */
  icon: string;

  /** Ruta a la que redirigir */
  path: string;

  /** Índice para ordenar los menús */
  index: number;

}
