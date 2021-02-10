/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import Card from './src/components/Card';
import {getDeck, shuffleAndGetRandom} from './src/utils/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: getDeck(),
    };
  }

  draw5Cards(times) {
    const {deck} = this.state;
    const newDeck = shuffleAndGetRandom(deck, times);
    const drawnDeck = newDeck.filter((item) => item.drawn);
    this.setState({
      deck: newDeck,
      drawnDeck,
    });
  }
  render() {
    const {drawnDeck} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <FlatList
            contentContainerStyle={styles.flatList}
            numColumns={3}
            data={drawnDeck}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              if (item.drawn) {
                return <Card key={item.id} item={item} />;
              }

              return null;
            }}
          />
          <Text
            onPress={() => {
              this.draw5Cards(5);
            }}
            style={styles.buttonText}>
            Draw
          </Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 200,
    textAlign: 'center',
  },
});

export default App;
