import React, { useCallback, useEffect, useState } from 'react';
import './filter.css';
import { filterData } from '../../data/filter/filterData';
import { filterDataProps } from 'global/types/filterDataType';
import useDebounce from '../../hooks/useDebounce';

export default function Filter() {
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState<filterDataProps[]>([]);
  const debouncedInput = useDebounce(input, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFilter = useCallback(() => {
    if (debouncedInput) {
      const data = filterData.filter((e) =>
        `${e.first_name} ${e.last_name}`.includes(debouncedInput)
      );
      setFilteredData(data);
    } else {
      setFilteredData([]);
    }
  }, [debouncedInput]);

  useEffect(() => {
    handleFilter();
  }, [handleFilter]);

  return (
    <div className='filterContainer'>
      <div className='filterInput'>
        <input
          type="text"
          name="input"
          id="input"
          value={input}
          onChange={handleChange}
        />
      </div>

      {debouncedInput.length > 0 && (
        <div className='filterResult'>
          {filteredData.length > 0 ? (
            filteredData.map((e, index) => (
              <p key={index}>{`${e.first_name} ${e.last_name}`}</p>
            ))
          ) : (
            <p>No results found!</p>
          )}
        </div>
      )}
    </div>
  );
}
