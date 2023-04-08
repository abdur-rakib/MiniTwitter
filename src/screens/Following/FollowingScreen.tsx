import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';
import {GetUserFollowings} from '../../api/userApi';
import {FlashList} from '@shopify/flash-list';
import SingleUser from '../../components/SingleUser';
import {SingleUserType} from '../../types';

const FollowingScreen = () => {
  // redux staff
  const dispatch: any = useDispatch();
  const {myFollowings} = useSelector(userSelector);

  // render single item
  const renderItem = ({item}: {item: SingleUserType}) => (
    <SingleUser item={item} />
  );
  useEffect(() => {
    dispatch(GetUserFollowings());
  }, [dispatch]);

  return (
    <View style={[commonStyles.container, styles.container]}>
      <FlashList
        data={myFollowings.followings}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  container: {},
});
