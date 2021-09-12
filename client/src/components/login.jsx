import React from 'react'

import { Container } from 'react-bootstrap';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=01a2ec4b724d4634854e54019b035a93&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Login = () => {
    return (
        <Container className = 'd-flex justify-content-md-center' style = {{ minHeigth : "100vh" }}>
            <a className="btn btn-success btn-lg" href ={ AUTH_URL } className = "  ">Login With Spotify</a>
        </Container>
    )
}

export default Login;
