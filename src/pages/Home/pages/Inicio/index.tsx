import { Image, SafeAreaView, ScrollView, View } from 'react-native';

import banner from 'assets/home/banner.png';

import Viagem from './components/Viagem';
import Filtros from './components/Filtros';

import styles from './styles';

export default function Inicio() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={banner} style={styles.bannerImage} />
        </View>
        <View style={styles.content}>
          <Filtros />
          <Viagem />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}