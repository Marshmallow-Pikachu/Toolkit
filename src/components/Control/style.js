import {StyleSheet} from 'react-native';
import {width, height} from '../../Dimensions';
import Colors from '../../Colors';

const styles = StyleSheet.create({
  groupStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  titleStyle: {
    fontSize: 20,
    marginLeft: width / 50,
    marginBottom: height / 100,
    textDecorationLine: 'underline',
  },
  groupContainerStyle: {
    marginHorizontal: width / 50,
  },
  tileContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondaryDark,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    height: width * 0.3,
    width: width * 0.3,
    marginRight: width / 40,
  },
  tileTextStyle: {
    textAlign: 'center',
    padding: 10,
  },
  sliderContainerStyle: {
    alignItems: 'flex-start',
    backgroundColor: Colors.secondaryDark,
    borderRadius: 10,
    height: width / 4,
    width: width * 0.95,
    marginTop: 10,
  },
  sliderTextStyle: {
    margin: width * 0.03,
  },
  sliderStyle: {
    alignSelf: 'center',
    height: width * 0.05,
    width: width * 0.9,
  },
});

export default styles;
