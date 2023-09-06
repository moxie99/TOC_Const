import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { COLORS, SIZES } from '../../constants';
import styles from '../../styles/productList.styles';
import ProductCardView from '../home/ProductCardView';

const ProductList = () => {
  const { data, isLoading, error } = useFetch();
  if (isLoading) {
    return (
      <View syle={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    <View syle={styles.loadingContainer}>
      <Text
        style={{
          fontWeight: 'bold',
          fontFamily: 'PoppinsSemiBold',
          fontSize: SIZES.medium,
        }}
      >
        There seems to be an issue, please try again later
      </Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item._id}
        data={data}
        numColumns={2}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <ProductCardView item={item} />}
      />
    </View>
  );
};

export default ProductList;
