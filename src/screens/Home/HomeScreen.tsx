import {Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {commonStyles} from '../../styles/commonstyles';

const HomeScreen = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {},
});
