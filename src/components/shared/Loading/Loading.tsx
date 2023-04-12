import {ActivityIndicator, StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../theme/colors';

interface ILoading {
  containerStyle?: StyleProp<ViewStyle>;
}

const Loading: React.FC<ILoading> = ({containerStyle}) => {
  return (
    <View style={[styles.loading, containerStyle]}>
      <ActivityIndicator color={colors.blue} size={'large'} />
    </View>
  );
};

export default Loading;

const styles = ScaledSheet.create({
  loading: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
