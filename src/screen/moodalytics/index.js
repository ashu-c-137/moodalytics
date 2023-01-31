import React, { useState } from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import Mood from '../../components/card/mood';
import TeamMood from '../../components/card/teamMood';
import User from '../../components/card/user';
import Graph from '../../components/graph';
import Heading from '../../components/heading';
import Heading2 from '../../components/heading/heading2';
import Separator from '../../components/separator';
import styles from './style';

export default function Moodalytics() {
  const [currentMood, setCurrentMood] = useState(1);
  console.log("currentMood1", currentMood);
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
        <View style={styles.parentView}>
          <User />
          <Mood />
          <Separator width={'95%'} />
          <Heading
            icon={require('../../images/speed.png')}
            label={'Team Mood'}
          />
          <TeamMood currentMood={currentMood} />
          <Heading2 currentMood={currentMood} />
          <Graph setCurrentMood={setCurrentMood} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
