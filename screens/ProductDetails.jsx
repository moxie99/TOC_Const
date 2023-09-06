import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  Fontisto,
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants';
import styles from '../styles/productsDetails.styles';
const ProductDetails = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(1);

  const route = useRoute();
  const { item } = route.params;

  console.log('gotten =====', item);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri:
            item.item.imageUrl !== undefined || null
              ? item.item.imageUrl
              : item.imageUrl,
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            {item.item.title !== undefined || null
              ? item.item.title
              : item.title}
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>
              NGN{' '}
              {item.item.price !== undefined || null
                ? item.item.price
                : item.price}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Ionicons key={index} name='star' size={24} color='gold' />
          ))}

          <Text style={styles.ratingText}>(4.9)</Text>
        </View>

        <View style={styles.rating}>
          <TouchableOpacity onPress={() => increment()}>
            <SimpleLineIcons name='plus' size={20} />
          </TouchableOpacity>
          <Text style={styles.ratingText}>{count}</Text>
          <TouchableOpacity onPress={() => decrement()}>
            <SimpleLineIcons name='minus' size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Decription</Text>
        <Text style={styles.descText}>
          {item.item.description !== undefined || null
            ? item.item.description
            : item.description}
        </Text>
      </View>

      <View style={{ marginBottom: SIZES.small }}>
        <View style={styles.location}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name='location-outline' size={20} />
            <Text>
              {' '}
              {item.item.building_location !== undefined || null
                ? item.item.building_location
                : item.building_location}{' '}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name='design-services' size={20} color='black' />
            <Text> Free Design Services </Text>
          </View>
        </View>
      </View>
      <View style={styles.cartRow}>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartText}>BUY NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addCart}>
          <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
