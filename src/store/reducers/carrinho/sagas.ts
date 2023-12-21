import { call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { comecarBusca, iniciarBuscaCarrinho, mudarStatusCarrinho, resetarCarrinho } from './index';
import { PayloadAction } from '@reduxjs/toolkit';
import { BuscaCarrinho, StatusCarrinho, TodosOsStatus } from 'src/types/carrinho';
import { baseUrl } from 'src/config/api';
import { Task } from 'redux-saga';

function* buscarTodos({ payload }: PayloadAction<BuscaCarrinho>) {
  const { buscarCarro, buscarHotel, buscarVoo } = payload;
  const tarefas: { tipo: TodosOsStatus, tarefa: Task }[] = [];

  if (buscarHotel) {
    const tarefaHotel: Task = yield fork(reservarHotel);
    tarefas.push({ tipo: TodosOsStatus.statusHotel, tarefa: tarefaHotel });
  }

  if (buscarVoo) {
    const tarefaVoo: Task = yield fork(reservarVoo);
    tarefas.push({ tipo: TodosOsStatus.statusPassagens, tarefa: tarefaVoo });
  }

  if (buscarCarro) {
    const tarefaCarro: Task = yield fork(reservarCarro);
    tarefas.push({ tipo: TodosOsStatus.statusCarro, tarefa: tarefaCarro });
  }

  console.log('tarefas: ', tarefas);
}

function* buscar(tipo: TodosOsStatus) {
  yield put(comecarBusca(tipo));
  const resultado: Response = yield fetch(`${baseUrl}reservar`);
  const deuErro = resultado.status === 404;
  const novoStatus = deuErro ? StatusCarrinho.erro : StatusCarrinho.sucesso;
  yield put(mudarStatusCarrinho({ [tipo]: novoStatus }));

  if(deuErro) {
    yield put({ type: 'sagas/cancelarBuscas' });
  }

  yield delay(5000);
  yield put(resetarCarrinho());
}

function* reservarHotel() {
  yield call(buscar, TodosOsStatus.statusHotel);
}

function* reservarVoo() {
  yield call(buscar, TodosOsStatus.statusPassagens);
}

function* reservarCarro() {
  yield call(buscar, TodosOsStatus.statusCarro);
}

function* carrinhoSaga() {
  yield takeLatest(iniciarBuscaCarrinho.type, buscarTodos);
}

export default carrinhoSaga;
