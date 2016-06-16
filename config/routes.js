import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from '../app/components/Header/Header';
import Saved from  '../app/components/Saved/Saved';
import Search from '../app/components/Search/Search';

module.exports = (
	<Route path="/" component={Header}>
		{/*<Route path='saved' component={Saved} />*/}
		<IndexRoute component={Search} />
	</Route>
)