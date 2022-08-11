import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'

const About = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>
            <h1>About us</h1>
        </div>
    );
};

export {About};