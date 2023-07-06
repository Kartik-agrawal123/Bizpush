import React, { useState } from 'react';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="rounded-full h-4 w-4" />
    </div>
  );
};
export default CheckBox;