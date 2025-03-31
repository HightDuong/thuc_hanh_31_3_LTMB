import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // Add this import

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <Text style={styles.userName}>Rakibul Hasan</Text>
        <Text style={styles.userEmail}>rakibh@gmail.com</Text>
      </View>

      {/* Options */}
      <TouchableOpacity style={styles.option}>
        <Icon name="home" size={24} color="#000" />
        <Text style={styles.optionText}>Home</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="credit-card" size={24} color="#000" />
        <Text style={styles.optionText}>My Card</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.option}>
        <Icon name="brightness-4" size={24} color="#000" />
        <Text style={styles.optionText}>Dark Mood</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: '#E0E0E0', true: '#6200EE' }}
          thumbColor={isDarkMode ? '#fff' : '#fff'}
        />
      </View>

      <TouchableOpacity style={styles.option}>
        <Icon name="local-shipping" size={24} color="#000" />
        <Text style={styles.optionText}>Truck Your Order</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="settings" size={24} color="#000" />
        <Text style={styles.optionText}>Settings</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="help" size={24} color="#000" />
        <Text style={styles.optionText}>Help Center</Text>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Icon name="logout" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF9C4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  userInfo: { alignItems: 'center', marginVertical: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  userName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  userEmail: { fontSize: 14, color: 'gray', marginTop: 5 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: { fontSize: 16, flex: 1, marginLeft: 15 },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 25,
    marginHorizontal: 16,
    marginVertical: 20,
  },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 10 },
});