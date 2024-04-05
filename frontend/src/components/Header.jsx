import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  // This uselocation helps to get the current location whete the user is like if the user is in / directorty the path will / this will be use to show the where the suer is in like if he is the home the home will be selected and will be active
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
          Blog
        </span>
      </Link>
      <form>
        <TextInput
          placeholder='Search'
          type='text'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline '
        />
      </form>
      <Button className='w-12 h-10 lg:hidden'>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
          <FaMoon />
        </Button>

        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>Sign IN</Button>
        </Link>
        {/* this gives use a collapse menu  */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/asbout'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
