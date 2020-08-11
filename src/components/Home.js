import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/AntDesign';
import data from '../data.json';

const {width} = Dimensions.get('window');
const WIDTH = width * 0.7;
const SPACING = 12;
const FONT_SIZE = 16;

const renderItem = ({item, key}) => {
  return (
    <View style={styles.item} key={key}>
      <Image resizeMode="cover" style={styles.image} source={{uri: item.src}} />
      <View style={styles.details}>
        <View style={styles.content}>
          <Text style={styles.contentText}>{item.categoryName}</Text>
          <Text style={styles.contentText}>{item.price}</Text>
        </View>
        <View style={styles.arrow}>
          <MatIcon
            name={item.liked ? 'heart' : 'hearto'}
            size={20}
            color="#000"
          />
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <ScrollView style={styles.containter}>
      <View style={styles.header}>
        <Icon name="arrowleft" size={30} color="#000" />
        <Image
          style={styles.icon}
          source={{
            uri:
              'https://facebook.github.io/react-native/docs/assets/favicon.png',
          }}
        />
      </View>
      <Text style={styles.heading}>Shop for Day Dresses.</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        keyExtractor={item => item.key}
        snapToInterval={WIDTH}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containter: {
    padding: SPACING * 1.75,
    // backgroundColor: '#00000015',
  },
  header: {
    marginVertical: SPACING,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  heading: {
    fontSize: FONT_SIZE * 2.75,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: WIDTH * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
  },
  item: {
    flex: 1,
    width: WIDTH,
    marginRight: SPACING * 2.5,
    marginVertical: SPACING * 3,
  },
  details: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    bottom: SPACING * 3,
    paddingHorizontal: SPACING * 2,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  content: {
    flex: 0.75,
  },
  arrow: {
    width: 48,
    backgroundColor: 'white',
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    color: 'white',
    fontSize: FONT_SIZE * 1.25,
    marginVertical: SPACING * 0.25,
  },
});
