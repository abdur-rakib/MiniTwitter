import * as Yup from 'yup';

const YupObjectShape = (obj: object | any) => Yup.object().shape(obj);

// signup validation schema
export const signupValidationSchema = YupObjectShape({
  username: Yup.string().label('Username').required(),
  email: Yup.string().label('E-mail').email().required(),
  password: Yup.string().label('Password').required(),
});

// login validation schema
export const loginValidationSchema = YupObjectShape({
  email: Yup.string().label('E-mail').email().required(),
  password: Yup.string().label('Password').required(),
});
