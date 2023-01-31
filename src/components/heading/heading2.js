import React from 'react';
import {View, Text} from 'react-native';
import moods from '../../utils/moods';
import styles from './style';

export default function Heading2({currentMood}) {
  return (
    <View style={styles.row}>
      <Text style={[styles.mood, {alignSelf: 'center'}]}>
        {moods.map(ele => {
          if (ele.emoji_point === currentMood) {
            return ele.emoji;
          }
        })}
      </Text>
      <Text style={styles.label}>{'Moodalytics'}</Text>
      <Text style={styles.labelLight}>{'(Trend chart on moods)'}</Text>
    </View>
  );
}
