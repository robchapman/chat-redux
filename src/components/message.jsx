import React from 'react';

const Message = (props) => {
  return (
    <div className="list-group-item" >
      {props.city.name}
    </div>);
};

export default Message;
