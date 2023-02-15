import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left fixed-bottom'>
      <div className='text-center p-3 foot' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} ManiakApps.com - All rights reserved.
        <a className='text-dark' href='https://maniakapps.com/' target='_blank' rel='noopener noreferrer'>
          Visit website
        </a>
      </div>
    </MDBFooter>
  );
}
