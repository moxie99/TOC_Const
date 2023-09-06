import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS, SIZES } from '../../constants';

const slides = [
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
];

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: SIZES.small,
          width: '93%',
          marginTop: SIZES.medium,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
