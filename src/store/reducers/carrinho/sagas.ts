import { takeLatest } from "redux-saga/effects";
import { iniciarBuscaCarrinho } from './index';
import { PayloadAction } from '@reduxjs/toolkit';
import { BuscaCarrinho } from 'src/types/carrinho';

function* buscarTodos({ payload }: PayloadAction<BuscaCarrinho>) {
  const { buscarCarro, buscarHotel, buscarVoo } = payload;

  if (buscarHotel) {
    console.log('buscando hotel');
  }

  if (buscarVoo) {
    console.log('buscando passagens');
  }

  if (buscarCarro) {
    console.log('buscando carro');
  }
}

function* carrinhoSaga() {
  yield takeLatest(iniciarBuscaCarrinho.type, buscarTodos);
}

export default carrinhoSaga;
