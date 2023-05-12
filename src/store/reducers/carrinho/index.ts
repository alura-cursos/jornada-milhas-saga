import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BuscaCarrinho, MudarCarrinhoAction, StatusCarrinho, TodosOsStatus } from 'src/types/carrinho';

export interface InitialCarrinhoState {
  buscando: boolean,
  [TodosOsStatus.statusPassagens]: StatusCarrinho,
  [TodosOsStatus.statusHotel]: StatusCarrinho,
  [TodosOsStatus.statusCarro]: StatusCarrinho
}

const initialState: InitialCarrinhoState = {
  buscando: false,
  statusPassagens: StatusCarrinho.inicial,
  statusHotel: StatusCarrinho.inicial,
  statusCarro: StatusCarrinho.inicial,
}

const carrinhoSlice = createSlice({
  initialState,
  name: "carrinho",
  reducers: {
    mudarStatusCarrinho: (state, { payload }: MudarCarrinhoAction) => {
      Object.assign(state, payload);
    },
    iniciarBuscaCarrinho: (state, { payload }: PayloadAction<BuscaCarrinho>) => {
      state.buscando = true;
    },
    cancelarBusca: (state, { payload }: PayloadAction<TodosOsStatus>) => {
      if (state[payload] === StatusCarrinho.buscando)
        state[payload] = StatusCarrinho.cancelando;
    },
    comecarBusca: (state, { payload }: PayloadAction<TodosOsStatus>) => {
      state[payload] = StatusCarrinho.buscando
    },
    resetarCarrinho: (state) => {
      Object.assign(state, initialState);
    }
  },
});


export const {
  mudarStatusCarrinho,
  iniciarBuscaCarrinho,
  cancelarBusca,
  comecarBusca,
  resetarCarrinho
} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;