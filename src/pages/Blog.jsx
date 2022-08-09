import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5'

const Blog = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>
            <h1>Our news</h1>
        </div>
    );
};

export {Blog};