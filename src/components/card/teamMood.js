import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Text, FlatList} from 'react-native';
import styles from './style';
import moods from '../../utils/moods';

export default function TeamMood({currentMood}) {
  console.log("currentMood",currentMood);
  return (
    <View style={styles.parent}>
      <LinearGradient
        colors={['#808080', '#121212']}
        style={styles.linearGradient}>
        <View style={styles.row}>
          <Image
            source={require('../../images/quote.png')}
            resizeMode="contain"
            style={[styles.icon, {transform: [{rotate: '180deg'}]}]}
          />
          <Text style={[styles.headingLight, {width: 200}]}>
            {moods.map(ele => {
              if (ele.emoji_point === currentMood) {
                return ele.text;
              }
            })}
          </Text>
          <Image
            source={require('../../images/quote.png')}
            resizeMode="contain"
            style={[styles.icon, {marginTop: 50}]}
          />
          <Text style={[styles.mood, {alignSelf: 'center'}]}>
            {moods.map(ele => {
              if (ele.emoji_point === currentMood) {
                return ele.emoji;
              }
            })}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
