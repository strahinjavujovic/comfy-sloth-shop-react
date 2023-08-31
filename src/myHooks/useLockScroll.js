import React from 'react';
const useLockScroll = () => { 
  const lockScroll = React.useCallback(() => { 
    
  document.body.style.overflow = 'hidden';
  }, [])

  const unlockScroll = React.useCallback(() => { 
    
  document.body.style.overflow = '';
  }, []);

  return {
    lockScroll,
    unlockScroll
  };  
}
export default useLockScroll;