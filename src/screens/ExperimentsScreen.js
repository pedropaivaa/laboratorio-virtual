import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'

import CustomButton from '../components/CustomButton'
import ExperimentCard from '../components/ExperimentCard'

export default function ExperimentsScreen({
  setScreen,
  experiments
}) {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Experimentos Cadastrados
      </Text>

      {
        experiments.length === 0 ? (
          <Text style={styles.empty}>
            Nenhum experimento cadastrado.
          </Text>
        ) : (
          experiments.map((experiment, index) => (
            <ExperimentCard
              key={index}
              title={experiment.title}
              category={experiment.category}
              description={experiment.description}
            />
          ))
        )
      }

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

  empty: {
    color: '#aaa',
    fontSize: 16
  }
})