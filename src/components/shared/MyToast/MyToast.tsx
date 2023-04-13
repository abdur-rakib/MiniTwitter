import React, {useEffect, useState} from 'react';
import Toast from 'react-native-root-toast';
import {colors} from '../../../theme/colors';
import {commonStyles} from '../../../styles/commonstyles';
import {moderateScale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

interface Props {
  message: string;
  visible: boolean;
}

const {height} = Dimensions.get('screen');
const MyToast: React.FC<Props> = ({message, visible}) => {
  // comp state
  const [show, setShow] = useState<boolean>(visible);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Toast
      visible={show}
      position={height - 100}
      backgroundColor={colors.extra_extra_light_gray}
      textColor={colors.black}
      textStyle={[commonStyles.regularText, {fontSize: moderateScale(13)}]}
      shadow={false}
      animation={false}
      hideOnPress={true}>
      {message}
    </Toast>
  );
};

export default MyToast;
