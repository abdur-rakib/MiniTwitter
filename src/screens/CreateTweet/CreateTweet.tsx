import {Platform, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {commonStyles} from '../../styles/commonstyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import MyText from '../../components/shared/MyText';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {AVATAR_URL} from '../../config/urls';
import {getLoggedInUserId} from '../../utils/commonFunctions';
import MyToast from '../../components/shared/MyToast/MyToast';
import {useAddTweetMutation} from '../../api/tweetApi';
import {authSelector} from '../../redux/auth/authSlice';

interface CreateTweetProps {
  navigation: any;
}

const CreateTweet: React.FC<CreateTweetProps> = ({navigation}) => {
  // componet state
  const [tweet, setTweet] = useState<string>('');
  // redux staff
  const {token} = useSelector(authSelector);
  const [AddTweet, {isError, isLoading, error, isSuccess}] =
    useAddTweetMutation();

  // handle submit tweet
  const handleSubmitTweet = async () => {
    await AddTweet({content: tweet});
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.goBack();
    }
  }, [isSuccess, navigation]);
  return (
    <View style={styles.container}>
      {isError && <MyToast message={error?.error} visible={isError} />}
      {/* header */}
      <View style={[commonStyles.headerContainer, styles.headerContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="close"
            color={colors.dark_light}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isLoading || !tweet}
          onPress={handleSubmitTweet}
          style={[
            styles.actionContainer,
            (isLoading || !tweet) && styles.disabledStyle,
          ]}>
          <MyText type="Bold" style={styles.actionText}>
            Tweet
          </MyText>
        </TouchableOpacity>
      </View>

      {/* create tweet container */}
      <View style={styles.createContainer}>
        <View style={styles.left}>
          <FastImage
            style={styles.image}
            source={{
              uri: `${AVATAR_URL}${getLoggedInUserId(token)}.jpg`,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.right}>
          <TextInput
            placeholder="What's happening?"
            placeholderTextColor={colors.dark_light}
            cursorColor={colors.blue}
            style={[styles.inputStyle, commonStyles.regularText]}
            onChangeText={text => setTweet(text)}
            value={tweet}
            numberOfLines={4}
            autoFocus
            multiline
            returnKeyType="go"
          />
        </View>
      </View>
    </View>
  );
};

export default CreateTweet;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
  },
  headerContainer: {
    borderBottomWidth: 0,
    justifyContent: 'space-between',
  },
  actionContainer: {
    backgroundColor: colors.blue,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[12],
    borderRadius: spacing[14],
  },
  disabledStyle: {
    backgroundColor: colors.dark_light,
    paddingVertical: spacing[4],
  },
  actionText: {
    color: colors.extra_extra_light_gray,
    fontSize: spacing[12],
  },
  createContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[6],
    alignItems: 'flex-start',
  },
  left: {},
  image: {
    height: spacing[40],
    width: spacing[40],
    borderRadius: spacing[32],
  },
  right: {
    flex: 1,
    marginLeft: spacing[6],
  },
  inputStyle: {
    fontSize: spacing[15],
    color: colors.black,
    textAlign: 'justify',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    marginTop: Platform.OS == 'ios' ? spacing[6] : 0,
  },
});
