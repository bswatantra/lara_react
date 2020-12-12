import React from 'react'

import ReactDom from 'react-dom'
import App from './components/App'


if ( document.getElementById( 'root' ) )
{
	ReactDom.render( <App />, document.getElementById( 'root' ) );
}