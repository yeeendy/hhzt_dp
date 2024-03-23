import { instance } from '../../apis/axios';
import Header from '../../components/Header';
import ItemCard from '../../components/Item/ItemCard/ItemCard';
import { ItemCardList } from './styles';
import { useQuery } from '@tanstack/react-query';

export const itemList = async () => {
  try {
    const res = await instance.get('/item');
    return res.data;
  } catch (error) {
    console.log('error', error);
  }
};
function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['itemList'],
    queryFn: () => itemList(),
  });

  if (isLoading) {
    return <div>로딩 중</div>;
  }
  if (isError) {
    return <div>에러다</div>;
  }
  return (
    <div>
      <Header />
      <img src="/assets/banner.png" alt="banner" />
      <ItemCardList>
        {data?.data?.items.map((item: any) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </ItemCardList>
    </div>
  );
}

export default Home;
