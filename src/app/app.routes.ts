import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent : () =>{
            return import('../app/home-page/home-page.component').then((m)=>{
                return m.HomePageComponent;
            })
        }
    },
    {
        path:'home',
        pathMatch:'full',
        loadComponent : () =>{
            return import('../app/home-page/home-page.component').then((m)=>{
                return m.HomePageComponent;
            })
        }
    },
    {
        path:'generatereport',
        pathMatch:'full',
        loadComponent : () =>{
            return import('../app/components/generatereport/generatereport.component').then((m)=>{
                return m.GeneratereportComponent;
            })
        }
    }
];
