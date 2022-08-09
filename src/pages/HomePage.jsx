import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  List  from '../components/List';
import  Card  from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_PEOPLE } from '../config';


export const HomePage = ({people, setPeople}) => {

    const [filteredPeople, setFilteredPeople] = useState(people);
    
    // создадим функцию поиска
    const handleSearch = (search, age) => {
        // на входе ожидаем два параметра по поиску. название страниы в поисковой страке и регион в селекте
        // создадим переменную с данными (спредом развернем в нее все страны)
        let data = [...people];
        
        if (search) {
            // если есть поисковое слово, то делаем фильтрацию по слову, 
            // проверяем по всем людям их имена, совпадают ли они с текущим (выбраным)
            // также имя человека в массиве и введенное слово в поиске приводим к нижнему регистру
            data = data.filter(
                // person => person.name.first.toLowerCase().includes(search.toLowerCase())
                person => `${person.name.first}${person.name.last}`.toLowerCase().includes(search.toLowerCase())
            )
        }
        
        if (age) {

            data = data.filter(
                person => person.dob.age.includes(age)
            );
        }
    
        setFilteredPeople(data);
    };

    // const getAllPeople = async () => {
    //     const response = await fetch(ALL_PEOPLE);
    //     return await response.json();
    // }

    // useEffect(() => {
    //     getAllPeople.then(({ data }) => setPeople(data.results));
    //     // eslint-disable-next-line
    // }, [])

    useEffect(() => {
        if (!people.length)
        axios.get(ALL_PEOPLE).then(({ data }) => setPeople(data.results));
        // eslint-disable-next-line
    }, [])

      useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
      }, [people]);

      
      return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                    {filteredPeople.map((item) => {
                        const personInfo = {
                            img: item.picture.large,
                            name: `${item.name.first} ${item.name.last}`,
                            info: [
                                {
                                    title: 'Gender',
                                    description: item.gender,
                                },
                                // {
                                //     title: 'Location',
                                //     description: `${item.location.country} ${item.location.city}`,
                                // },
                                {
                                    title: 'Age',
                                    description: item.dob.age,
                                },
                            ],
                        };

                        return (
                            <Link style={{ textDecoration: 'none' }} key={`${item.name.first}${item.name.last}`} to={`/person/${item.name.first}${item.name.last}`}>
                                <Card key={item.id.value === null ? `${item.name.first}${item.name.last}` : item.id.value} {...personInfo}/>
                            </Link>
                        );
                    })}
            </List>
        </>
    );
};
