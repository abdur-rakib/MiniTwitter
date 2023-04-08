import {View} from 'react-native';
import React from 'react';
import {SingleUserType} from '../../types';
import FastImage from 'react-native-fast-image';
import {AVATAR_URL} from '../../config/urls';
import {spacing} from '../../theme/spacing';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import MyText from '../shared/MyText';
import SecondaryButton from '../SecondaryButton';

const SingleUser: React.FC<{item: SingleUserType}> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainr}>
        {/* image */}
        <FastImage
          style={styles.image}
          source={{uri: `${AVATAR_URL}${item.id}.jpg`}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.infoContainer}>
          <MyText type="Bold" style={styles.name}>
            {item.username}
          </MyText>
          <MyText style={styles.username}>@{item.username}</MyText>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <SecondaryButton
          label="following"
          disabled={false}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

export default SingleUser;

const styles = ScaledSheet.create({
  container: {
    paddingVertical: spacing[8],
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {},
  leftContainr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: spacing[44],
    width: spacing[44],
    borderRadius: spacing[44],
  },
  name: {
    color: colors.black,
  },
  username: {
    color: colors.dark_light,
  },
  infoContainer: {
    marginHorizontal: spacing[8],
  },
});
