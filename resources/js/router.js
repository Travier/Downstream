import Vue from 'vue';
import VueRouter from 'vue-router';

//import CollectionPage from './pages/collection';
import Collection2 from './pages/collection2';
//import SearchPage from './pages/search';
import DiscoverPage from './pages/discover';
import UserProfile from './pages/user/profile';

import ListIndex from './pages/lists/index';
import ListCreate from './pages/lists/create';

import MediaEdit from './pages/media/edit';

Vue.use(VueRouter);

/*
	Single Page Router

	each route must be named to seperate laravel paths from vue-router paths	
*/
const routes = [
  { 
  	name:'discover',
  	path: '/discover', 
  	component: DiscoverPage 
  },
  { 
  	name:'collection',
  	path: '/collection/:filter?', 
  	component: Collection2 
  },
  { 
	name:'collection2',
	path: '/collection2', 
	component: Collection2 
  },
  /*{ 
  	name:'search',
  	path: '/search', 
  	component: SearchPage 
  },*/
  {
	name: 'listIndex',
	path: '/lists',
	component: ListIndex
  },
  {
	name: 'listsCreate',
	path: '/list/create',
	component: ListCreate
  },
  { 
  	name:'userProfile',
  	path: '/user/:hash/profile', 
  	component: UserProfile
	},
	{
		name:'mediaEdit',
		path: '/media/edit/:id',
		component: MediaEdit,
		props: { id: false }
	}
];

export default new VueRouter({
	mode: 'history',
	routes
});