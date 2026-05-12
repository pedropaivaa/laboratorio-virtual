import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

import CustomButton from '../components/CustomButton'

export default function LoginScreen({
  setScreen
}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Laboratório Virtual
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
      />

      <CustomButton
        title="Entrar"
        onPress={() => setScreen('home')}
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
    marginBottom: 30,
    textAlign: 'center'
  },

  input: {
    backgroundColor: '#1E293B',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  }
})