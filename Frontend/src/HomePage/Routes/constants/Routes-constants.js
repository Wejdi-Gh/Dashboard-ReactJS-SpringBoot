
import Signup from '../../Signup/Signup';
import Login from '../../Login/Login';
import Home from '../../Home/Home';
import NotFoundPage from '../../../Common/NotFoudPage/NotFoudPage'

export const routes = [ {
    path: '/signup',
    component: Signup,
    name: 'signup'
},
{
    path: '/login',
    component: Login,
    name: 'login',
},
{
    path: '/',
    component: Home,
    name: 'home'
},
{
  
    component: NotFoundPage  ,
    name: 'home'
}
]