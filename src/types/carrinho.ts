import { PayloadAction } from '@reduxjs/toolkit';
import { InitialCarrinhoState } from 'src/store/reducers/carrinho';

export type BuscaCarrinho = { buscarVoo: boolean, buscarCarro: boolean, buscarHotel: boolean };

export enum StatusCarrinho {
  inicial = 'inicial',
  buscando = 'buscando',
  sucesso = 'sucesso',
  erro = 'erro',
  cancelando = 'cancelando',
}

export type MudarCarrinhoAction = PayloadAction<Partial<InitialCarrinhoState>>;

export enum TodosOsStatus {
  statusPassagens = 'statusPassagens',
  statusHotel = 'statusHotel',
  statusCarro = 'statusCarro'
}