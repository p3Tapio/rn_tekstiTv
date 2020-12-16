import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
  },
  iconButton: {
    backgroundColor: 'black', borderColor: 'gray', borderWidth: 1,
  },
  iconButtonWrap: {
    marginTop: 5, width: 50, height: 30,
  },
  textInput: {
    color: 'white',
    marginHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    height: 30,
    width: 50,
    padding: 5,
    paddingLeft: 12,
    marginTop: 5,
  },
});

export default styles;
