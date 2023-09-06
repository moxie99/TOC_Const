import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const { data, isLoading, error } = useFetch();
  return (
    <View style={{ marginTop: SIZES.medium }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>There seems be an error</Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          data={data}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default Products;
