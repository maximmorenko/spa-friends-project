import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { searchByName } from '../config';
import {IoArrowBack} from 'react-icons/io5'
import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {

    const { name } = useParams();
    // console.log(name);
    
    const [person, setPerson] = useState(null);
    
    useEffect(() => {
        axios.get(searchByName(name))
        .then(({ data }) => setPerson(data[0]));
    }, [name]);



    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>
            {/* {name} */}
            <Info {...person} />
        </div>
    );
};

