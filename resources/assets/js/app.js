
require('./bootstrap');
import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'

import Example from './components/Example'
import Master from './components/Master'

render(<Master/>, document.getElementById('example'));

