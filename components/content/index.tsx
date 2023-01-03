import * as React from 'react';
import About from '../about';
import Technologies from '../technology';

const Content = () => {
  return (
    <div>
      <main className='px-56 h-screen'>
        <div className='text-7xl font-black mt-20 mb-4'>
          <div>
            Hello, <span className='bg-emerald-400 px-6'>World!</span>
          </div>
          <div className='mt-6'>
            I'm <span className='bg-rose-300 px-6'>Hùng</span>
          </div>
        </div>
        <p>A Software Engdđineer who mainly use Javascript to build things</p>
        <div>
          {/* <button className='box-shadow-button bg-emerald-400'>Project</button>
        <button className='box-shadow-button bg-rose-300'>About</button> */}
        </div>
      </main>
      <About></About>
      <Technologies></Technologies>
      <Project></Project>
    </div>
  );
};

export default Content;
