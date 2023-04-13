import {View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import MyText from '../MyText';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';

const EmptyComponent = ({text}: {text: string}) => {
  return (
    <View style={styles.container}>
      <MyText type="Light" style={styles.text}>
        No {text} found
      </MyText>
    </View>
  );
};

export default EmptyComponent;

const styles = ScaledSheet.create({
  text: {
    fontSize: spacing[20],
    textAlign: 'center',
    color: colors.black,
  },
  container: {
    marginVertical: spacing[20],
  },
});
