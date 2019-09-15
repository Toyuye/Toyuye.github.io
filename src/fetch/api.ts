import  $http from './'

export const login = (userInfo: any) => {
    return $http.post('/User/Register/local_web', userInfo)
};

export const getAuthCode = (userInfo: any) => {
    return $http.get('/User/Authcode', {
        params: userInfo
    });
};
   