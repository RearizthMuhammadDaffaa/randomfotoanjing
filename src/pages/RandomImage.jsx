import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import { Row, Col, Image,  } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Loading from "../components/Loading";
const RandomImage = () => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)

  if(isLoading){
    return <Loading />
  }

  async function fetchData(){
    try {
      setIsLoading(true)
      const res = await axios.get('https://dog.ceo/api/breeds/image/random/5');

      setData(res.data);
      setIsLoading(false)

    } catch (error) {
      console.log(console.error());
    }
   }

  
  return (
    <Container className="random-container">
      <Row>
        <Col className="col-button mb-5 mt-3">
          <button onClick={fetchData}>generate foto Anjing</button>
        </Col>
      </Row>

      <Row>
        <Col className="img-random-container">
       
        {data.message? data.message.map((url, index) => (
          <div className="img-wrapper" key={index}>
            <img src={url} alt={`Image ${index}`} />
          </div>
        )):<p>silakan generate</p>}
          
        </Col>
      </Row>
    </Container>
  );
};

export default RandomImage;
