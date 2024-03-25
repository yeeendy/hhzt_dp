import styled from 'styled-components';
import chocolate from '../../public/assets/chocolate.jpeg';

const MyProduct = () => {
  return (
    <Wrapper>
      <Category>
        <CategoryName>상품</CategoryName>
      </Category>
      <Card>
        <CardInner>
          <CardHead>
            {/* <Sth /> */}
            <img src={chocolate} alt="개사기급 무료나눔" />
          </CardHead>
          <CardContents>
            <ItemName>
              <h2>내가 손해인 초콜릿 기프티콘 파라요~</h2>
            </ItemName>
            <ItemContentBottom>
              <Price>100,000</Price>
            </ItemContentBottom>
          </CardContents>
          <CardBot>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAAXNSR0IArs4c6QAAA6xJREFUWAm1l01IVFEUx51xNAtxIcEENuQIrqTxO8OEmj5IAncVUS2E2kS0axO4C5KiFi0lXIh9QBC1kKgwclNGjaNOSUEapVRiUSHoTOo4/c743vjem/vGp8xcuHPu+Z//Of9778y9740rz0EbGxsrjsViQait9JpEIuF1uVzbGCfo0/jT2GGwx6WlpQN+vz+Gn7G5MkXD4fAOil6C047dlImrxxCfg9tVUFBwtbq6ekbHrVYpzAoLo9FoJ+QL9AJrkkN/3u12d9bW1l5hMsvWnDTh4eHh8uXl5fvMutFK3qD/jLxTDQ0Nv4z5JuHR0VH/4uLiKwjy/WWtseJPLKTZKO7Wq4dCoa1LS0tP8bMqKvURrcT0TU1NbRZfWkqYWXVrhJVI9j+bZmZmbuplk1s9NDR0GNEnOpgrKz8ydBrZ8rBHRHCur0MsCvc1Pazl1GF301PbqOFpBh3Z4Rv0oIvVBgBG01hqYKCwsPBMIBD4bAxHIpGKhYWFbrB9RtxuzDEr9yB6zI5gwV/U19cfYLvktjI1mQh19rOI5wSCpqDC4bgelaXvUcRMEGJzAO0qUZ2oxdrx53XMzsI9KMJldgQDPsgPYtLgK4fCoeigMmgA2R2fCG83YMohxCFlQAHCDSlgE8Tkytx8yDZmbHCKMxIMQSdcJueWFU8Y8pRDiA3KgAJ0yJ1wJMwqGrlSWxQ6Jkg4wjWBamfCzQzfqmOrqGwNXo/c56uoeaTFejSuOWjxmNx7KXiHwYIlpnIr4I1xVo9TPF8nyFgwiYFV6LidhZfgJaFXv6vvUeCEHVmBy7UZ0fAAds3rUq+BcD8X0SFZcR5XWJcecGhFqEnrjkW12rfEJoV5PRlgJg+1QM4MGqG6uroHKWEZsNXnCfzNmWpe3iL1z9LjJmGuux+AF3MlTO1rrDb1FExutS5GQB5tj3Q/WxbRSElJyWVjPZOwBLxe70mI8sKXrTaZn59/pLKy8p+xYJqwz+eLFhUVtUH6aCRuZMwC/tBba2pqvlnz04SFUFVV9Zsj1krSd2vCOvwYNdo4sx9UOUphIfJ9f8XsRXxclbgGNiuiHNOXdjxbYUlgtuMINzN8Y1dAgU+BtTDxfkUsBWUUFhYFfmKCTKAvlWU/kDfPJo7mO3vKSiR5V69Fkrg8DPj32IHtwE2+FhvzmFivx+M5xz/ENV8sJM+xsC4yMjKyKx6P32YC8rdE2iz9HKu8m/QcfqxbWOry7N2CkRfznZzR0/yIvjBeV/sPFdozA8TD8zUAAAAASUVORK5CYII="
              width="15"
              height="17"
              alt="위치 아이콘"
            />
            전국
          </CardBot>
        </CardInner>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`;

const Category = styled.div`
  width: 100%;
  height: 50px;
  margin: 0px;
`;
const CategoryName = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 16px;
  font-size: 18px;
`;

const Card = styled.div`
  width: 194px;
  height: 194px;
  margin-right: 11px;
  margin-bottom: 11px;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

// const Sth = styled.div``;
const CardContents = styled.div`
  padding: 15px 5px;
  height: auto;
`;
const ItemName = styled.div`
  width: 194px;
  padding-right: 50px;
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  overflow: hidden;
  h2 {
    font-size: 14px;
    margin: 0;
    padding: 4px 12px 12px 12px;
  }
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 4px 12px 0 12px;
  font-weight: 700;
  &::after {
    content: '원';
    font-size: 12px;
    margin-left: 3px;
  }
`;
const CardBot = styled.div`
  width: 147px;
  height: 15px;
  border-top: 1px solid rgb(238, 238, 238);
  font-size: 12px;
  display: block;
  padding: 14px 10px 14px 40px;
  color: rgb(102, 102, 102);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  margin: 0px;
  img {
    position: absolute;
    left: 10px;
    top: calc(50% - 8px);
    padding-left: 10px;
  }
`;
export default MyProduct;
