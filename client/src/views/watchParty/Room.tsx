import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card, Container, Row, Col,
} from 'react-bootstrap';
import io from 'socket.io-client';
import { UserContext } from '../../context';

const socket = io();

const { default: Video } = require('./Video.tsx');
const { default: Chat } = require('./Chat.tsx');

// function WatchParty({ videos, user, room }: any) {
function WatchParty() {
  // state vars
  const [dbMessages, setMessages] = useState([]);
  const user = useContext(UserContext);
  const { state } = useLocation();
  const room = state.party;

  useEffect(() => {
    socket.emit('join', room);
    socket.emit('getStatus', { room, user: user.user.id });
    socket.emit('getMessages', room || 'test');
    socket.on('getMessages', (messages) => {
      setMessages(messages);
    });
    return () => {
      socket.off('getMessages');
      socket.off('chat');
    };
  }, []);

  return (
    <Container
      style={{
			  width: '100%',
			  height: '90vh',
			  marginLeft: '0px',
			  maxWidth: '100%',
      }}
    >
      <Row>
        <Col xs={14} md={9}>
          <Card
            style={{
						  width: '100%',
						  height: '90vh',
						  borderRadius: '0px 0px 10px 0px',
            }}
            bg="transparent"
            text="white"
          >
            <Video
              user={user}
              videos={state.videos}
              isAdmin={Math.random() < 0.5}
              room={room || 'test'}
              socket={socket}
            />
          </Card>
        </Col>
        <Col xs={5} md={3}>
          <Chat
            user={user}
            room={room || 'test'}
            messages={dbMessages}
            setMessages={setMessages}
            socket={socket}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default WatchParty;
