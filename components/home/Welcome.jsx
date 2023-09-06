import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from './welcome.styles';
import { COLORS, SIZES } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.welcomeTxt(
            COLORS.black,
            SIZES.xSmall,
            SIZES.xxLarge - 6,
            'PoppinsBold'
          )}
        >
          Find The Most
        </Text>
        <Text
          style={styles.welcomeTxt(
            COLORS.primary,
            0,
            SIZES.large,
            'PoppinsLight'
          )}
        >
          Luxurious Home
        </Text>
      </View>

      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Feather name='search' size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='where are you looking at...'
            onPressIn={() => navigation.navigate('Search')}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name='camera-outline'
              size={SIZES.xLarge}
              color={COLORS.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
