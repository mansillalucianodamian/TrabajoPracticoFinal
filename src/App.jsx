import React, {useContext, useState} from 'react'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChatSCreen from './Screens/ChatScreen/ChatScreen'
import StatusScreen from './Screens/StatusScreen/StatusScreen'
import ChannelScreen from './Screens/ChannelScreen/ChannelScreen'
import CommunityScreen from './Screens/CommunityScreen/CommunityScreen'

	

const App = () => {

	return (
	<div>
		<Routes>
			<Route
			path="/"
			element={<ContactScreen/>}
			/> 
			<Route
			path='/contact/:contact_id/messages'
			element={<ChatSCreen/>}
			/>
			<Route
			path='/status'
			element={<StatusScreen/>}
			/>
			<Route
			path='/channels'
			element={<ChannelScreen/>}
			/>
			<Route
			path='community'
			element={<CommunityScreen/>}
			/>
		</Routes>
			
	</div>
	)
}
export default App;





