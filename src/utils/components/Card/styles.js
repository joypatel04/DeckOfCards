import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 180,
    borderRadius: 16,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  cardText: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 20,
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default styles;
