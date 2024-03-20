import { itemApi } from '../axios/api';

import { AuthHeader } from '../axios/api';

const headers = AuthHeader();

export const itemList = async () => await itemApi.get();

export const registerItem = async (item) =>
  await itemApi.post('', item, headers);

// item post 할 때, 동시에 post요청  ======>  수정예정
export const uploadItemImg = async (itemImages) =>
  await itemApi.post('/img', itemImages, headers);

export const updateItem = async (itemId, updateItem) =>
  await itemApi.put(`/${itemId}`, updateItem, headers);

export const deleteItem = async (itemId) =>
  await itemApi.delete(`/${itemId}`, headers);

export const findItem = async (itemId) => await itemApi.get(`/${itemId}`);

export const filteredList = async (category) =>
  await itemApi.get(`/category?category=${category}`);

export const searchItem = async (title) =>
  await itemApi.get(`/search?title=${title}`);
