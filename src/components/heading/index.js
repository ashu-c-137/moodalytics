import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import Separator from '../separator';
import styles from './style';

const width = Dimensions.get('screen').width;

export default function Heading(props) {
  const {icon, label} = props;
  return (
    <View style={[styles.row, {width: '97%', overflow: 'hidden'}]}>
      <Image source={icon} resizeMode="contain" style={styles.img} />
      <Text style={styles.label}>{label}</Text>
      <Separator />
    </View>
  );
}
