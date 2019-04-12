import React from 'react';

const ImgTextText = (props) => {
  return(
    <div className="ImgTextText">
      <h1><u>{props.about.title}</u></h1>
    <p className="mt-3">{props.about.paragraph}</p>
    </div>
  );
}

export default ImgTextText;
