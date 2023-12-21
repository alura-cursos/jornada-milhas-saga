import { take } from "redux-saga/effects";

function* escutando() {
  console.log("estou escutando!");
}

function* carrinhoSaga() {
  while (true) {
    yield take("carrinho/iniciarBuscaCarrinho");
    yield escutando();
  }
}

export default carrinhoSaga;
