import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const clickHandler = () => {
  console.log("in clickHandler");
  axios.get("https://turntableapp.herokuapp.com/auth/spotify")
  .then((resp)=>window.open(resp.request.responseURL, "_self"))
  .then((spotifyResp)=>(<Welcome username={spoifyResp.spotifyId}/> ) )
}

const Title = ( { name } ) => {
  console.log("in title");
    return (
      <div>
        <button onClick={()=>(clickHandler())}>Login with Spotify</button>
      </div>

          );
};

const Welcome = ( { username } ) => {
  return(
    <div>
      Welcome {username}!
    </div>
  )
}

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
