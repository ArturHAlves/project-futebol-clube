const user = {
  id: 2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: 'secret_user',
};

const validToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4OTk3ODk5MywiZXhwIjoxNzIxNTM2NTkzfQ.aRskzRqmyIM5IFuDcwSN54KjKEaoLnUAPS9oBaVZ6Gg';

// Valid
const validEmail = 'user@user.com';

const validPassword = 'secret_user';

const validLoginBody = { email: validEmail, password: validPassword };

const userRegistered = {
  ...user,
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
};

// Invalid
const invalidBody = { email: '', password: '' };

const validPasswordInvalidEmail = { email: 'test@', password: validPassword };

const validEmailInvalidPassword = { email: validEmail, password: '123' };

export {
  invalidBody,
  userRegistered,
  validLoginBody,
  validPasswordInvalidEmail,
  validEmailInvalidPassword,
  validToken
};
