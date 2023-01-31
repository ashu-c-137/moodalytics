import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    marginBottom: 10,
  },
  img: {
    height: 50,
    width: 50,
    marginRight: 12,
  },
  label: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginRight: 16,
  },
  labelLight: {
    fontSize: 16,
    color: '#fff',
    marginRight: 16,
  },
  mood: {
    fontSize: 30,
    marginRight: 10,
  },
});
