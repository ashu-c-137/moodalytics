/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export default function Separator() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: 1,
        marginVertical: 6,
        width: '95%',
        alignSelf: 'center',
      }}
    />
  );
}
