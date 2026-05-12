import { useState } from 'react'

import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

import CustomButton from '../components/CustomButton'

export default function CreateExperimentScreen({
  setScreen,
  setExperiments
}) {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  function handleCreateExperiment() {

    const newExperiment = {
      title,
      category,
      description
    }

    setExperiments((prevExperiments) => [
      ...prevExperiments,
      newExperiment
    ])

    setScreen('experiments')
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Criar Experimento
      </Text>

      <TextInput
        placeholder="Título"
        placeholderTextColor="#999"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Área"
        placeholderTextColor="#999"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        placeholder="Descrição"
        placeholderTextColor="#999"
        multiline
        style={styles.textarea}
        value={description}
        onChangeText={setDescription}
      />

      <CustomButton
        title="Salvar"
        onPress={handleCreateExperiment}
      />

      <CustomButton
        title="Voltar"
        onPress={() => setScreen('home')}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    paddingTop: 60
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },

  input: {
    backgroundColor: '#1E293B',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },

  textarea: {
    backgroundColor: '#1E293B',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    height: 120,
    textAlignVertical: 'top'
  }
})