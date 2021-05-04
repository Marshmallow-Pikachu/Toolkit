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
    color: Colors.fontColor,
  },
  groupContainerStyle: {
    marginHorizontal: width / 50,
  },
  tileContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tilesInactive,
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    height: width * 0.3,
    width: width * 0.3,
    marginRight: width / 40,
  },
  tileContainerActiveStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tilesActive,
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
    color: Colors.fontColor,
    flex: 0.5,
  },
  sliderContainerStyle: {
    alignItems: 'flex-start',
    backgroundColor: Colors.tilesInactive,
    borderRadius: 10,
    height: width / 4,
    width: width * 0.95,
    marginTop: 10,
  },
  sliderTextStyle: {
    margin: width * 0.03,
    color: Colors.fontColor,
  },
  sliderStyle: {
    alignSelf: 'center',
    height: width * 0.1,
    width: width * 0.9,
  },
});

export default styles;
