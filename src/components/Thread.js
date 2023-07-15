import React from 'react';
import {
  MoreHorizontal,
  Heart,
  Repeat,
  Send,
  MessageCircle,
} from 'react-feather';

const Thread = ({ thread }) => {
  return (
    <div className='flex p-4'>
      <img
        className='w-12 h-12 rounded-full object-cover'
        src='https://avatars.githubusercontent.com/u/21971514?v=4'
      />
      <div className='w-full px-2 pb-4 border-b border-[rgba(49,49,50,1)]'>
        {/* Thread Header */}
        <div className='flex justify-between gap-2'>
          <strong>Shankar</strong>
          <div className='flex justify-between gap-2'>
            <p className='text-[rgba(97,97,97,1)]'>3 hours ago</p>
            <MoreHorizontal />
          </div>
        </div>
        {/* Thread body */}
        <div className='py-4'>
          <span>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour,
          </span>
        </div>
        <div className='flex gap-4 py-4'>
          <Heart size={22} />
          <MessageCircle size={22} />
          <Repeat size={22} />
          <Send size={22} />
        </div>

        <div className='flex gap-4'>
          <p className='text-[rgba(97,97,97,1)]'>Replied 16</p>
          <p className='text-[rgba(97,97,97,1)]'>.</p>
          <p className='text-[rgba(97,97,97,1)]'>25 likes</p>
        </div>
      </div>
    </div>
  );
};

export default Thread;
