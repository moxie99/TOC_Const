import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: SIZES.small,
    justifyContent: 'space-between',
    marginBottom: SIZES.small,
    flexDirection: 'row',
    padding: SIZES.medium,
    backgroundColor: '#fff',
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: SIZES.medium,
  },
  productImg: {
    width: '100%',
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  textContent: {
    fontSize: SIZES.medium,
    fontFamily: 'PoppinsBold',
    color: COLORS.primary,
  },
  supplier: {
    fontSize: SIZES.small,
    fontFamily: 'PoppinsRegular',
    color: COLORS.red,
    marginTop: 3,
  },
  price: {
    fontSize: SIZES.small,
    fontFamily: 'PoppinsRegular',
    color: COLORS.tertiary,
    marginTop: 3,
  },
});

export default styles;
