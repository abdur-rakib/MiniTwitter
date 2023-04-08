import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';
import {GetUsers} from '../../api/userApi';

const UsersScreen = () => {
  // redux staff
  const dispatch = useDispatch();
  const {users} = useSelector(userSelector);
  console.log('🚀 ~ file: UsersScreen.tsx:12 ~ UsersScreen ~ users:', users);

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);
  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text>FollowingScreen</Text>
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {},
});
