import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';
import MyText from '../MyText';

interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <MyText type="Light" style={styles.title}>
      {title}
    </MyText>
  );
};

export default Title;

const styles = ScaledSheet.create({
  title: {
    fontSize: spacing[30],
    fontWeight: '300',
    color: colors.black,
  },
});
