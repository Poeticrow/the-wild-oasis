import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import Uploader from "../data/Uploader";

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  grid-row: 1 /-1;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  padding: 3.2rem 2.4rem;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyledSideBar>
  );
}

export default SideBar;
