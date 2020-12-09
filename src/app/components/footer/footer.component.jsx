import React from 'react';

import './footer.scss';

export const FooterComponent = () => (
  <footer className="footer">
    &#64;
    {new Date().getFullYear()}
  </footer>
);
