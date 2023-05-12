import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { HomeStackParamList } from '../..';
import { useGetDescricoesQuery } from 'src/store/reducers/viagem/middlewares';
import styles from './styles';
import { imagesUrl } from 'src/config/api';
import { ActivityIndicator } from 'react-native-paper';
import theme from 'src/config/theme';
import { useAppSelector } from 'src/store/hooks';
import { TipoViagem } from 'src/types/viagem';

export default function Detalhes({ navigation, route }: NativeStackScreenProps<HomeStackParamList, 'Detalhes'>) {
  const { id } = route.params;
  const { data, isFetching, isLoading } = useGetDescricoesQuery({ id });
  const { pessoas = 1, ...filtros } = useAppSelector(state => state.filtro);

  if (isFetching || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require('assets/carrinho/buscandoTour.gif')}
          style={{ width: 200, height: 200 }}
        />
        {/* <ActivityIndicator animating color={theme.colors.primary} size={80} /> */}
      </View>
    )
  }

  return (
    <ScrollView>
      <Image source={{ uri: `${imagesUrl}banner-detalhes.png` }} style={styles.imagemHeader} />
      <View style={styles.content}>
        <Text style={styles.titulo}>
          {data?.titulo}
        </Text>
        <Image
          source={{ uri: `${imagesUrl}${data?.foto}` }}
          style={styles.viagemImagem}
        />
        <View style={styles.informacoesContainer}>
          <Text style={styles.informacoesTexto}><Text style={styles.informacoesTitulo}>Data de ida: </Text> {data?.dataIda}</Text>
          <Text style={styles.informacoesTexto}><Text style={styles.informacoesTitulo}>Data de volta: </Text> {data?.dataVolta}</Text>
          <Text style={styles.informacoesTexto}><Text style={styles.informacoesTitulo}>Origem: </Text> {data?.origem}</Text>
          <Text style={styles.informacoesTexto}><Text style={styles.informacoesTitulo}>Estado de origem: </Text> {data?.estadoOrigem}</Text>
          <Text style={styles.informacoesTexto}><Text style={styles.informacoesTitulo}>Destino: </Text> {data?.destino}</Text>
        </View>
        <View style={styles.valorContainer}>
          <Text style={styles.valorTexto}>
            R$ {((data?.valor || 0) * (filtros.tipo === TipoViagem.idaEVolta ? 2 : 1) * pessoas)?.toFixed(2).replace('.', ',')}
          </Text>
          <Button mode='contained' onPress={() => navigation.navigate('Carrinho', { id })}>
            Quero reservar agora!
          </Button>
        </View>
        <View style={styles.descricaoContainer}>
          {data?.descricao.map((texto, index) => 
            <Text style={styles.descricaoTexto} key={index}>{texto}</Text>
          )}
        </View>
      </View>
    </ScrollView>
  )
}