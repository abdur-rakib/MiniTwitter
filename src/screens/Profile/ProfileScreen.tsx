import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import MyText from '../../components/shared/MyText';
import {spacing} from '../../theme/spacing';
import {colors} from '../../theme/colors';
import {ProfileHeader} from '../../components/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';
import data from '../../mockData/timeline.json';
import SingleTweet from '../../components/SingleTweet';
import {TweetType} from '../../types';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';

interface SingleInfoProps {
  text: string;
  iconName: string;
}
// render single info
const SingleInfo = ({text, iconName}: SingleInfoProps) => {
  return (
    <View style={styles.singleInfoContainer}>
      <Ionicons
        name={iconName}
        color={colors.dark_light}
        size={moderateScale(13)}
      />
      <MyText style={styles.singleInfoText}>{text}</MyText>
    </View>
  );
};

const ProfileScreen = () => {
  // component state
  const [tweets] = useState(data.timeline);
  // redux staff
  const {name} = useSelector(userSelector);

  // render single item
  const renderItem = ({item}: {item: TweetType}) => <SingleTweet item={item} />;
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.topBox}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileIcon}
            source={require('../../assets/images/user.jpg')}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.actionContainer}>
          <MyText type="Bold" style={styles.actionText}>
            Edit Profile
          </MyText>
        </TouchableOpacity>
      </View>
      {/* information container */}
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <MyText style={styles.name} type="Bold">
            {name}
          </MyText>
          <MyText style={styles.username}>@{name}</MyText>
        </View>
        {/* bio */}
        <View style={styles.bioContainer}>
          <MyText style={styles.bioText}>
            Software Engineer (React Native)
          </MyText>
        </View>
        {/* detail container */}
        <View style={styles.detailsContainer}>
          <SingleInfo
            text="Dhaka, Bangladesh"
            iconName="ios-location-outline"
          />
          <SingleInfo
            text="Joined March 2016"
            iconName="ios-calendar-outline"
          />
        </View>

        {/* follow following container */}
        <View style={styles.bottomInfoSection}>
          <TouchableOpacity style={styles.followSection}>
            <MyText type="Medium" style={styles.followNumber}>
              39
            </MyText>
            <MyText style={styles.followText}>Following</MyText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followSection}>
            <MyText type="Medium" style={styles.followNumber}>
              12
            </MyText>
            <MyText style={styles.followText}>Followers</MyText>
          </TouchableOpacity>
        </View>
      </View>

      {/* my tweet list  */}
      <View style={styles.listContainer}>
        <FlashList
          data={tweets}
          renderItem={renderItem}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  topBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -moderateScale(26),
    zIndex: 999,
    paddingHorizontal: spacing[10],
  },
  profileContainer: {
    height: spacing[64],
    width: spacing[64],
    borderRadius: spacing[64],
    backgroundColor: colors.extra_extra_light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    height: spacing[60],
    width: spacing[60],
    borderRadius: spacing[60],
    zIndex: 999,
  },
  actionContainer: {
    alignSelf: 'flex-end',
    borderWidth: 0.8,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[12],
    borderRadius: spacing[14],
    borderColor: colors.dark_light,
  },
  actionText: {
    color: colors.black,
  },

  infoContainer: {
    paddingHorizontal: spacing[10],
    paddingBottom: spacing[10],
  },
  nameContainer: {
    marginTop: spacing[8],
    marginBottom: spacing[4],
  },
  name: {
    fontSize: spacing[18],
    color: colors.black,
    lineHeight: spacing[18],
  },
  username: {
    color: colors.dark_light,
    fontSize: spacing[13],
  },

  bioContainer: {
    marginBottom: spacing[2],
  },
  bioText: {
    fontSize: spacing[13],
    color: colors.black,
    lineHeight: spacing[16],
  },
  detailsContainer: {
    marginVertical: spacing[4],
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  singleInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing[10],
  },
  singleInfoText: {
    fontSize: spacing[13],
    color: colors.dark_light,
    marginHorizontal: spacing[2],
  },
  bottomInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing[5],
  },
  followSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing[6],
  },
  followNumber: {
    fontSize: spacing[13],
    color: colors.black,
    lineHeight: spacing[14],
  },
  followText: {
    fontSize: spacing[13],
    marginHorizontal: spacing[4],
    color: colors.dark_light,
    lineHeight: spacing[14],
  },
  listContainer: {
    flex: 1,
    paddingVertical: spacing[6],
    borderTopWidth: 0.8,
    borderTopColor: colors.extra_light_gray,
  },
});
