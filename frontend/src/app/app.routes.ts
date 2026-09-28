import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './pages/home/home';
import { AiTools } from './pages/ai-tools/ai-tools';
import { Login } from './pages/login/login';
import { AiToolDetails } from './pages/ai-tool-details/ai-tool-details';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'ai-tools/:id',
        component: AiToolDetails,
      },
      {
        path: 'ai-tools',
        component: AiTools,
      },
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'signup',
        component: Signup,
      },
    ],
  },
];
