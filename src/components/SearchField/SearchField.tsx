import { SearchContainer, SearchInput } from './styles';

function SearchField() {
  return (
    <SearchContainer>
      <SearchInput placeholder="상품명, 지역명, @상점명 입력" />
      <img src="/assets/search_icon.svg" alt="search" />
    </SearchContainer>
  );
}

export default SearchField;
