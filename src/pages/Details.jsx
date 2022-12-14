import { useParams, useNavigate } from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5'
import { Button } from '../components/Button';

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>




            <h2>Hi! My name is { name }</h2>
        </div>
    );
};
