import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#222',
  },
  parentView: {
    flex: 1,
    paddingHorizontal: 14,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});
