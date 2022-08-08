import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';


function App() {

    const [people, setPeople] = useState([]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<HomePage people={people} setPeople={setPeople}/>}/>
                    <Route path='/person/:name' element={<Details/>}/>
                    <Route  path='*' element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
