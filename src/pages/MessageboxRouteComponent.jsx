import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MessageboxListComopnent from '@components/MessageboxListComponent';
import MessageboxPostComponent from '@components/MessageboxPostComponent';
import { fetchMessagesRequest, postMessageRequest } from '@services/messagebox';
import { selectUsername } from '@redux/slices/userDataSlice';

const MessageboxRouteComponent = () => {
	const [messages, setMessages] = useState([]);
	const isLogged = useSelector(selectUsername) !== '';

	const fetchMessages = async () => {
		try {
			const newMessages = await fetchMessagesRequest();
			setMessages(newMessages);
		} catch (e) {
			console.warn(e);
		}
	};

	const postMessageAction = async (requestData) => {
		try {
			await postMessageRequest(requestData);

			fetchMessages();
		} catch (e) {
			console.warn(e);
		}
	};

	useEffect(() => fetchMessages(), []);
 
	return (
		<>
			{isLogged && <MessageboxPostComponent postMessageAction={postMessageAction} />}

			{isLogged && <MessageboxListComopnent messages={messages} />}
		</>
	);
};

export default MessageboxRouteComponent;
