import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, Text, View } from 'react-native';
import { useGetDescricoesQuery } from 'src/store/reducers/viagem/middlewares';
import { HomeStackParamList } from '../..';
import { Button, Checkbox, Divider, IconButton, Modal, Portal } from 'react-native-paper';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { imagesUrl } from 'src/config/api';
import theme from 'src/config/theme';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { TipoViagem } from 'src/types/viagem';
import { useState } from 'react';
import { iniciarBuscaCarrinho } from 'src/store/reducers/carrinho';
import { StatusCarrinho } from 'src/types/carrinho';

const gifSucesso = require('assets/carrinho/sucesso.gif');
const gifErro = require('assets/carrinho/erro.gif');

const gifsHotel = {
  [StatusCarrinho.buscando]: require('assets/carrinho/buscandoHotel.gif'),
  [StatusCarrinho.cancelando]: require('assets/carrinho/cancelandoHotel.gif'),
  [StatusCarrinho.erro]: gifErro,
  [StatusCarrinho.sucesso]: gifSucesso

}

const gifsCarro = {
  [StatusCarrinho.buscando]: require('assets/carrinho/buscandoCarro.gif'),
  [StatusCarrinho.cancelando]: require('assets/carrinho/cancelandoCarro.gif'),
  [StatusCarrinho.erro]: gifErro,
  [StatusCarrinho.sucesso]: gifSucesso
}

const gifsPassagens = {
  [StatusCarrinho.buscando]: require('assets/carrinho/buscandoPassagens.gif'),
  [StatusCarrinho.cancelando]: require('assets/carrinho/cancelandoPassagens.gif'),
  [StatusCarrinho.erro]: gifErro,
  [StatusCarrinho.sucesso]: gifSucesso
}

export default function Carrinho({ navigation, route }: NativeStackScreenProps<HomeStackParamList, 'Carrinho'>) {
  const [buscarVoo, setBuscarVoo] = useState(true);
  const [buscarHotel, setBuscarHotel] = useState(false);
  const [buscarCarro, setBuscarCarro] = useState(false);
  const { id } = route.params;
  const { data } = useGetDescricoesQuery({ id });
  const { pessoas = 1, ...filtros } = useAppSelector(state => state.filtro);
  const { statusCarro, statusHotel, statusPassagens } = useAppSelector(state => state.carrinho);
  const dispatch = useAppDispatch();

  if ([
    statusCarro,
    statusHotel,
    statusPassagens
  ].some(status => status !== StatusCarrinho.inicial)) {

    return (
      <Portal>
        <Modal visible>
          <View style={styles.statusModal}>
            {statusHotel !== StatusCarrinho.inicial && (
              <Image
                source={gifsHotel[statusHotel]}
                style={{ width: 200, height: 200 }}
              />
            )}
            {statusCarro !== StatusCarrinho.inicial && (
              <Image
                source={gifsCarro[statusCarro]}
                style={{ width: 200, height: 200 }}
              />
            )}

            {statusPassagens !== StatusCarrinho.inicial && (
              <Image
                source={gifsPassagens[statusPassagens]}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </Modal>
      </Portal>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: `${imagesUrl}banner-carrinho.png` }} style={styles.imagemHeader} />
      <View style={styles.content}>
        <View style={styles.voltarContainer}>
          <IconButton
            icon='arrow-left'
            onPress={navigation.goBack}
            size={25}
            iconColor={theme.colors.primary}
          />
          <Text style={styles.voltarTexto}> Voltar a Detalhes </Text>
        </View>
        <Text style={styles.titulo}> Resumo da Viagem </Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.cardTituloContainer}>
              <MaterialIcons name="airplanemode-active" size={32} color={theme.colors.grey} />
              <Text style={styles.cardTituloTexto}> Voo </Text>
            </View>
            <Text style={styles.pessoas}>
              {pessoas} adulto{Number(pessoas) > 1 ? 's' : ''}
            </Text>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Origem: </Text>
                {data?.origem}
              </Text>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Data de ida: </Text>
                {data?.dataIda}
              </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTitulo}>Bagagem: </Text>
              <Text style={styles.sessaoTexto}>1 volume de mão</Text>
              <Text style={styles.sessaoTexto}>1 mala despachada</Text>
            </View>
            <Divider bold />
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Destino: </Text>
                {data?.destino}
              </Text>
              {data?.tipo === TipoViagem.idaEVolta && (
                <Text style={styles.sessaoTexto}>
                  <Text style={styles.sessaoTitulo}>Data de volta: </Text>
                  {data?.dataVolta}
                </Text>
              )}
            </View>
            {data?.tipo === TipoViagem.idaEVolta && (
              <View style={styles.cardSessao}>
                <Text style={styles.sessaoTitulo}>Bagagem: </Text>
                <Text style={styles.sessaoTexto}>1 volume de mão</Text>
                <Text style={styles.sessaoTexto}>1 mala despachada</Text>
              </View>
            )}
            <Divider bold />
            <View>
              <Text style={styles.cardOpcoesTitulo}>Selecione uma das opções:</Text>
              <View style={styles.cardOpcoesCheckbox}>
                <Checkbox
                  status={buscarVoo ? 'checked' : 'unchecked'}
                  onPress={() => setBuscarVoo(true)}
                />
                <Text style={styles.cardOpcoesTexto}> Quero reservar passagens para {pessoas} adulto{Number(pessoas) > 1 ? 's' : ''} </Text>
              </View>
              <View style={styles.cardOpcoesCheckbox}>
                <Checkbox
                  status={buscarVoo ? 'unchecked' : 'checked'}
                  onPress={() => setBuscarVoo(false)}
                />
                <Text style={styles.cardOpcoesTexto}> Não quero reservar passagens </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTituloContainer}>
              <FontAwesome name="bed" size={32} color={theme.colors.grey} />
              <Text style={styles.cardTituloTexto}> Acomodação </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Hotel: </Text>
                {data?.hotel.nome}
              </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Endereço </Text>
                {data?.hotel.endereco}
              </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTitulo}>Café da manhã{data?.hotel.temCafe ? '' : ' não'} incluso</Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTitulo}>Quarto {data?.hotel.tipoQuarto}</Text>
            </View>
            <Divider bold />
            <View>
              <Text style={styles.cardOpcoesTitulo}>Selecione uma das opções:</Text>
              <View style={styles.cardOpcoesCheckbox}>
                <Checkbox
                  status={buscarHotel ? 'checked' : 'unchecked'}
                  onPress={() => setBuscarHotel(true)}
                />
                <Text style={styles.cardOpcoesTexto}>
                  Quero reservar hotel para {pessoas} adulto{Number(pessoas) > 1 ? 's' : ''}
                </Text>
              </View>
              <View style={styles.cardOpcoesCheckbox}>
                <Checkbox
                  status={buscarHotel ? 'unchecked' : 'checked'}
                  onPress={() => setBuscarHotel(false)}
                />
                <Text style={styles.cardOpcoesTexto}>
                  Não quero reservar hotel
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardTituloContainer}>
              <MaterialCommunityIcons name="car-key" size={32} color={theme.colors.grey} />
              <Text style={styles.cardTituloTexto}> Aluguel de carro </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Tipo do carro: </Text>
                {data?.carro.tipo}
              </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>{data?.carro.comAr ? 'Com' : 'Sem'} ar condicionado: </Text>
              </Text>
            </View>
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Tipo de câmbio: </Text>
                {data?.carro.cambio}
              </Text>
            </View>
            <Divider bold />
            <View>
              <Text style={styles.cardOpcoesTitulo}>Selecione uma das opções:</Text>
              <View style={styles.cardOpcoesCheckbox}>
                <Checkbox
                  status={buscarCarro ? 'checked' : 'unchecked'}
                  onPress={() => setBuscarCarro(true)}
                />
                <Text style={styles.cardOpcoesTexto}>
                  Quero reservar o carro.
                </Text>
              </View>
              <View style={styles.cardOpcoesCheckbox}>
                <Checkbox
                  status={buscarCarro ? 'unchecked' : 'checked'}
                  onPress={() => setBuscarCarro(false)}
                />
                <Text style={styles.cardOpcoesTexto}>
                  Não quero reservar o carro.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.card, styles.cardFinal]}>
            <Image
              source={{ uri: `${imagesUrl}${data?.foto}` }}
              style={styles.imagemViagem}
            />
            <View style={styles.cardSessao}>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Data de ida: </Text>
                {data?.dataIda}
              </Text>
              {data?.tipo === TipoViagem.idaEVolta && (
                <Text style={styles.sessaoTexto}>
                  <Text style={styles.sessaoTitulo}>Data de volta: </Text>
                  {data.dataVolta}
                </Text>
              )}
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Origem: </Text>
                {data?.origem}
              </Text>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Estado de origem: </Text>
                {data?.estadoOrigem}
              </Text>
              <Text style={styles.sessaoTexto}>
                <Text style={styles.sessaoTitulo}>Destino: </Text>
                {data?.destino}
              </Text>
              <Text style={[styles.pessoas, styles.pessoasFinal]}>
                {pessoas} adulto{Number(pessoas) > 1 ? 's' : ''}
              </Text>
              <Divider bold />
              <View style={styles.valorFinalContainer}>
                <Text style={styles.valorFinalTexto}>
                  Valor final
                </Text>
                <Text style={styles.valorFinal}>
                  R$ {((data?.valor || 0) * (filtros.tipo === TipoViagem.idaEVolta ? 2 : 1) * pessoas)?.toFixed(2).replace('.', ',')}
                </Text>
                <Button
                  mode='contained'
                  onPress={() => dispatch(iniciarBuscaCarrinho({ buscarHotel, buscarCarro, buscarVoo }))}
                >
                  Avançar para o pagamento
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}