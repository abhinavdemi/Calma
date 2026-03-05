import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/tokens';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Talk it through</Text>
      <Text style={styles.subtitle}>AI companion — coming in Phase 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sand[50],
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: colors.sand[800],
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.sand[400],
    textAlign: 'center',
  },
});
