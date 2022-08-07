import { useState, useEffect } from 'react';
import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';
import List from './components/List';
import Card from './components/Card'
import { getAllPeople } from '../src/Api'

function App() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        getAllPeople()
        .then(data => { setPeople(data.results) })
    }, [])

    return (
        <>
            <Header />
            <Main>
                <Controls/>
                <List>
                    {people.map((item) => {
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
                            <Card
                                key={item.id.value === null ? `${item.name.first}${item.name.last}` : item.id.value}
                                // onClick={() => push(`/name/${item.name.first}`)}
                                {...personInfo}
                            />
                        );
                    })}
                </List>
            </Main>
        </>
    );
}

export default App;
