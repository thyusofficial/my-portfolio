import React, { useRef } from 'react';

import Menu from '~/components/Menu';
import Home from '~/components/Home';
import About from '~/components/About';
import Resume from '~/components/Resume';
import Contact from '~/components/Contact';

export default function Route() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Menu
        homeRef={homeRef}
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        contactRef={contactRef}
      />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Resume resumeRef={resumeRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}
