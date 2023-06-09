import {Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {commonStyles} from '../../styles/commonstyles';
import {spacing} from '../../theme/spacing';
import FastImage from 'react-native-fast-image';

const DummyScreen = () => {
  return (
    <View style={[commonStyles.container, styles.container]}>
      <FastImage
        source={require('../../assets/icons/twitter.png')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.text}>Working in progress!!!</Text>
    </View>
  );
};

export default DummyScreen;

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: spacing[30],
    fontWeight: '300',
  },
  image: {
    height: spacing[74],
    width: spacing[74],
  },
});
