import home from './components/home.vue';
import follow from './components/follow.vue';
import detail from './components/detail.vue';
import chart from './components/chart.vue';
import person from './components/person.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import error from './components/error.vue';

const routes=[
  {path:'/home',component:home},
  {path:'/follow',component:follow},
  {path:'/detail/:id',component:detail},
  {path:'/chart',component:chart},
  {path:'/person',component:person},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}

]
export default routes
