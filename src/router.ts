import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { Component } from "vue";

interface RouteMenu {
  icon?: Component;
  isNavigator?: boolean;
  children?: (RouteRecordRaw & RouteMenu)[];
}

const routes: (RouteRecordRaw & RouteMenu)[] = [
  {
    path: "/home",
    component: import("./pages/home/index.vue"),
    children: [
      {
        path: "",
        component: import("./pages/pageAnalysis/index.vue"),
      },
      {
        path: "retentionAnalysis",
        component: import("./pages/retentionAnalysis/index.vue"),
      },
    ],
  },
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/:path",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes };

export default router;
