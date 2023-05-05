import styled from 'styled-components';

export const Header = styled.header`
    top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: transparent;
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */

`

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