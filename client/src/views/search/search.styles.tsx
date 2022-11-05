import styled from 'styled-components';
import {
  Button,
  Form,
  Container,
  InputGroup,
  Col,
  Row,
  Tabs,
  Tab,
} from 'react-bootstrap';

export const SearchPageHeading = styled(Row)`
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 0px;
  margin-bottom: 0;
  align-items: baseline;
`;

export const SearchTabContainer = styled(Container)`
  /* padding: 1em; */
  height: 100%;
  padding-bottom: 30px;
  align-content: space-around;
`;

export const SeeMoreLink = styled.div`
  margin-bottom: 4px;
  /* justify-content: right; */
  text-align: right;
  cursor: pointer;
`;

export const SearchPageCol = styled(Col)`
  /* align-items: center; */
  align-content: center;
  justify-content: center;
`;

export const SearchPageRow = styled(Row)`
  align-content: center;
  /* justify-content: center; */
  justify-content: left;
  /* margin: 1em; */
`;

export const SearchBarContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 28rem;
  max-width: 80vw;
  height: 3.8em;
  background-color: transparent;
  padding-top: 4px;
  overflow: hidden;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0px;
`;

export const SearchInputContainer = styled(InputGroup)`
  width: 100%;
  /* min-height: 4em; */
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const SearchForm = styled(Form.Control)`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 15px;
  color: #12112e;
  font-weight: 500;
  border-radius: 20px;
  background-color: white;
  padding: 8px;

  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
  /* vertical-align: middle; */

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 15px;
  background-color: transparent;
  /* margin-right: 10px;
  margin-top: 6px; */
  vertical-align: 10%;
  align-items: center;
  padding-right: 4px;
`;

export const SearchButton = styled(Button)`
  width: 40px;
  height: 100%;
  outline: none;
  border: none;
  /* font-size: 15px; */
  /* color: #12112e; */
  font-weight: 500;
  border-radius: 20px;
  background-color: white;
  padding: 4px;
  /* box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14); */

  /* vertical-align: middle; */
  &:hover {
    background-color: #a663cc;
  }
  &:focus {
    background-color: #a663cc;
  }
`;

export const StyledTabs = styled(Tabs)`
  --bs-nav-tabs-link-active-bg: black;
  --bs-nav-tabs-link-active-color: white;
  .nav-link {
    color: white;
  }
`;

export const StyledTabNav = styled.ul``;

export const StyledSearchOutlet = styled.div``;

export const StyledTab = styled(Tab)``;

export const StyledRow = styled(Row)`
  justify-content: center;
`;

export const StyledPartyRow = styled(Row)`
  justify-content: right;
`;

// export const StyledPartyCard = styled(Card)`
//   height: 23rem;
//   width: 18rem;
//   padding: 0 auto;
//   cursor: pointer;
// `;

// export const StyledVideoCard = styled(Card)`
//   width: 18rem;
//   height: 10rem;
// `;

// export const StyledUserCardImg = styled(Image)`
//   width: 100px;
//   height: 100px;
//   margin: 8px;
// `;

// export const StyledCardBody = styled(Card.Body)`
//   padding-left: 20px;
//   margin: 0 auto;
//   /* text-align: right; */
// `;

// export const StyledCardButton = styled(Button);
