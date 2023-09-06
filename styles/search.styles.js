import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal: SIZES.small,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },

  searchInput: {
    fontFamily: 'PoppinsRegular',
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    borderRadius: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  searchImage: {
    resizeMode: 'contain',
    width: SIZES.width - 100,
    height: SIZES.height - 300,
    opacity: 0.3,
  },
});

export default styles;
