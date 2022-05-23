import React from 'react';
import { Card } from 'react-bootstrap';
import sleeping from '../../assets/sleeping.png';

 const style = {
   width: "100%",
   height: "400px",
 };

const NotFound = () => {
    return (
      <div>
        <Card>
          <Card.Img style={style} variant="top" src={sleeping} />
          <Card.Body>
            <Card.Text className='text-center fw-bold'>
              404 NOT FOUND.YOU CAN BE WRONG!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
};

export default NotFound;