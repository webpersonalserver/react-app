import Home from "../pages/home";
import About from "../pages/home";
import NotFound from "../pages/home";

const routes = [{
    path: '/',
    exact: true,
    component: Home
},
{
    path: '/about',
    exact: true,
    component: About
},
{
    path: '*',
    component: NotFound
}];

export default routes;
