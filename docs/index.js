/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import 'purecss/build/pure.css';
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import Notify from '../src/notify';

import './main.css';
// import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href={'https://github.com/kanitsharma/react-scrollnotify'}
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
      className="bottom"
    />
    <div className="bottom">
      <Notify onvisible={() => alert('Function is fired')}>
        <h1>
          If you see me function is fired
        </h1>
      </Notify>
    </div>
  </div>,
  document.getElementById('app')
);
