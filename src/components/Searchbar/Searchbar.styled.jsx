import styled from 'styled-components';

export const SearchForm = styled.form`
    
    display: flex;
    gap: 8px;

    & >input{
        outline: none;
        padding: 12px;
        font-size: 22px;
        border-radius: 8px;
        border: 3px solid transparent;
        box-shadow: var(--shadow-four);

        &:focus {
           border-color: var(--orange);
        }
    }
`