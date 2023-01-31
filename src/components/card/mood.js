/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import moods from '../../utils/moods';

const _renderItem = ({item}) => {
  return <Text style={styles.mood}>{item.emoji}</Text>;
};

export default function Mood() {
  return (
    <View style={[styles.parent, {height: 180}]}>
      <LinearGradient
        colors={['#808080', '#121212']}
        style={styles.linearGradient}>
        <Text style={styles.heading}>
          {"How's the "}
          <Text style={[styles.heading, {color: '#FFAE42'}]}>{'Mood'}</Text>
        </Text>
        <Text style={styles.heading}>{'Today'}</Text>
        <FlatList
          data={moods}
          horizontal
          renderItem={_renderItem}
          contentContainerStyle={styles.moodContainer}
        />
      </LinearGradient>
    </View>
  );
}
