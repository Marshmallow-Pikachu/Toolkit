import {StyleSheet} from 'react-native';
import {width, height} from '../../Dimensions';

const styles = StyleSheet.create({
  displayStyle: {
    borderWidth: 1,
    height: height * 0.25,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  displayTextStyle: {
    fontSize: 20,
    marginHorizontal: '5%',
  },
  buttonRowStyle: {
    flexDirection: 'row',
  },
  buttonStyle: {
    height: width / 4 - 5,
    width: width / 4 - 5,
    margin: 2,
    backgroundColor: '#bbf',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    fontSize: 40,
  },
  buttonPadStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  }
});

export default styles;
