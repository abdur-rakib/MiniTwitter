import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';
import {GetUserFollowers} from '../../api/userApi';

const FollowerScreen = () => {
  // redux staff
  const dispatch = useDispatch();
  const {myFollowers} = useSelector(userSelector);
  console.log(
    '🚀 ~ file: FollowerScreen.tsx:12 ~ FollowerScreen ~ myFollowers:',
    myFollowers,
  );

  useEffect(() => {
    dispatch(GetUserFollowers());
  }, [dispatch]);
  return (
    <View style={[commonStyles.container, styles.container]}>
      <Text>FollowingScreen</Text>
    </View>
  );
};

export default FollowerScreen;

const styles = StyleSheet.create({
  container: {},
});
