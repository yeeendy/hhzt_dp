import { authInstance } from "./axios";

export const getMyPage = async () => {
    const Authorization = localStorage.getItem('Authorization');
    const authAxios = authInstance(Authorization);
    const result = await authAxios.get('/user/mypage')
    return result.data;
    // try{
    //     const result = await authInstance.get('/user/mypage', {
    //         headers: {
    //             Authorization: Authorization
    //         }
    //     })
    // return result.data;
    // } catch (error) {
    //     throw error
    // }
}
// export const login = async (user: LoginUser) => {
//     try {
//       const result = await instance
//         .post('/user/login', { email: user.id, password: user.pw })
//         .then((result) => result);
//         console.log(result.headers);
//         console.log(result.headers.Authorization);
//       return result;
//     } catch (error) {
//       // console.log(error.result);
//       throw error;
//     }
//   };

// export const login = async (id, pw, router) => {
//     try {
//       const result = await axios.post(`${API_URL}/login`, { id, password: pw });
//       const { token } = result.data;
//       setCookie("accessToken", "Bearer " + token);
//       router("/mypage");
//       return result.data;
//     } catch (error) {
//       if (error.response.status === 401) {
//         alert(error.response.data.message);
//       }
//       return error.response;
//     }
//   };