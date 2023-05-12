import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from 'src/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './pages/Inicio';
import Detalhes from './pages/Detalhes';
import { Viagem } from 'src/types/viagem';
import Carrinho from './pages/Carrinho';

export type HomeStackParamList = {
  Inicio: undefined;
  Detalhes: { id: Viagem['id'] };
  Carrinho: { id: Viagem['id'] };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function Home(props: DrawerScreenProps<RootStackParamList, "Home">) {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
    </Stack.Navigator>
  )
}
