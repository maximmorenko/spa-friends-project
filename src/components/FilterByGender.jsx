import styled from 'styled-components';

const InputContainer = styled.div`
    background-color: var(--colors-ui-base);
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%; // для маленьких экранов ширина 100% для больших 280px
    margin-bottom: 1rem;
    @media (min-width: 767px) {
        // для десктопа убираем маржин и делаем ширину 280px
        margin-bottom: 0;
        width: 290px;
    }
`;

const Input = styled.input`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
//   border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
`;

const Label = styled.label`
cursor: pointer;
display: flex;
`;

const Span = styled.span`
margin-left: 0.3rem;
`;

const FilterByGender = ({gender, setGender}) => {

    const hendleFilterByGender = event => {
        const value = event.target.value;
        setGender(value);
      };

    return (
        <InputContainer>
            <Item>
                <Label>
                    <Input
                        type="radio"
                        name="radio"
                        value="all"
                        checked={gender === "all"}
                        onChange={event => hendleFilterByGender(event)}
                    />
                    <Span>all</Span>
                </Label>
            </Item>
            <Item>
                <Label>
                    <Input
                        type="radio"
                        name="radio"
                        value="male"
                        checked={gender === "male"}
                        onChange={event => hendleFilterByGender(event)}
                    />
                    <Span>male</Span>
                </Label >
            </Item>
            <Item>
                <Label>
                    <Input
                        type="radio"
                        name="radio"
                        value="female"
                        checked={gender === "female"}
                        onChange={event => hendleFilterByGender(event)}
                    />
                    <Span>female</Span>
                </Label >
            </Item>
        </InputContainer>
    );
};

export {FilterByGender};
