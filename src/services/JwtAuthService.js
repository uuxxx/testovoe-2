import fetch from 'auth/FetchInterceptor';

const JwtAuthService = {};

JwtAuthService.login = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    headers: {
      'public-request': 'true',
    },
    data,
  });
};

JwtAuthService.signUp = function (data) {
  return fetch({
    url: '/auth/signup',
    method: 'post',
    headers: {
      'public-request': 'true',
    },
    data,
  });
};

export default JwtAuthService;
