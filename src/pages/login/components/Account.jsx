import '../styles/login.css';
import { Tooltip } from 'antd';
import { useState } from 'react';
import { auth } from '../../../services/firebase';

const Account = ({name, pic}) => {

  let [isWarned, setIsWarned] = useState(false)
    , [popupText, setPopupText] = useState('Click the image to log out.');

  const showPopup = () => {
    if (isWarned) {
      auth.signOut();
      setIsWarned(false);
    } else {
      setPopupText('Click again to log out.');
      setIsWarned(true);
    }
  }

  return (
    <div className='account'>
      <div className='avatar'>
        
        <Tooltip title={popupText} placement='bottom' color='blue' open={isWarned}>
          <img className='avatar-image' loading='lazy' src={pic} alt={name} onClick={showPopup} />
        </Tooltip>
        
      </div>
      {name}
    </div>
  );
}

export default Account;