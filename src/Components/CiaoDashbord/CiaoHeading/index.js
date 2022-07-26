import React from "react";

const CiaoHeading = (props) => {
  const { content, title, className } = props;
  return (
    <h1 className={className} title={title}>
      {content}
    </h1>
  );
};

export default CiaoHeading;