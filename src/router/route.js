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
import { reqMyOrderList } from '@/api';

export default [
    {
        path: "/center",
        component: Center,
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'groupbuy',
                component:GroupBuy
            },
            {
                path:'',
                redirect:'myorder'
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        beforeEnter(to, from, next) {
            if (from.path === '/pay') {
                next()
            } else {
                next('/pay')
            }
        }
    },
    {
        path: "/pay",
        component: Pay,
        props: route => ({ orderId: route.query.orderId }),
        beforeEnter: (to, from, next) => {
            if (from.path === "/trade") {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next()
            } else {
                next('/shopcart')
            }
        }
    },
    {
        path: "/shopcart",
        component: ShopCart,
    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        beforeEach(to, from, next) {
            const skuNum = to.query.skuNum
            const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
            console.log('---', skuNum, skuInfo)
            if (skuNum && skuInfo) {
                next()
            } else {
                next('/')
            }
        },
    },
    {
        path: "/detail/:skuId",
        name: "detail",
        component: Detail,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/search/:keyword",
        component: Search,
        props: route => ({ keyword3: route.params.keyword, keyword4: route.query.keyword2 }),
        name: "search"
    },
    {
        path: "/login",
        component: Login,
        meta: { isHideFooterL:true}
    },
    {
        path: "/register",
        component: Register,
        meta: { isHideFooter:true }
    },
]