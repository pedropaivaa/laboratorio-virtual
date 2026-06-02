import { useEffect, useState } from 'react'

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native'

import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore'

import {
  db,
  auth
} from '../services/firebase'

import CustomButton from '../components/CustomButton'

export default function ExperimentDetailsScreen({
  setScreen,
  experiment
}) {

  const [comment, setComment] =
    useState('')

  const [comments, setComments] =
    useState([])

  useEffect(() => {

    if (experiment) {
      loadComments()
    }

  }, [])

  async function loadComments() {

    const q = query(
      collection(db, 'comments'),
      where(
        'experimentId',
        '==',
        experiment.id
      )
    )

    const snapshot =
      await getDocs(q)

    const list = []

    snapshot.forEach((doc) => {

      list.push({
        id: doc.id,
        ...doc.data()
      })

    })

    setComments(list)

  }

  async function handleComment() {

    if (!comment.trim()) return

    await addDoc(
      collection(db, 'comments'),
      {
        experimentId:
          experiment.id,

        comment,

        authorEmail:
          auth.currentUser.email,

        createdAt:
          new Date()
      }
    )

    setComment('')

    loadComments()

  }

  return (

    <ScrollView
      style={styles.container}
    >

      <Text style={styles.title}>
        Detalhes do Experimento
      </Text>

      <Text style={styles.text}>
        Título: {experiment?.title}
      </Text>

      <Text style={styles.text}>
        Categoria: {experiment?.category}
      </Text>

      <Text style={styles.text}>
        Autor: {experiment?.authorEmail}
      </Text>

      <Text style={styles.text}>
        {experiment?.description}
      </Text>

      <Text style={styles.section}>
        Comentários
      </Text>

      <TextInput
        placeholder="Digite um comentário"
        placeholderTextColor="#999"
        style={styles.input}
        value={comment}
        onChangeText={setComment}
      />

      <CustomButton
        title="Enviar Comentário"
        onPress={handleComment}
      />

      {comments.map((item) => (

        <View
          key={item.id}
          style={styles.commentCard}
        >

          <Text style={styles.text}>
            {item.authorEmail}
          </Text>

          <Text style={styles.text}>
            {item.comment}
          </Text>

        </View>

      ))}

      <CustomButton
        title="Voltar"
        onPress={() =>
          setScreen('Experiments')
        }
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  text: {
    color: '#fff',
    marginBottom: 10
  },

  section: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15
  },

  input: {
    backgroundColor: '#1E293B',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },

  commentCard: {
    backgroundColor: '#1E293B',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  }

})