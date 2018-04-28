//create all your actions here..

export const loginUser = (userinfo) => {
    console.log(userinfo);
    return{
        type: 'LOGIN_USER',
        payload: userinfo
    }
};

export const searchCriteria = (info) => {
    console.log(info);
    return{
        type: 'SEARCH_CRITERIA',
        payload: info
    }
};
