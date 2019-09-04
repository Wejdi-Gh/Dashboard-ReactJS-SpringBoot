import AddNewMember from '../../AddNewMember/AddNewMember'
import Members from '../../Members/Members'
import MovieList from '../../MovieList/MovieList'
import NotFoudPage from '../../../Common/NotFoudPage/NotFoudPage'
import HomePage from '../../HomePage/HomePage'

export const routes = [ {
    path: '/',
    component: HomePage,
    name: 'Home Page '
},
{
    path: '/movies',
    component: MovieList,
    name: 'movies List', 
},
{
    path: '/members',
    component: Members,
    name: 'Members List'
},
{
    path: '/newuser',
    component: AddNewMember,
    name: 'Add New User'
},

{
  
    component: NotFoudPage,
    name: 'Not Found Page'
}
]