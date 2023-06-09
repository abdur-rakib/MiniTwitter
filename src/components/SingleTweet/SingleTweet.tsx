import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TweetType} from '../../types';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {spacing} from '../../theme/spacing';
import MyText from '../shared/MyText';
import {colors} from '../../theme/colors';
import {capitalizeFirstCharacter} from '../../utils/commonFunctions';
import dayjs from 'dayjs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import {AVATAR_URL} from '../../config/urls';

interface PropType {
  item: TweetType;
}

const SingleTweet: React.FC<PropType> = ({item}) => {
  const [avatarUri, setAvatarUri] = useState<string>(
    `${AVATAR_URL}${item.id}.jpg`,
  );
  return (
    <TouchableOpacity style={styles.container}>
      {/* image block */}
      <View style={styles.imageBlock}>
        <FastImage
          style={styles.userImage}
          source={{uri: avatarUri}}
          onError={() =>
            setAvatarUri('https://randomuser.me/api/portraits/men/1.jpg')
          }
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      {/* information block */}
      <View style={styles.infoBlock}>
        {/* heading */}
        <View style={styles.heading}>
          <MyText type="Bold" style={styles.name}>
            {capitalizeFirstCharacter(item.user.username)}
          </MyText>
          <MyText style={styles.userName}>@{item.user.username}</MyText>
          <MyText style={styles.dot}>•</MyText>
          <MyText style={styles.tweetTime}>
            {dayjs(new Date(item.published)).toNow(true)}
          </MyText>
        </View>
        {/* content */}
        <View style={styles.content}>
          <MyText style={styles.contentText}>{item.content}</MyText>
        </View>

        {/* bottom action box */}
        <View style={styles.actionBox}>
          {/* message */}
          <TouchableOpacity style={styles.singleAction}>
            <Feather
              name="message-circle"
              color={colors.dark_gray}
              size={moderateScale(13)}
            />
            <MyText style={styles.actionText}>23</MyText>
          </TouchableOpacity>
          {/* retweet */}
          <TouchableOpacity style={styles.singleAction}>
            <AntDesign
              name="retweet"
              color={colors.dark_gray}
              size={moderateScale(13)}
            />
            <MyText style={styles.actionText}>23</MyText>
          </TouchableOpacity>
          {/* heart */}
          <TouchableOpacity style={styles.singleAction}>
            <Feather
              name="heart"
              color={colors.dark_gray}
              size={moderateScale(13)}
            />
            <MyText style={styles.actionText}>209</MyText>
          </TouchableOpacity>
          {/* chart */}
          <TouchableOpacity style={styles.singleAction}>
            <AntDesign
              name="barschart"
              color={colors.dark_gray}
              size={moderateScale(13)}
            />
            <MyText style={styles.actionText}>16</MyText>
          </TouchableOpacity>
          {/* Share */}
          <TouchableOpacity style={styles.singleAction}>
            <Feather
              name="share-2"
              color={colors.dark_gray}
              size={moderateScale(13)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleTweet;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.8,
    borderBottomColor: colors.extra_light_gray,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[8],
  },
  imageBlock: {
    flex: 0.15,
  },
  userImage: {
    height: spacing[40],
    width: spacing[40],
    borderRadius: spacing[40],
  },
  infoBlock: {
    flex: 0.84,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: spacing[12],
    marginRight: spacing[4],
    color: colors.black,
  },
  userName: {
    fontSize: spacing[12],
    marginRight: spacing[4],
    color: colors.dark_light,
  },
  dot: {
    fontSize: spacing[12],
    marginRight: spacing[4],
    color: colors.dark_light,
  },
  tweetTime: {
    fontSize: spacing[12],
    marginRight: spacing[4],
    color: colors.dark_light,
  },
  content: {
    marginBottom: spacing[6],
  },
  contentText: {
    fontSize: spacing[12],
    lineHeight: spacing[15],
    color: colors.black,
  },
  actionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: spacing[10],
    marginHorizontal: spacing[3],
  },
});
