import {StyleSheet} from 'react-native';
import {width, height} from '../../Dimensions';
import Colors from '../../Colors';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    marginLeft: width / 50,
    marginBottom: height / 100,
    textDecorationLine: 'underline',
    color: Colors.fontColor,
  },
  groupStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    flex: 0.6,
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
  modalStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(150, 150, 150, 0.5)',
  },
  popupStyle: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderRadius: 10,
    borderWidth: 1,
    margin: width * 0.1,
    padding: width * 0.1,
  },
  popupButtonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.02,
  },
  positiveButtonStyle: {
    justifyContent: 'center',
    backgroundColor: '#7bf',
    borderColor: '#7bf',
    borderRadius: 5,
    borderWidth: 1,
    width: width * 0.25,
    height: height * 0.07,
  },
  popupPositiveTextStyle: {
    alignSelf: 'center',
    color: '#fff',
  },
  negativeButtonStyle: {
    justifyContent: 'center',
    backgroundColor: '#f77',
    borderColor: '#f77',
    borderRadius: 5,
    borderWidth: 1,
    width: width * 0.25,
    height: height * 0.07,
  },
  popupNegativeTextStyle: {
    alignSelf: 'center',
    color: '#fff',
  },
  popupTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  popupTextContainerStyle: {
    flexDirection: 'row',
    marginTop: 5,
  },
  popupTextStyle: {
    fontSize: 16,
  },
  popupIndexStyle: {
    fontSize: 16,
  },
});

export default styles;
