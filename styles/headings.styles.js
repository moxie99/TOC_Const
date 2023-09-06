import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.xSmall,
    marginHorizontal: SIZES.sxmall,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: SIZES.xLarge,
  },
});

export default styles;
