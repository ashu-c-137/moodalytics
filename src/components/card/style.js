import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingVertical: 14,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  parent: {
    width: width - 40,
    height: 110,
    alignSelf: 'center',
    borderColor: '#FFAE42',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 14,
  },
  heading: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '600',
    marginTop: 4,
  },
  headingLight: {
    fontSize: 22,
    color: '#fff',
    marginTop: 4,
  },
  mood: {
    fontSize: 40,
    // marginRight: 10,
  },
  moodContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    width: width - 76,
  },
  userCard: {
    height: 120,
    width: width - 28,
    padding: 14,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 14,
  },
  icon: {
    height: 15,
    width: 15,
    borderRadius: 50,
    marginRight: 14,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});
