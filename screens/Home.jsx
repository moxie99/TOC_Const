import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from '../styles/home.styles';
import { COLORS } from '../constants';
import { Carousel, Welcome } from '../components';
import Headings from '../components/home/Headings';
import Products from '../components/home/Products';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Taipei Taiwan</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartValue}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Welcome />
        <Carousel />
        <Headings />
        <Products />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
