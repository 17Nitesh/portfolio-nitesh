import Nav from './assets/Nav.jsx';
import Home from './assets/Home.jsx'
import About from './assets/About.jsx';
import Skills from './assets/Skills.jsx';
import Project from './assets/Project.jsx';
import Contact from './assets/Contact.jsx';
import { useState } from 'react';
export default function App() {
  // const [state, setState] = useState('Home');

  // const changeStateNav = (x) =>{
  //   setState(x);
  //   console.log(x);
  // }
  return (
    <>
    <div className='bg-gradient-to-r from-black to-gray-900'>
    <Nav className="nav"/>
    <section className="Home"><Home /></section>
    <section className="About"><About /></section>
    <section className="Skills"><Skills /></section>
    <section className="Project"><Project /></section>

    <section className="Contact"><Contact /></section>

    </div>

    </>
  )
}