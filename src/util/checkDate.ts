export const checkDate = (createdAt: Date) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const createdDate = createdAt;
  const currentDate = new Date();

  const diffDays = Math.round(Math.abs((+currentDate - +createdDate) / oneDay)); // 일 단위로 차이 계산

  if (diffDays === 0) {
    return '오늘';
  } else {
    return `${diffDays}일 전`;
  }
};
