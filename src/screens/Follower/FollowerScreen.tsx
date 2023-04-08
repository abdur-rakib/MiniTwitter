import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {commonStyles} from '../../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';
import {GetUserFollowers} from '../../api/userApi';
import {FlashList} from '@shopify/flash-list';
import {SingleUserType} from '../../types';
import SingleUser from '../../components/SingleUser';

const FollowerScreen = () => {
  // redux staff
  const dispatch: any = useDispatch();
  const {myFollowers} = useSelector(userSelector);

  // render single item
  const renderItem = ({item}: {item: SingleUserType}) => (
    <SingleUser item={item} />
  );

  useEffect(() => {
    dispatch(GetUserFollowers());
  }, [dispatch]);
  return (
    <View style={[commonStyles.container, styles.container]}>
      <FlashList
        data={myFollowers.followers}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default FollowerScreen;

const styles = StyleSheet.create({
  container: {},
});
