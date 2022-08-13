import styled from 'styled-components';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%; // для маленьких экранов ширина 100% для больших 280px
    margin-bottom: 1rem;
    @media (min-width: 767px) {
        // для десктопа убираем маржин и делаем ширину 280px
        margin-bottom: 0;
        width: 280px;
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
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;

// const Input = styled.input`
//   opacity: 0;
//   z-index: 1;
//   cursor: pointer;
//   width: 25px;
//   height: 25px;
//   margin-right: 10px;
//   &:hover ~ ${RadioButtonLabel} {
//     background: #ccc;
//     &::after {
//       content: "\f005";
//       font-family: "FontAwesome";
//       display: block;
//       color: white;
//       width: 12px;
//       height: 12px;
//       margin: 4px;
//     }
//   }
//   &:checked + ${Item} {
//     background: yellowgreen;
//     border: 2px solid yellowgreen;
//   }
//   &:checked + ${RadioButtonLabel} {
//     background: yellowgreen;
//     border: 1px solid yellowgreen;
//     &::after {
//       content: "\f005";
//       font-family: "FontAwesome";
//       display: block;
//       color: white;
//       width: 12px;
//       height: 12px;
//       margin: 4px;
//     }
//   }
// `;



const FilterByGender = ({gender, setGender}) => {

    const hendleFilterByGender = event => {
        const value = event.target.value;
        setGender(value);
      };

    return (
        <InputContainer>
            <Item>
                <Input
                    type="radio"
                    name="radio"
                    value="all"
                    checked={gender === "all"}
                    onChange={event => hendleFilterByGender(event)}
                />
                <Label />
                <div>all</div>
            </Item>
            <Item>
                <Input
                    type="radio"
                    name="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={event => hendleFilterByGender(event)}
                />
                <Label />
                <div>male</div>
            </Item>
            <Item>
                <Input
                    type="radio"
                    name="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={event => hendleFilterByGender(event)}
                />
                <Label />
                <div>female</div>
            </Item>
        </InputContainer>
    );
};

export {FilterByGender};
