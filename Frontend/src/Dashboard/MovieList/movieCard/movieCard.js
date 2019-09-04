import React, { Component } from 'react';
import {Card , Button} from 'react-bootstrap';
import {image_url } from '../../Constants/movie-uri-constants'

import './movieCard.css'

class MovieCard extends Component {
    
   
    render() {
        return (

            <Card >
                <Card.Img variant="top" src={image_url + this.props.movie.poster_path }/>
                <Card.Body>
                    <Card.Title>{this.props.movie.original_title}</Card.Title>
                    <Card.Text>
                        {this.props.movie.overview}
                     </Card.Text>
                    <Button variant="elegant">Go somewhere</Button>
                </Card.Body>
            </Card>

        )
    }
}

export default MovieCard;