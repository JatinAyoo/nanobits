import React from 'react';
import '../tailwind.css'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-md border-b-[0.75px] border-borderbottom py-0" style={{backgroundColor: '#1E1E1E'}} data-bs-theme="dark">
      <div className="container mx-auto flex items-center">
        <a className="ml-2 md:ml-0 mr-auto md:mr-2 navbar-brand fw-bold" href="https://thenanobits.com">
          <img src="https://cdn.thenanobits.com/logo-full.png" alt="Nanobits Logo" className="inline-block align-text-top h-7" />
          <sup ><small className="text-xs badge text-bg-warning">Beta</small></sup>
        </a>
        
        <ul className="navbar-nav main-nav me-auto mb-md-0 flex">
          {/* <li className="nav-item">
            <a className="nav-link py-[15px] px-[10px] inline-flex items-center active text-white" aria-current="page" href="https://thenanobits.com">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15 31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79 10 7.8V26Z"></path>
              </svg>
              <span className="pl-1">Home</span>
            </a>
          </li> */}
          <li className="nav-item">
            <a className={`nav-link py-[15px] px-[10px] inline-flex items-center text-white ${location.pathname === '/' ? 'active' : 'text-gray-300'}`} aria-current="page" href="/">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15 31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79 10 7.8V26Z"></path>
              </svg>
              <span className="pl-1">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link py-[15px] px-[10px] inline-flex items-center text-white ${location.pathname === '/jobs' ? 'active' : ''}`} aria-current="page" href="/jobs">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path fill="currentColor" d="M32 28H4v-6.68a7.1 7.1 0 0 1-2-1.43V28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-8.11a6.7 6.7 0 0 1-2 1.42Z"></path>
                <path fill="currentColor" d="M25 22.4a1 1 0 0 0 1-1v-5.46h-2V18H14v2h10v1.4a1 1 0 0 0 1 1"></path>
                <path fill="currentColor" d="M33 6h-9V4.38A2.42 2.42 0 0 0 21.55 2h-7.1A2.42 2.42 0 0 0 12 4.38V6H3a1 1 0 0 0-1 1v8a5 5 0 0 0 5 5h3v1.4a1 1 0 0 0 2 0v-5.46h-2V18H7a3 3 0 0 1-3-3V8h28v7a3 3 0 0 1-3 3h-1v2h1a5 5 0 0 0 5-5V7a1 1 0 0 0-1-1M22 6h-8V4.43a.45.45 0 0 1 .45-.43h7.11a.43.43 0 0 1 .44.42Z"></path>
              </svg>
              <span className="pl-1.5">Jobs</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link py-[15px] px-[10px] inline-flex items-center text-white" aria-current="page" href="/news">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2m0 16H4.125c-.057 0-.096-.016-.113-.016q-.01 0-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046"></path>
                <path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z" fill="currentColor"></path>
              </svg>
              <span className="pl-1">News</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link py-[15px] px-[10px] inline-flex items-center text-white" aria-current="page" href="/tools">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 32 32">
                <path fill="currentColor" d="m23.1 16 6.3-6.3c.8-.8.8-2 0-2.8l-4.2-4.2c-.8-.8-2-.8-2.8 0L16 8.9 9.7 2.6c-.8-.8-2-.8-2.8 0L2.6 6.8c-.8.8-.8 2 0 2.8L8.9 16 2 22.9V30h7.1l6.9-6.9 6.3 6.3c.8.8 2 .8 2.8 0l4.2-4.2c.8-.8.8-2 0-2.8zm.7-12L28 8.2l-6.3 6.3-4.2-4.2zM8.2 28H4v-4.2l6.3-6.3 4.2 4.2zm15.6 0L4 8.2 8.2 4l3.5 3.5-2.1 2.1L11 11l2.1-2.1 4.2 4.2-2.1 2.1 1.4 1.4 2.1-2.1 4.2 4.2-1.9 2.2 1.4 1.4 2.1-2.1 3.5 3.5z"></path>
              </svg>
              <span className="pl-1">Tools</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link py-[15px] px-[10px] inline-flex items-center text-white" href="/newsletter" target="_blank" rel="noopener noreferrer">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="">
                <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0"></path>
                <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3"></path>
              </svg>
              <span className="pl-1.5">Newsletter</span>
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto md:mr-2 flex space-x-4">
          <li className="nav-item">
            <a className="nav-link text-white py-3 px-2.5" href="/login">Login</a>
          </li>
        </ul>

        {/* <a className="btn btn-primary ms-2 d-none d-lg-block" href="/newsletter" target="_blank">
          Subscribe <span className="d-none d-lg-inline-block">to Newsletter</span>
        </a> */}
        <button className="bg-primary rounded-md text-white ml-2 px-3 py-1.5 hidden lg:block"href="/newsletter">Subscribe to Newsletter</button>
      </div>
    </nav>
  );
}

export default Navbar;
