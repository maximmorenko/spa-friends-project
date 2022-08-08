import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
    { value: '0-18', label: '0-18' },
    { value: '18-25', label: '18-25' },
    { value: '35', label: '25-35' },
    { value: '36', label: '35-45' },
    { value: '45-60', label: '45-60' },
    { value: '60-75', label: '60-75' },
    { value: '75+', label: '75+' },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Controls = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [age, setAge] = useState('');

      useEffect(() => {
        const ageValue = age?.value || '';
        onSearch(search, ageValue);

        // eslint-disable-next-line
      }, [search, age]);

    return (
        <Wrapper>
            {/* компонент Search ожидаем пропсы search и setSearch, передаем их ему*/}
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
            // передаем пропсы
                options={options}
                placeholder="Filter by age"
                // возможность отменить чтото по крестику
                isClearable
                // отменяем возможность поиска
                isSearchable={false}
                value={age}
                onChange={setAge}
            />
        </Wrapper>
    );
}; 
