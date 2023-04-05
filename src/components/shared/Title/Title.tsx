import {Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';

interface TITLE_PROPS {
  title: string;
}

const Title = ({title}: TITLE_PROPS) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = ScaledSheet.create({
  title: {
    fontSize: spacing[30],
    fontWeight: '300',
    color: colors.black,
  },
});
