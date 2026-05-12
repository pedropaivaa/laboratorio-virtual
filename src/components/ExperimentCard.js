import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function ExperimentCard({
  title,
  category,
  description
}) {
  return (
    <View style={styles.card}>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.category}>
        {category}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 16,
    marginBottom: 15
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  category: {
    color: '#6366F1',
    marginTop: 5,
    marginBottom: 10
  },

  description: {
    color: '#ddd'
  }
})