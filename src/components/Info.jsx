import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

// обертка
const Wrapper = styled.section`
    margin-top: 3rem; //отступ от кнопки
    width: 100%;
    display: grid; // испольжуем сетку (для разных устройств разные значения)
    grid-template-columns: 100%; // на маленьких экранах
    gap: 2rem; // расстояние между елементами

    //для екранов от 767px
    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    //для екранов от 1024px
    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

// картинка
const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain; // обрезать не будем
`;

// заголоовок
const InfoTitle = styled.h1`
margin: 0;
  font-weight: var(--fw-normal);
`;

//================================================
// списки
const ListGroup = styled.div`
    display: flex;
    flex-direction: column; //для маленьких устройств

    gap: 2rem; // не зависимо от роу или колум, между ел. 2рема 

    @media (min-width: 1024px) {
        flex-direction: row; //для больших устройств
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;
    & > b {
        font-weight: var(--fw-bold);
    }
`;

export const Info = (props) => {
    const {
        name,
        location,
        img,
    } = props;
    
    return (
        <Wrapper>
            <InfoImage src={img} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
            </div>
            {/* дальше идут два списка */}
            <ListGroup>
                <List>
                    <ListItem>
                        <b>location:</b> {location}
                    </ListItem>
                </List>
            </ListGroup>
        </Wrapper>
    );
}
