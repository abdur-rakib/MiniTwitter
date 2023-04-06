import {Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {commonStyles} from '../../styles/commonstyles';
import {spacing} from '../../theme/spacing';

const HomeScreen = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text style={[styles.textStyle, commonStyles.regularText]}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  container: {},
  textStyle: {
    fontSize: spacing[40],
  },
});
