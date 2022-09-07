import React from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left fixed-bottom'
                   style={{zIndex: "-99999", bottom: "0"}}>
            <div className='text-center p-3 foot' style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href='https://mdbootstrap.com/'>
                    ManiakApps.com
                </a>
            </div>
        </MDBFooter>
    );
}
