import React from 'react'

import Home from "../pages/Home";
import Room from "../pages/Room";
import CreateRoom from "../pages/CreateRoom";
import JoinRoom from "../pages/JoinRoom";

export default [
	{
		path: '/',
		exact: true,
		component: () => <Home />,
	},
	{
		path: '/room',
		component: () => <Room />,
	},
	{
		path: '/join-room',
		component: () => <JoinRoom />,
	},
	{
		path: '/create-room',
		component: () => <CreateRoom />,
	}
];