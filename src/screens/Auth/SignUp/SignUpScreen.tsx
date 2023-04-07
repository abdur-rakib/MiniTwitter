import {Alert, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import CustomInput from '../../../components/shared/CustomInput';
import {commonStyles} from '../../../styles/commonstyles';
import {ScaledSheet} from 'react-native-size-matters';
import Title from '../../../components/shared/Title';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {spacing} from '../../../theme/spacing';
import {colors} from '../../../theme/colors';
import PrimaryButton from '../../../components/PrimaryButton';
import {Formik} from 'formik';
import {signupValidationSchema} from '../../../utils/schemas';
import MyText from '../../../components/shared/MyText';
import {SignupValuesType} from '../../../types';
import {useDispatch, useSelector} from 'react-redux';
import {clearUserUIState, userSelector} from '../../../redux/user/userSlice';
import {Signup} from '../../../api/userApi';
import MyToast from '../../../components/shared/MyToast/MyToast';

interface SignupScreenProps {
  navigation: any;
}

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const SignUpScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  // redux staff
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(userSelector);
  // refs
  const usernameRef = useRef<TextInput>();
  const emailRef = useRef<TextInput>();
  const passwordRef = useRef<TextInput>();

  // handle submit editting
  const handleSubmitEdittng = (
    ref: React.MutableRefObject<TextInput | undefined>,
  ) => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  // handle signup
  const handleSignup = async (values: SignupValuesType) => {
    // first clear prev auth UI state
    dispatch(clearUserUIState());
    // login
    const {type} = await dispatch(Signup(values));
    if (type === 'user/Signup/fulfilled') {
      Alert.alert('', 'You have successfully signed up. Please login.', [
        {text: 'OK', onPress: () => navigation.navigate('Login')},
      ]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupValidationSchema}
      onSubmit={handleSignup}>
      {({handleSubmit}) => (
        <KeyboardAwareScrollView
          contentContainerStyle={[commonStyles.container, styles.container]}>
          {/* error message */}
          {!!error && <MyToast message={error} visible={!!error} />}
          {/* heading */}
          <View style={styles.titleContainer}>
            <Title title="Sign up to Twitter." />
          </View>
          {/* Form */}
          <View style={styles.formContainer}>
            <CustomInput
              label="Username"
              name="username"
              ref={usernameRef}
              onSubmitEditing={() => handleSubmitEdittng(emailRef)}
              returnKeyType="next"
            />
            <CustomInput
              label="E-mail"
              name="email"
              ref={emailRef}
              onSubmitEditing={() => handleSubmitEdittng(passwordRef)}
              returnKeyType="next"
            />
            <CustomInput
              label="Password"
              name="password"
              ref={passwordRef}
              onSubmitEditing={handleSubmit}
              secureTextEntry
            />
          </View>
          {/* action container */}
          <View style={styles.actionContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.pressContainer}>
              <MyText style={styles.pressText}>Already have an account?</MyText>
            </TouchableOpacity>
            <PrimaryButton
              disabled={isLoading}
              label={'Sign up'}
              onPress={handleSubmit}
            />
          </View>
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingTop: spacing[74],
  },
  titleContainer: {
    marginVertical: spacing[20],
  },
  formContainer: {
    marginTop: spacing[6],
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressContainer: {},
  pressText: {
    color: colors.dark_gray,
    fontSize: spacing[14],
  },
});

export default SignUpScreen;
