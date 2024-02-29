
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./PodcastDetails.css";
import { Card, Container } from '@mui/material';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import "./PodcastDetails.css"

const PodcastDetails = () => {
  const {id}= useParams();
  const [podcast, setPodcast]= useState({
    title:"",
    sub_title:"",
    description:"",
    image:"",
    audio:"",
    video:"",
    text:"",
    guest:"",
    host:""

  });
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [textFile, setTextFile] = useState(null);
  useEffect(()=>{
    loadpodcast();
  },[]);
  const loadpodcast= async()=>{
    const result= await axios.get(`http://localhost:8080/podcast/${id}`);
    console.log(result.data)
    setPodcast(result.data);
  }


    return (
      <div className='container'>
        {podcast && (
          <>
          <div className='row'>
            <h1 className='text-center'>{podcast.title}</h1>
            
            <div><span className="text bold">Sub_Title:</span>
            <span className='text'>{podcast.sub_title}</span>
            </div>
            <hr />
            <div><span className="text bold">Description:</span>
            <span className='text'>{podcast.description}</span>
            </div>
            {/* <h4>Overview:</h4> */}
            <hr />
            <div><span className="text bold">Guest:</span>
            <span className='text'>{podcast.guest}</span>
            </div>
            <div><span className="text bold">Host:</span>
            <span className='text'>{podcast.host}</span>
            </div> 
            
            <div>
              <span className="text bold">Category:</span>
               <span className='text'>{podcast.category}
                </span>
            </div>

              <div>
                <span className="text bold">
              Language:</span>
              <span className='text'> {podcast.language}
              </span>
              </div>

              <div>
                <span className='text bold'>
            Created Date: </span>
            <span className='text'>{podcast.publish_date}
            </span>
            
            </div>
           </div>
  
            
            <Row className='col-md-12 offset-md border rounded p-4 mt-2 shadow'>
            <h2 className='text-center'>Episodes</h2>
              {/* {podcast.episodes.map(episode => (
                <Col key={episode.id} md={4}>
                  <Card>
                    <Card.Img variant="top" src={episode.image} />
                    <Card.Body>
                      <Card.Title>{episode.title}</Card.Title>
                      <Card.Text>{episode.description}</Card.Text>
                      <audio controls src={episode.audio}></audio>
                      <video controls src={episode.video}></video>
                      <img src={episode.image} alt="Episode" />
                      <p>Transcript: {episode.transcript}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))} */}
              <div className="cardDiv">
                <span className="ribbon">
                  <h3>PENDING</h3>
                </span>
                <img src="../src/media/1.jpg" alt="" />
                <h1 className='text-center cardhead'>{podcast.title}</h1>
              </div>
               <div className="float-right mt-5"><Link className="btn btn-outline-primary float-right"  to={"/addEpisode"}
               >Add New Episodes</Link></div>
            </Row>
          </>
        )}
      </div>
    );
  };
export default PodcastDetails;
