import React from 'react';
import ReactDom from 'react-dom';

import IndexRouter from './routers/router';

let App = IndexRouter();

ReactDom.render(App, document.getElementById('app'));
