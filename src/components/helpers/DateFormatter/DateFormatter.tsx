import React from 'react';

function DateFormatter({ dateString }: any) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return <p className="text-gray-500 text-xs mt-1 font-medium">{formattedDate}</p>;
}

export default DateFormatter;
