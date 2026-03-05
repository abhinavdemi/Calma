import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/tokens';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A quiet space,{'\n'}just for you.</Text>
      <Text style={styles.subtitle}>Coming in Phase 2</Text>
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
    fontSize: 32,
    color: colors.sand[800],
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 14,
    color: colors.sand[400],
    textAlign: 'center',
  },
});
