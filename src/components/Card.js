import React, { Fragment } from 'react';
import './Card.css'

const Card = ({id, name, email }) => {
  // const {id, name, email } = props;
  return (
    <Fragment>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2 title={name}>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;