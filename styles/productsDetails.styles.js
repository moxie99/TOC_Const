import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperRow: {
    marginBottom: 20,
    flexDirection: 'row',
    marginHorizontal: SIZES.small,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 99,
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    marginBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 44,
    top: 20,
  },

  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10,
    top: 5,
  },

  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'PoppinsMedium',
    paddingHorizontal: SIZES.small - 8,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: SIZES.large,
  },
  price: {
    paddingHorizontal: SIZES.small,
    fontFamily: 'PoppinsSemiBold',
    fontSize: SIZES.large,
    paddingVertical: SIZES.small,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 1.5,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: 'PoppinsMedium',
    fontSize: SIZES.large - 4,
  },
  descText: {
    fontFamily: 'PoppinsRegular',
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderColor: SIZES.large,
    borderRadius: SIZES.small,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginHorizontal: SIZES.small,
    padding: SIZES.small * 0.7,
    borderRadius: SIZES.large,
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width,
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: SIZES.small,
  },
  cartText: {
    fontFamily: 'PoppinsBold',
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    marginLeft: SIZES.small,
  },

  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
