import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  appBarWrapper: {
    marginHorizontal: SIZES.large,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    fontFamily: 'bold',
    fontSize: 40,
  },

  location: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: 'absolute',
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    zIndex: 99,
  },
  cartValue: {
    fontSize: 10,
    fontFamily: 'PoppinsRegular',
    fontWeight: '600',
    color: COLORS.lightWhite,
  },
  scrollView: {
    marginHorizontal: SIZES.large,
    marginBottom: SIZES.medium,
  },
});

export default styles;
