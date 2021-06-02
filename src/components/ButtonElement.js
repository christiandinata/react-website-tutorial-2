import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease-in-out;

    &:hover{
        background: ${({primary}) => (primary ? '#fff' :'#01bf71' )};
        text-decoration: none;
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }

`