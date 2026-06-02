import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export default function CustomButton({
  title,
  onPress
}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6366F1',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})