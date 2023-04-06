/* eslint-disable react/no-unstable-nested-components */
import {Image, Text, TouchableOpacity, View} from 'react-native';
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
              <Text style={styles.name}>Abdur Rakib</Text>
              <Text style={styles.username}>@rakibcseruet</Text>
            </View>
            <View style={styles.bottomInfoSection}>
              <TouchableOpacity style={styles.followSection}>
                <Text style={styles.followNumber}>39</Text>
                <Text style={styles.followText}>Following</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.followSection}>
                <Text style={styles.followNumber}>12</Text>
                <Text style={styles.followText}>Followers</Text>
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
          labelStyle={styles.labelStyle}
          style={styles.itemStyle}
          onPress={() => console.log('Press logout')}
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
    height: spacing[40],
    width: spacing[40],
    borderRadius: spacing[40],
    marginVertical: spacing[10],
  },
  name: {
    fontSize: spacing[14],
    fontWeight: '900',
    color: colors.black,
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
    fontWeight: '500',
    fontSize: spacing[13],
    color: colors.black,
  },
  followText: {
    fontSize: spacing[13],
    marginHorizontal: spacing[4],
    color: colors.dark_light,
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
    fontWeight: '900',
    marginLeft: -moderateScale(10),
  },
  itemStyle: {
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: colors.extra_extra_light_gray,
    borderRadius: spacing[2],
  },
});

export default CustomDrawer;
