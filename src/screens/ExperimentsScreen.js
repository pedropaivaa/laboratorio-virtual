import {
  useEffect,
  useState
} from 'react'

import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet
} from 'react-native'

import {
  collection,
  getDocs
} from 'firebase/firestore'

import { db } from '../services/firebase'

import CustomButton from '../components/CustomButton'

export default function ExperimentsScreen({
  setScreen,
  setSelectedExperiment
}) {

  const [experiments, setExperiments] =
    useState([])

  const [search, setSearch] =
    useState('')

  useEffect(() => {

    loadExperiments()

  }, [])

  async function loadExperiments() {

    const querySnapshot =
      await getDocs(
        collection(db, 'experiments')
      )

    const list = []

    querySnapshot.forEach((doc) => {

      list.push({
        id: doc.id,
        ...doc.data()
      })

    })

    setExperiments(list)
  }

  const filtered =
  experiments.filter((item) =>

    item.title
      ?.toLowerCase()
      .includes(search.toLowerCase())

    ||

    item.category
      ?.toLowerCase()
      .includes(search.toLowerCase())
  )

  return (

    <View style={styles.container}>

      <CustomButton
        title="Voltar"
        onPress={() =>
          setScreen('home')
        }
      />

      <TextInput
        placeholder="Pesquisar experimento"
        placeholderTextColor="#999"
        style={styles.input}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.text}>
              Categoria: {item.category}
            </Text>


            <Text style={styles.text}>
              {item.description}
            </Text>

            <Text style={styles.text}>
              Versão: {item.version}
            </Text>
            <CustomButton
  title="Ver Detalhes"
  onPress={() => {

    setSelectedExperiment(item)

    setScreen('experimentDetails')

  }}
/>

          </View>

        )}
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

  input: {
    backgroundColor: '#1E293B',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20
  },

  card: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  text: {
    color: '#fff',
    marginBottom: 5
  }

})