import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {clubs, hearts, spades, diamonds} from '../../assets/index';

const getImages = (type) => {
  switch (type) {
    case 'clubs':
      return clubs;
    case 'hearts':
      return hearts;
    case 'spades':
      return spades;
    case 'diamonds':
      return diamonds;
    default:
      return null;
  }
};

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.cardText}>{item.value}</Text>
        <Image style={styles.image} source={getImages(item.suit)} />
      </View>
    );
  }
}

export default Card;
