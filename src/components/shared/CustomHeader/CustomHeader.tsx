import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {spacing} from '../../../theme/spacing';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import {AVATAR_URL} from '../../../config/urls';
import {getLoggedInUserId} from '../../../utils/commonFunctions';
import {commonStyles} from '../../../styles/commonstyles';
import {useSelector} from 'react-redux';
import {authSelector} from '../../../redux/auth/authSlice';

interface HeaderProps {
  toggle?: boolean;
}

const CustomHeader: React.FC<HeaderProps> = ({toggle}) => {
  const {token} = useSelector(authSelector);
  const [avatarUri, setAvatarUri] = useState<string>(
    token ? `${AVATAR_URL}${getLoggedInUserId(token as string)}.jpg` : '',
  );
  // navigation staff
  const navigation: DrawerNavigationProp<ParamListBase, 'Home' | 'Profile'> =
    useNavigation();

  // redux
  // const {token} = useSelector(userSelector);
  return (
    <View style={[commonStyles.headerContainer, styles.container]}>
      {toggle && (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.imageContainer}>
          <FastImage
            style={styles.image}
            source={{
              uri: avatarUri,
            }}
            onError={() =>
              setAvatarUri('https://randomuser.me/api/portraits/men/1.jpg')
            }
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      )}
      <FastImage
        style={styles.iconStyle}
        source={require('../../../assets/icons/twitter.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default CustomHeader;

const styles = ScaledSheet.create({
  container: {},
  iconStyle: {
    height: spacing[32],
    width: spacing[32],
    position: 'absolute',
    left: '50%',
  },
  imageContainer: {
    zIndex: 9999,
  },
  image: {
    height: spacing[26],
    width: spacing[26],
    borderRadius: spacing[32],
  },
});
