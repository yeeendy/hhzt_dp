import { CardContainer, Price, Date } from './styles';

function ItemCard() {
  return (
    <CardContainer>
      <img src="/assets/exam1.png" alt="" />
      <h2>책 문진</h2>
      <div>
        <Price>36,000 원</Price>
        <Date>3일 전</Date>
      </div>
    </CardContainer>
  );
}

export default ItemCard;
