import { Tabs } from 'expo-router';
import { colors } from '../../constants/tokens';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.sand[100],
          borderTopColor: colors.sand[200],
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: colors.sage[500],
        tabBarInactiveTintColor: colors.sand[400],
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'DMSans_400Regular',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => null, // Icons to be added in Phase 2
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="breathe"
        options={{
          title: 'Breathe',
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
