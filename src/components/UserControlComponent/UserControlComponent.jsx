import { useDispatch } from 'react-redux';

import { setUserData } from '@redux/slices/userDataSlice';
import { userLoginRequest } from '@services/authentication';

const UserControlComponent = () => {
	const dispatch = useDispatch();

	userLoginRequest()
		.then((data) => console.warn(data) || dispatch(setUserData(data)))
		.catch((err) => console.error(err));

	return null;
};

export default UserControlComponent;
