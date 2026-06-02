import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native'

import {
  doc,
  updateDoc,
  addDoc,
  collection
} from 'firebase/firestore'

import { db } from '../services/firebase'

import CustomButton from '../components/CustomButton'

export default function EditExperimentScreen({
  experiment,
  setScreen
}) {

  const [title, setTitle] =
    useState(experiment?.title)

  const [category, setCategory] =
    useState(experiment?.category)

  const [description, setDescription] =
    useState(experiment?.description)

  async function handleSave() {

    try {

      await addDoc(
        collection(
          db,
          'experimentVersions'
        ),
        {
          experimentId:
            experiment.id,

          title:
            experiment.title,

          category:
            experiment.category,

          description:
            experiment.description,

          version:
            experiment.version,

          savedAt:
            new Date()
        }
      )

      await updateDoc(
        doc(
          db,
          'experiments',
          experiment.id
        ),
        {
          title,
          category,
          description,
          version:
            experiment.version + 1
        }
      )

      Alert.alert(
        'Versão atualizada'
      )

      setScreen(
        'Experiments'
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
        Editar Experimento
      </Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        style={styles.textarea}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <CustomButton
        title="Salvar Alterações"
        onPress={handleSave}
      />

      <CustomButton
        title="Voltar"
        onPress={() =>
          setScreen(
            'experimentDetails'
          )
        }
      />

    </View>

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
    fontSize: 28,
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
    height: 120,
    marginBottom: 15
  }

})