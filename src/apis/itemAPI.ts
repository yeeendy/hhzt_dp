// import { error } from "console";
import { authInstance, instance } from "./axios";

export const getItemListAll = async () => { // 메인 화면 상품 게시글 목록 조회
  try {
    const res = await instance.get("/item");
    return res.data;
  } catch (error) {
    return error;
  }
};


export const createItem = async (item) => { // 게시글 작성
  try {
    const res = await authInstance.post("/item", item);
    // alert("등록 완료");
    return res.data;
  } catch (e) {
    if (e.response?.data.data.status === false) { // 명세서에 에러가 없는데 필요하지 않나? -확인해보시겠다고 함.
      // alert(e.response.data.message);
      throw error
    }
  }
};

export const detailItemGet = async (itemId) => { // 선택한 상품 게시글 정보 조회
  try {
    const res = await instance.get(`/item/${itemId}`);
    return res.data;
  } catch (error) {
    throw error
  }
};

export const editItemPut = async (postDetail) => { // 판매 상품 게시글 수정
  try {
    const res = await authInstance.put(`/api/v1/item/${postDetail.id}`, postDetail);
    // alert(res.data.message);
    return res.data;
  } catch (error) {
    throw error
  }
};

export const removeItemPost = async (itemId) => { //판매 상품 게시글 삭제
  try {
    console.log(`Removing ${itemId}`);
    const res = await authInstance.delete(`/item/${itemId}`);
    return res.data;
  } catch (error) {
    throw error

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

