import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Scrolltop() {
    const {pathname}=useLocation(); 
    useEffect(()=>{
        window,scrollTo(0,0);
    },[pathname])
  return null;
}

export default Scrolltop
// this component used for ,if navigating  to another page its shows from top