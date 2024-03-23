import styled from 'styled-components';
import { CardContainer, Price, CkDate } from './styles';
import { Link } from 'react-router-dom';
import { Item } from '../../../util/itemInterface';
import { checkDate } from '../../../util/checkDate';

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  const createdAt = new Date(item.createdAt);
  const daysDifference = checkDate(createdAt);

  return (
    <CustomLink to={`/item/${item.id}`} key={item.id}>
      <CardContainer>
        <img src={item.imageUrl[0]} alt="아이템사진" />
        <h2>{item.title}</h2>
        <div>
          <Price>{item.price.toLocaleString()} 원</Price>
          <CkDate>{daysDifference}</CkDate>
        </div>
      </CardContainer>
    </CustomLink>
  );
}

export default ItemCard;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-size: 15px;
  &:visited {
    color: black;
  }
`;
