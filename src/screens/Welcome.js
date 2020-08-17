import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import {background} from '../../constants/images';
const backgrounds = [
  {
    title: 'Secured, forever.',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    img: background.welcome,
  },
  {
    title: 'Secured, forever.',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    img: background.encrypted,
  },
  {
    title: 'Secured, forever.',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    img: background.privacy,
  },
];

const Welcome = ({navigation}) => {
  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}>
          {backgrounds.map((item, index) => (
            <View style={styles.contentContainer} key={`img-${index}`}>
              <Image source={item.img} style={styles.img} resizeMode="center" />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Secured, forever.</Text>
        <Text style={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        {renderDots()}
        <TouchableOpacity
          onPress={() => navigation.navigate('Vpn')}
          style={styles.btn}>
          <Text style={styles.btnText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  scrollContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 15,
  },

  contentContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },

  img: {
    width: 320,
    height: 400,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  caption: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: 'gray',
    textAlign: 'center',
  },

  dotsContainer: {
    width: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },

  dots: {
    width: 6,
    height: 6,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    borderRadius: 3,
    marginRight: 10,
  },

  btn: {
    backgroundColor: '#00AAFF',
    paddingVertical: 12,
    paddingHorizontal: 53,
    borderRadius: 25,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    elevation: 4,
  },
  btnText: {color: 'white'},
});
