import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default function HomeScreen({
  navigation
}) {

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'CreateExperiment'
          )
        }
      >

        <Text style={styles.text}>
          Criar Experimento
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'Experiments'
          )
        }
      >
        

        <Text style={styles.text}>
          Ver Experimentos
        </Text>

      </TouchableOpacity>

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

  button: {
    backgroundColor: '#2563EB',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }

})