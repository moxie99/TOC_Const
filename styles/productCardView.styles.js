import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  imageContainer: {
    width: 170,
    flex: 1,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.large,
    marginBottom: 1,
  },
  supplier: {
    fontFamily: 'PoppinsRegular',
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.small,
    right: SIZES.small,
  },
});

export default styles;
