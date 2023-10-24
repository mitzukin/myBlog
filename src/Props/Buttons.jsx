import React from 'react';

const Buttons = ({ text }) => {
  return (
    <button className="px-4 py-3 text-xs rounded-sm text-pwhite font-Roboto bg-primary">
      {text}
    </button>
  );
};

export default Buttons;
