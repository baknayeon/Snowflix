import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from 'styled-components'

const Header = styled.header`
    color:white;
    position:fixed;
    top:10px;
    left:10px;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:10px;
    background-color:rgba(20, 20, 20, 0.5)
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`
const List = styled.ul `
    display:flex;
`

const Item = styled.li `
    height:50px;
    width: 50px;
    text-align:center;
    border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
    transition:border-bottom 0.5s ease-in-out;
`
const SLink = styled(Link)`
    height:50px
    display: flex;
    align-items:center;
    justify-content:center;
`;

export default withRouter( ({location: {pathname}}) =>(
        <Header>
            <List>
                <Item current={pathname === "/"? true:false}>
                    <SLink to="/">Movices</SLink>
                </Item>
                <Item current={pathname ==="/tv"? true:false}>
                    <SLink to="/tv">TV</SLink>
                </Item>
                <Item current={pathname === "/search"? true:false}>
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </Header>
    )   
)