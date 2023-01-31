import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

export default function User() {
  return (
    <View style={styles.userCard}>
      <View style={styles.row}>
        <Image source={require('../../images/user.png')} style={styles.img} />
        <View style={styles.column}>
          <Text style={styles.heading}>{'Alok Maurya'}</Text>
          <Text style={styles.headingLight}>{'Developer'}</Text>
        </View>
      </View>
    </View>
  );
}
