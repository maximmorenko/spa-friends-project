import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  List  from '../components/List';
import  Card  from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_PEOPLE } from '../config';

export const HomePage = ({people, setPeople}) => {
    
    const [filteredPeople, setFilteredPeople] = useState(people);
    
    const handleSearch = (search, age) => {
        let data = [...people];
        
        if (search) {
            data = data.filter(
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

    useEffect(() => {
        if (!people.length)
        fetch(ALL_PEOPLE)
        .then(res => res.json())
        .then(data => setPeople(data.results))
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
                                {
                                    title: 'Location',
                                    description: `${item.location.country} ${item.location.city}`,
                                },
                                {
                                    title: 'Age',
                                    description: item.dob.age,
                                },
                            ],
                        };

                        return (
                            <Link style={{ textDecoration: 'none' }} key={`${item.cell}`} to={`/people/${item.name.first}`}>
                                <Card key={item.cell}  {...personInfo} filteredPeople={filteredPeople}/>
                            </Link>
                        );
                    })}
            </List>
        </>
    );
};
