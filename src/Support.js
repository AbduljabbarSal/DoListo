import React from 'react';

const Support = () => {
  return (
      <div className='support'>

      <h1 className='home'>Support</h1>

      <ul>
          <li>
            <p className='homeText'>
            ⚪ Please contact cs@dolisto.ca for any inquiries
            </p>
          </li>

          <li>
            <p className='homeText'>
            ⚪  Mobile Application is not available as of 2022
            </p>
          </li>
          
          <li>
            <p className='homeText'>
            ⚪  Please click here to Donate to this project!
            </p>
            <a href="/About" className='homeText2'>Donate!</a>

          </li>
        </ul>
      </div>
    );
  }
   
  export default Support;