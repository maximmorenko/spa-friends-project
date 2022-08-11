import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout'
import { Blog } from './pages/Blog';
import { About } from './pages/About';

function App() {

    const [people, setPeople] = useState([]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage people={people} setPeople={setPeople}/>}/>
                    <Route path='people/:name' element={<Details/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='blog' element={<Blog/>}/>
                    <Route path='about' element={<About/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
