import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { comecarBusca, iniciarBuscaCarrinho, mudarStatusCarrinho, resetarCarrinho } from './index';
import { PayloadAction } from '@reduxjs/toolkit';
import { BuscaCarrinho, StatusCarrinho, TodosOsStatus } from 'src/types/carrinho';
import { baseUrl } from 'src/config/api';

function* buscarTodos({ payload }: PayloadAction<BuscaCarrinho>) {
  const { buscarCarro, buscarHotel, buscarVoo } = payload;

  if (buscarHotel) {
    console.log('buscando hotel');
  }

  if (buscarVoo) yield fork(reservarVoo);

  if (buscarCarro) {
    console.log('buscando carro');
  }
}

function* buscar(tipo: TodosOsStatus) {
  yield put(comecarBusca(tipo));
  const resultado: Response = yield fetch(`${baseUrl}reservar`);
  const deuErro = resultado.status === 404;
  const novoStatus = deuErro ? StatusCarrinho.erro : StatusCarrinho.sucesso;
  yield put(mudarStatusCarrinho({ [tipo]: novoStatus }));
  yield delay(5000);
  yield put(resetarCarrinho());
}

function* reservarVoo() {
  yield call(buscar, TodosOsStatus.statusPassagens);
}

function* carrinhoSaga() {
  yield takeLatest(iniciarBuscaCarrinho.type, buscarTodos);
}

export default carrinhoSaga;
