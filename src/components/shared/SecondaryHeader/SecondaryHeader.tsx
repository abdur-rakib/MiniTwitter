import {Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {commonStyles} from '../../../styles/commonstyles';

const SecondaryHeader = () => {
  return (
    <View style={[commonStyles.headerContainer, styles.container]}>
      <Text>SecondaryHeader</Text>
    </View>
  );
};

export default SecondaryHeader;

const styles = ScaledSheet.create({
  container: {},
});
