import { debounce } from 'lodash';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

type SearchInputTypes = {
  placeholder?: string;
  defaultSearchValue?: string;
  onSearchChange: (value: string) => void;
};

const DEBOUNCE_DELAY = 250;

export const SearchInput: React.FC<SearchInputTypes> = ({
  placeholder = 'What are you looking for?',
  defaultSearchValue = '',
  onSearchChange,
}) => {
  const [searchValue, setSearchValue] = useState(defaultSearchValue);

  const debouncedSearch = useMemo(() => debounce(onSearchChange, DEBOUNCE_DELAY), [onSearchChange]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    setSearchValue(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    setSearchValue(defaultSearchValue);
  }, [defaultSearchValue]);

  return (
    <div>
      <input placeholder={placeholder} value={searchValue} onChange={onChange} />
    </div>
  );
};
