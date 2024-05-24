import { Screens } from '../types/navigation';
import { getPosts, getPostsProfile } from '../utils/firebase';

export const getPostsAction = async (posts: any) => {
	//Ir al utils de firebase y ejecutar la función getPosts
	// const posts = await getPosts();
	return {
		action: 'GETPOSTS',
		payload: posts,
	};
};

export const getPostsProfileAction = async (idUser: string) => {
	//Ir al utils de firebase y ejecutar la función getPostsProfile
	const postsProfile = await getPostsProfile(idUser);
	return {
		action: 'GETPOSTSPROFILE',
		payload: postsProfile,
	};
};

export const navigate = (screen: Screens) => {
	return {
		action: 'NAVIGATE',
		payload: screen,
	};
};

export const setUserCredentials = (user: string) => {
	return {
		action: 'SETUSER',
		payload: user,
	};
};
