import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const { default: ArchivedParties } = require('./ArchivedParties.tsx');

function Archive() {
  const [parties, setParties] = useState(() => []);
  useEffect(() => {
    const config = {
      method: 'get',
      url: 'http://localhost:4040/api/party/archive',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios(config)
      .then((response) => {
        setParties(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <ArchivedParties parties={parties} />
    </Container>
  );
}

export default Archive;