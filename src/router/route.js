import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';

export default[
    {
        path:"/center",
        component:Center,
        meta:{show:true},
    },
    {
        path:"/paysuccess",
        component:PaySuccess,
        meta:{show:true},
    },
    {
        path:"/pay",
        component:Pay,
        meta:{show:true},
    },
    {
        path:"/trade",
        component:Trade,
        meta:{show:true},
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true},
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{show:true},
    },
    {
        path:"/detail/:skuId",
        component:Detail,
        meta:{show:true}
    },
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/search/:keyword",
        component:Search,
        meta:{show:true},
        name:"search"
    },
    {
        path:"/login",
        component:Login,
        meta:{show:false}
    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}
    },
    {
        //重定向到home页
        path:'*',
        redirect:"/home"
    }
]