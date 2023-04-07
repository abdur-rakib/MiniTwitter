import {ImageBackground, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {spacing} from '../../theme/spacing';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const ProfileHeader = () => {
  // navigation staff
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/cover_photo.jpeg')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconContainer}>
            <Feather
              name="arrow-left"
              color={colors.extra_extra_light_gray}
              size={moderateScale(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather
              name="search"
              color={colors.extra_extra_light_gray}
              size={moderateScale(20)}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileHeader;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'transparent',
    zIndex: -1,
  },
  imageBackground: {
    height: spacing[120],
    padding: spacing[10],
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    paddingHorizontal: spacing[3],
  },
});
