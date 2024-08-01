import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faBell, faFolder, faClock, faStar, 
  faTh, faPlus, faQuestionCircle, faUser 
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-blue-900 text-white h-screen p-2 space-y-6">
      <FontAwesomeIcon icon={faHome} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faBell} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faFolder} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faClock} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faStar} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faTh} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faPlus} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faQuestionCircle} className="p-1 text-2xl transition-transform transform hover:scale-125" />
      <FontAwesomeIcon icon={faUser} className="p-1 text-2xl mt-auto transition-transform transform hover:scale-125" />
    </div>
  );
}

export default Sidebar;
