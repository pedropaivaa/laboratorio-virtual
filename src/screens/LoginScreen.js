import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import {
  doc,
  setDoc
} from 'firebase/firestore'

import {
  auth,
  db
} from '../services/firebase'

import CustomButton from '../components/CustomButton'

export default function LoginScreen({
  setScreen
}) {

  const [name, setName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  async function handleLogin() {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      setScreen('home')

    } catch (error) {

      Alert.alert(
        'Erro',
        error.message
      )

    }
  }

  async function handleRegister() {

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      await setDoc(
        doc(
          db,
          'users',
          userCredential.user.uid
        ),
        {
          name,
          email,
          createdAt: new Date()
        }
      )

      Alert.alert(
        'Conta criada'
      )

    } catch (error) {

      Alert.alert(
        'Erro',
        error.message
      )

    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Laboratório Virtual
      </Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        title="Entrar"
        onPress={handleLogin}
      />

      <CustomButton
        title="Criar Conta"
        onPress={handleRegister}
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