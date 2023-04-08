import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';
import {GetUserFollowings} from '../../api/userApi';

const FollowingScreen = () => {
  // redux staff
  const dispatch = useDispatch();
  const {myFollowings} = useSelector(userSelector);
  console.log(
    '🚀 ~ file: FollowingScreen.tsx:11 ~ FollowingScreen ~ myFollowings:',
    myFollowings,
  );
  useEffect(() => {
    dispatch(GetUserFollowings());
  }, [dispatch]);
  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text>FollowingScreen</Text>
    </View>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  container: {},
});
