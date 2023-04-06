/* eslint-disable react/no-unstable-nested-components */
import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../../theme/colors';
import {spacing} from '../../theme/spacing';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {commonStyles} from '../../styles/commonstyles';
import MyText from '../shared/MyText';
import {storage} from '../../services/storageService';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.avatarSection}>
              <Image
                style={styles.avatar}
                source={require('../../assets/images/user.jpg')}
              />
              <TouchableOpacity>
                <MyText type="Bold" style={styles.name}>
                  Abdur Rakib
                </MyText>
                <MyText style={styles.username}>@rakibcseruet</MyText>
              </TouchableOpacity>
            </View>
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
          <View style={styles.drawerItemList}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color}) => (
            <MaterialIcons
              name="logout"
              color={color}
              size={moderateScale(19)}
            />
          )}
          inactiveTintColor={colors.black}
          label="Sign Out"
          labelStyle={[styles.labelStyle, commonStyles.boldText]}
          style={styles.itemStyle}
          onPress={() => {
            console.log('Press logout');
            storage.set('isAuthenticated', false);
          }}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extra_extra_light_gray,
    paddingVertical: spacing[6],
    paddingHorizontal: spacing[24],
  },
  drawerContent: {},
  userInfoSection: {
    borderBottomWidth: 0.8,
    borderBottomColor: colors.extra_light_gray,
    paddingVertical: spacing[12],
  },
  avatarSection: {},
  avatar: {
    height: spacing[32],
    width: spacing[32],
    borderRadius: spacing[32],
    marginBottom: spacing[10],
    marginTop: spacing[4],
  },
  name: {
    fontSize: spacing[14],
    color: colors.black,
    lineHeight: spacing[18],
  },
  username: {
    color: colors.dark_light,
    fontSize: spacing[12],
  },
  bottomInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[10],
    marginBottom: spacing[8],
  },
  followSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followNumber: {
    fontSize: spacing[12],
    color: colors.black,
    lineHeight: spacing[14],
  },
  followText: {
    fontSize: spacing[12],
    marginHorizontal: spacing[4],
    color: colors.dark_light,
    lineHeight: spacing[14],
  },
  drawerItemList: {
    borderBottomWidth: 0.8,
    borderBottomColor: colors.extra_light_gray,
    paddingVertical: spacing[12],
  },

  bottomDrawerSection: {
    borderTopWidth: 0.8,
    borderTopColor: colors.extra_light_gray,
    paddingTop: spacing[8],
  },
  labelStyle: {
    color: colors.black,
    marginLeft: -moderateScale(10),
    fontSize: spacing[14],
    lineHeight: spacing[18],
  },
  itemStyle: {
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: colors.extra_extra_light_gray,
    borderRadius: spacing[2],
  },
});

export default CustomDrawer;
