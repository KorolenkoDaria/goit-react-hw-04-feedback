import styled from "styled-components";


export const  Wrapper = styled.div`
    width: 650px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
export const ListBtns = styled.ul`
    list-style: none;
    display: flex;
    gap: 24px;
    align-items: center;
    margin: 0;
    padding: 0;


`
export const ItemsBtn = styled.li`
    
`
export const Button = styled.button`
    padding: 8px 18px;
    background-color: #fff;
    border: 1px solid #828282;
    font-family: sans-serif;
    font-size: 22px;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
        border-color: inherit;
        background-color: #3788fc;
        color: #fff;
    }
`
