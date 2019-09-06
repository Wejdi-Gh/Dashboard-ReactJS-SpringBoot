import AddNewMember from '../../AddNewMember/AddNewMember'
import Members from '../../Members/Members'
import MovieList from '../../MovieList/MovieList'
import HomePage from '../../HomePage/HomePage'
import NotFoundPage from '../../../Common/NotFoudPage/NotFoudPage'

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
  
    component: NotFoundPage ,
    name: 'Not Found Page'
}
]