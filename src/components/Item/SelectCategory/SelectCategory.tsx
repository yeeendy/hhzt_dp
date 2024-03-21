import { Box1, OptionList } from './styles';

interface Option {
  value: string;
  label: string;
}

function SelectCategory() {
  // 카테고리 셀렉트 옵션들
  const options: Option[] = [
    { value: 'ENVIRONMENT', label: '의류' },
    { value: 'ACCESSORY', label: '액세서리' },
    { value: 'DIGITAL', label: '디지털' },
    { value: 'STAR_GOODS', label: '스타굿즈' },
    { value: 'APPLIANCES', label: '가전' },
    { value: 'BOOKS', label: '도서' },
    { value: 'PET_GOODS', label: '반려동물용품' },
    { value: 'FOODS', label: '식품' },
  ];
  //d80d17

  return (
    <div>
      <Box1>
        <ul>
          {options.map((item) => (
            <OptionList>{item.label}</OptionList>
          ))}
        </ul>
      </Box1>
    </div>
  );
}

export default SelectCategory;
