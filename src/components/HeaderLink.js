import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ directionPoint, linkName }) => {
    return (
       <Link to={directionPoint}>{linkName}</Link>
    );
}

export default HeaderLink;
