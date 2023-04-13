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
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from '../../api/userApi';
import MyToast from '../shared/MyToast';

const SingleUser: React.FC<{item: SingleUserType}> = ({item}) => {
  const [followUser, {isError, isLoading, error, isSuccess, data}] =
    useFollowUserMutation();
  const [
    unfollowUser,
    {
      isError: isUnfollowError,
      isLoading: isUnfollowLoading,
      error: unfollowError,
      isSuccess: isUnfollowSuccess,
      data: unfollowData,
    },
  ] = useUnfollowUserMutation();
  const handlePress = async () => {
    if (item.following) {
      await unfollowUser({user_id: item.id});
    } else {
      await followUser({user_id: item.id});
    }
  };
  return (
    <View
      pointerEvents={isLoading || isUnfollowLoading ? 'none' : 'auto'}
      style={styles.container}>
      {/* follow user  */}
      {isError && <MyToast message={error?.error} visible={isError} />}
      {isSuccess && <MyToast message={data?.resp} visible={isSuccess} />}

      {/* unfollow user */}
      {isUnfollowError && (
        <MyToast message={unfollowError?.error} visible={isUnfollowError} />
      )}
      {isUnfollowSuccess && (
        <MyToast message={unfollowData?.resp} visible={isUnfollowSuccess} />
      )}

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
          following={item.following}
          label={item.following ? 'Following' : 'Follow'}
          disabled={isLoading || isUnfollowLoading}
          onPress={handlePress}
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
