import React from 'react';
import Toast from 'react-native-root-toast';
import {colors} from '../../../theme/colors';
import {commonStyles} from '../../../styles/commonstyles';
import {moderateScale} from 'react-native-size-matters';

interface Props {
  message: string;
  visible: boolean;
}
const MyToast: React.FC<Props> = ({message, visible}) => {
  return (
    <Toast
      visible={visible}
      position={Toast.positions.BOTTOM}
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
