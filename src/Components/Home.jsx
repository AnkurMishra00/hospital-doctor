import { Button } from '@chakra-ui/react'
import React from 'react'

import Details from './Details'
import InitialFocus from './Modal'

import ModalDoctor from './ModalDoctor'

const Home = () => {
    function Handle () {

    }
  return (
    <div>
        <div>
        <InitialFocus />
        {/* <Button onClick={Handle} style={{width:'100%' }} variant='outline' >Add Hospital</Button> */}
        <br />
        <br />
        {/* <Button style={{width:'100%'}} variant='outline' >Add Doctor</Button> */}
        <ModalDoctor />

        <Details />
       
    </div>
    </div>
  )
}

export default Home