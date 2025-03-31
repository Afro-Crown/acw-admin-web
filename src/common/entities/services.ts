export interface ServicesEntity {
  id?: string;
  name: string;
  preco: string;
  horas: string;
  minutos: string;
  staffs: {
    name: string;
  }[];
  descricao?: string | undefined;
  services?: string | undefined;
}
