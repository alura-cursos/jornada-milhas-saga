import { takeLatest } from "redux-saga/effects";
import { iniciarBuscaCarrinho } from './index';

function* escutando() {
  console.log("estou escutando usando o type!");
}

function* carrinhoSaga() {
  yield takeLatest(iniciarBuscaCarrinho.type, escutando);
}

export default carrinhoSaga;
