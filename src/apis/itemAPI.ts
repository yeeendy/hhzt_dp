import { authInstance, instance } from "./axios";
import { AxiosResponse } from "axios";

export const getItemListAll = async () => { // 상품 게시글 목록 조회
  try {
    const res = await instance.get("/item");
    return res.data;
  } catch (error) {
    return error;
  }
};


export const createItem = async (item) => {
  try {
    const res: AxiosResponse<any> = await authInstance.post("/posts", item);
    alert("등록 완료");
    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 400) {
      // alert(e.response.data.message);
    }
    throw e;
  }
};


export const detailItemPost = async (itemId) => { // 선택한 상품 게시글 정보 조회
  try {
    const res = await instance.get(`/item/${itemId}`);
    return res.data;
  } catch (error) {
    // alert(error.response.data.message);
  }
};

export const editVotePost = async (postDetail) => { // 판매 상품 게시글 수정
  try {
    const res = await authInstance.put(`/api/v1/item/${postDetail.id}`, postDetail);
    // alert(res.data.message);
    return res.data;
  } catch (error) {
    // alert(error.response.data.message);
  }
};

export const removeVotePost = async (id) => { //판매 상품 게시글 삭제
  try {
    console.log(`Removing ${id}`);
    const res = await authInstance.delete(`/posts/${id}`);
    // alert(res.data.message);
    return id;
  } catch (error) {
    // alert(error.response.data.message);
  }
};

// export const userVoteOption = async (item) => { // 상세페이지에서 원가를 클릭했을 때
//   try {
//     const res = await authInstance.post(`/vote/${item.id}`, {
//       optionId: item.optionId,
//     });
//     return res.data.message;
//   } catch (error) {
//     // console.log(error.response.data.message);
//     // alert(error.response.data.message);
//     return error.response.data.message;
//   }
// };
