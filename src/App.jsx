import React, { useState } from 'react'
import Modal from './Modal'
import './global.css'
import SignUp from './SignUp';
const App = () => {
    let [toggle , setToggle] = useState(false);
    let handleToggle = ()=>{
        setToggle(!toggle);
    }
  return (

    <div className='main-content'>
        <button onClick={handleToggle}> {toggle? 'close': 'open'}</button>
        {toggle ?<Modal toggle ={{toggle, handleToggle}}>
            <SignUp />
        </Modal> : ("") }

    </div>
  )
}

export default App