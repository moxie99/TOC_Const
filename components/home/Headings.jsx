import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/headings.styles';
import { COLORS } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New In Town</Text>

        <TouchableOpacity onPress={() => navigation.navigate('NewArrivals')}>
          <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
