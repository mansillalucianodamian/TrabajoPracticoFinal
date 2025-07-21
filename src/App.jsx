import React, {useState} from 'react'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ChatSCreen from './Screens/ChatScreen/ChatScreen'

const App = () => {
	return (
	<div>
		<Routes>
			<Route
			path="/"
			element={<ContactScreen/>}
			/> {/* Ponemos :contact_id para indicar que es variable. */}
			<Route
			path='/contact/:contact_id/messages'
			element={<ChatSCreen/>}
			/>
		</Routes>
			
	</div>
	)
}
export default App;





