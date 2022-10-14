import { useEffect, useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { UserContext } from '../context';
// import { StyledForm, StyledButton, StyledVideoCard } from '../../styles';

// import Carousel from 'react-bootstrap/Carousel';
// const {
//   Label, Text, Control, Group, Check,
// } = StyledForm;
function Dashboard() {
  // get user data from nodejs and return in react jsl functional component using hooks
  // use axios to get user data from prisma DB and
  // get user data from express.js return to react functional component using hooks?

  const { user } = useContext(UserContext);
  const [parties, setParties] = useState([]);
  // const [likes, setLikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/api/party')
      .then((data: any) => {
        setParties(
          data.data.sort(
            (a, b) =>
              Number(new Date(b.date_time)) - Number(new Date(a.date_time)),
          ),
        );
        // for (let i = 0; i < data.data.length; i++) {
        //   console.log(data.data[i].likes_count, 'likes.....');
        // }
      })
    // .then((data: any) => {
    //   console.log(data.data, 'data.data2.....')
    //   setLikes(data.data.sort((a, b) => a.party.likes_count > b.party.likes_count ? 1 : -1))
    //   console.log(likes, 'likes.....')
    // })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleCardClick = (party) => {
    console.log(party);
    navigate('/watchParty', {
      state: { party, videos: party.videos },
    });
  };
  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleCalendarClick = () => {
    navigate('/calendar');
  };

  return (
    <Container>
      <Row>{user ? user.user_name : 'Not logged in'}</Row>
      <Row />
      {user ? (
        <Row>
          <Col sm={8}>
            <Card style={{ width: '14rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Img variant="top" src={user.profile} />
              <Card.Body>
                <Card.Title>
                  {user.user_name}
                  &apos;s dashboard
                </Card.Title>
                <Card.Text>Trick or Treat</Card.Text>
                <Button variant="primary" onClick={() => handleProfileClick()}>
                  profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col />
          <Col sm={3}>
            {/* <Card style={{ width: '18rem' }} /> */}
            {/* <StyledForm> */}
            <ListGroup>
              <ListGroup.Item action variant="dark">
                <Col>Upcoming Watch Parties</Col>
                <Col>
                  <Button
                    variant="primary"
                    onClick={() => handleCalendarClick()}
                  >
  Calendar
                  </Button>
                </Col>
              </ListGroup.Item>
              {parties.slice(0, 5).map((party) => (
                <ListGroup.Item
                  action
                  variant="light"
                  onClick={() => handleCardClick(party)}
                  key={party}
                >
                  <Col>{party.date_time.slice(5, 10)}</Col>
                  {' '}
                  {party.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
            {/* </StyledForm> */}
          </Col>
        </Row>
      ) : null}
      <Row> Top Rooms</Row>
      {parties && parties.length ? (
        <Col>
          <CardGroup>
            {parties.slice(0, 5).map((party) => (
              <Card onClick={() => handleCardClick(party)}>
                <Card.Img variant="top" src={party.thumbnail} />
                <Card.Body>
                  <Card.Title>{party.name}</Card.Title>
                  <Card.Text>{party.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Starting on: {party.date_time.slice(0, 10)}
                  </small>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </Col>
      ) : null}
    </Container>
  );
}

export default Dashboard;
