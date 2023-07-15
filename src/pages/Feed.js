import React from 'react';

import Thread from '../components/Thread';

export const Feed = () => {
  return (
    <div className='container mx-auto max-w-[600px]'>
      <Thread />
      <Thread />
      <Thread />
    </div>
  );
};
