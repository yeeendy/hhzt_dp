import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard/ItemCard';
import { ItemCardList } from './styles';
// import { itemList, filteredList, searchItem } from '../../service/itemService';

function Home() {
  return (
    <div>
      <Header />
      <img src="/assets/banner.png" alt="banner" />
      <ItemCardList>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemCardList>
    </div>
  );
}

export default Home;
