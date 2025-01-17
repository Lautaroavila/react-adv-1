import { lazy, LazyExoticComponent } from 'react'
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, // LazyComponent o jsx.Element
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: Route [] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

]