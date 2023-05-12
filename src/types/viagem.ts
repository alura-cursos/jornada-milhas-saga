export enum TipoViagem {
  ida = 'ida',
  idaEVolta = 'idaEVolta'
}; 
export interface Viagem {
  titulo: string,
  valor: number,
  foto: string,
  dataIda: string,
  dataVolta?: string,
  origem: string,
  estadoOrigem: string,
  destino: string,
  tipo: TipoViagem,
  id: string
}

export type DetalhesViagem = Record<Viagem['id'], DetalheViagem>;

export type DetalheViagem = {
  descricao: string[],
  titulo: string,
  hotel: Hotel,
  carro: Carro
} & Omit<Viagem, 'id'>;

export enum TipoQuarto {
  individual = 'individual',
  duploLuxo = 'duplo luxo',
  standardDuplo = 'standard duplo',
  standardIndividual = 'standard individual',
  luxoFamilia = 'luxo família',
  standard = 'standard',
  standardTriplo = 'standard triplo',
  duploSuperluxo = 'duplo superluxo'
}

export type Hotel = {
  nome: string,
  endereco: string,
  temCafe: boolean,
  tipoQuarto: TipoQuarto
}

export enum CarroCambio {
  automatico = 'automático',
  manual = 'manual'
}

export enum TipoCarro {
  sedan = 'sedan',
  compacto = 'compacto',
  sedanPremium = 'sedan premium',
  hatch = 'hatch',
  hatchPremium = 'hatch premium'
}

export type Carro = {
  tipo: string,
  comAr: boolean,
  cambio: CarroCambio
}