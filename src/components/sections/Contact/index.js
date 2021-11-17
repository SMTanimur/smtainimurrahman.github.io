import React, { useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiArrowRightUpLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { email } from 'src/helpers';
import { useDetectOutsideClick } from 'src/hooks';

const Contact = () => {
  const dropdownRef = useRef(null);
  const [isActive, setActive] = useDetectOutsideClick(dropdownRef, false);
  const [value, setValue] = useState('mushfiqurtanim@gmail.com');
  const [copied, setCopied] = useState(false);

  const clickHandler = () => setActive(!isActive);

  return (
    <section className='bg-[#181B27] py-14 px-7 md:px-3' id="contact" >
      <div className='max-w-[600px] container mx-auto flex flex-col items-center text-center leading-6 relative'>
        <h2 className='text-[2.5rem] pb-7 text-[#98b4d4]'>Get In Touch</h2>
        <Fade bottom>
          <p className='text-gray-light text-[15px] md:text-[17px] pb-7 '>
            I’m currently <span className='text-[#A4E3C7] font-bold'> looking for any new opportunities</span>. My
            inbox is always open for your job offers! Whether you have a
            question or just want to say hi, I'll be happy to help and talk!
          </p>
          <button onClick={clickHandler} className='btn py-3 '>
            Say Hello! <span>🤟</span>
          </button>
        </Fade>
        <nav ref={dropdownRef} className={"py-6 opacity-0 bg-gray-lightest px-4 rounded-lg absolute top-6  "+(isActive?"opacity-[100]":null)}>
          <ul className="w-full">
            <li className="bg-blue-400 py-1 px-2 flex justify-between text-white  text-sm rounded-md">
              <input type='text' value={value} disabled className='text-sm text-white ' />
              <CopyToClipboard
                text={value}
                onCopy={() => setCopied(true)}
              >
                <button className='ml-3'>{copied ? 'Copied' : 'Copy'}</button>
              </CopyToClipboard>
            </li>
            <li className='mt-2 w-full bg-gray-700 py-1 px-2 rounded-md text-white'>
              <a href={`mailto:${email.email}`} className=' w-full'>
               Open in Email Client
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Contact;
