// import { error } from "console";
import { ItemDataRes } from '../pages/ItemDetail/ItemDetail';
import { authInstance, instance } from './axios';

export const getItemListAll = async () => {
  // 메인 화면 상품 게시글 목록 조회
  try {
    const res = await instance.get('/item');
    return res.data;
  } catch (error) {
    return error;
  }
};

export const createItem = async (newItem: any) => {
  // 게시글 작성
  try {
    const res = await authInstance.post(`/item`, newItem, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  } catch (error) {
    // if (e.response?.data.data.status === false) {
    //   // 명세서에 에러가 없는데 필요하지 않나? -확인해보시겠다고 함.
    //   // alert(e.response.data.message);
    //   throw error;
    // }
    console.log('error', error);
  }
};

export const detailItemGet = async (itemId: number) => {
  // 선택한 상품 게시글 정보 조회
  try {
    const { data } = await instance.get(`/item/${itemId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const editItemPut = async ({
  itemId,
  updatedItem,
}: {
  itemId: number;
  updatedItem: ItemDataRes;
}): Promise<void> => {
  // 판매 상품 게시글 수정
  try {
    await authInstance.put(`/item/${itemId}`, updatedItem);
  } catch (error) {
    throw error;
  }
};

export const removeItemPost = async (itemId: number) => {
  //판매 상품 게시글 삭제
  try {
    console.log(`Removing ${itemId}`);
    const res = await authInstance.delete(`/item/${itemId}`);
    return res.data;
  } catch (error) {
    throw error;
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
