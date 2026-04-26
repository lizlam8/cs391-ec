import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "@base-ui/react/menu";



const Logo = styled.h1`
  margin-top: 1%;
  font-size: calc(2px + 2.0vw);
    
`;
const Navbar = styled.nav`
    width: 100%;
    box-sizing: border-box;
    background: #524D4D;
    color: white;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  margin-top: 1%;
    color: white;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 6px;
    font-size: calc(2px + 2.0vw);
`;

const AccountButton = styled(Menu.Trigger)`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
    font-size: calc(2px + 1.8vw);
`;

const MenuPopup = styled(Menu.Popup)`
  background: white;
  color: black;
  border-radius: 8px;
  padding: 8px;
`;

const MenuItem = styled(Menu.Item)`
  padding: 10px;
  cursor: pointer;
    text-decoration: none;

  &:hover {
    background: #e5e7eb;
  }
`;

export default function Nav() {
    return (
        <Navbar>
            <Logo>CS391 Extra Credit</Logo>

            <Links>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>

                <Menu.Root>
                    <AccountButton>Account ▼</AccountButton>

                    <Menu.Portal>
                        <Menu.Positioner>
                            <MenuPopup>
                                <MenuItem>
                                    <Link to="/profile">Profile</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/settings">Settings</Link>
                                </MenuItem>
                            </MenuPopup>
                        </Menu.Positioner>
                    </Menu.Portal>
                </Menu.Root>
            </Links>
        </Navbar>
    );
}