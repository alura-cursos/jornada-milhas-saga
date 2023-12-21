import { put, takeLatest } from "redux-saga/effects";
import { comecarBusca, iniciarBuscaCarrinho } from './index';
import { PayloadAction } from '@reduxjs/toolkit';
import { BuscaCarrinho, TodosOsStatus } from 'src/types/carrinho';

function* buscarTodos({ payload }: PayloadAction<BuscaCarrinho>) {
  const { buscarCarro, buscarHotel, buscarVoo } = payload;

  if (buscarHotel) {
    console.log('buscando hotel');
  }

  if (buscarVoo) yield reservarVoo();

  if (buscarCarro) {
    console.log('buscando carro');
  }
}

function* reservarVoo() {
  yield put(comecarBusca(TodosOsStatus.statusPassagens));
}

function* carrinhoSaga() {
  yield takeLatest(iniciarBuscaCarrinho.type, buscarTodos);
}

export default carrinhoSaga;
