import { Box1, OptionList } from './styles';

interface Option {
  value: string;
  label: string;
}
interface SelectCategoryProps {
  onCategoryChange: (selectedCategory: Option) => void;
  // testCategory: string;
}

function SelectCategory({
  onCategoryChange,
  // testCategory,
}: SelectCategoryProps) {
  // 카테고리 셀렉트 옵션들
  const options: Option[] = [
    { value: 'CLOTHES', label: '의류' },
    { value: 'ACCESSORY', label: '액세서리' },
    { value: 'DIGITAL', label: '디지털' },
    { value: 'STAR_GOODS', label: '스타굿즈' },
    { value: 'APPLIANCES', label: '가전' },
    { value: 'BOOKS', label: '도서' },
    { value: 'PET_GOODS', label: '반려동물용품' },
    { value: 'FOODS', label: '식품' },
  ];

  // const selectedLabel = options.find(
  //   (option) => option.value === testCategory,
  // )?.label;
  const handleCategoryClick = (selectedCategory: Option) => {
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <Box1>
        <ul>
          {options.map((item) => (
            <OptionList
              key={item.value}
              onClick={() => handleCategoryClick(item)}
            >
              {item.label}
              {/* {item.value === testCategory ? selectedLabel : item.label} */}
            </OptionList>
          ))}
        </ul>
      </Box1>
    </div>
  );
}

export default SelectCategory;
