import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import CustomButton from '../components/CustomButton'

export default function HomeScreen({
  setScreen
}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Menu Principal
      </Text>

      <CustomButton
        title="Criar Experimento"
        onPress={() => setScreen('create')}
      />

      <CustomButton
        title="Visualizar Experimentos"
        onPress={() => setScreen('experiments')}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0F172A'
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  }
})