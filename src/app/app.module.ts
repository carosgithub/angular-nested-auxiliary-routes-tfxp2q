import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AppComponent,
  // Aux1Component,
  // Aux2Component,
  // Aux3Component,
  // Aux4Component,
  // Level0Component,
  // Level1Component,
  // Level2Component,
  // Level3Component
} from './app.component';

const appRoutes: Routes = [
    {
      path: 'level-0',
      loadChildren: () => import('./ser/ser.module').then(m => m.SerModule)
    },
  // {
  //   path: 'level-0',
  //   component: Level0Component,
  //   data: { breadcrumb: 'Level 0' },
  //   children : [
  //     {
  //         path: 'level-1',
  //         component: Level1Component,
  //         data: { breadcrumb: 'Level 1' },
  //         children : [
  //             {
  //                 path: 'level-2',
  //                 component: Level2Component,
  //                 data: { breadcrumb: 'Level 2' },
  //                 children : [
  //                     {
  //                       path: 'level-3',
  //                       component: Level3Component,
  //                       data: { breadcrumb: 'Level 3' }
  //                     },
  //                     { path: 'aux-3', component: Aux3Component, outlet: 'outlet2'},
  //                     { path: 'aux-4', component: Aux4Component, outlet: 'outlet2'}
  //                 ]
  //             }
  //         ]
  //     },
  //     { path: 'aux-1', component: Aux1Component, outlet: 'outlet1'},
  //     { path: 'aux-2', component: Aux2Component, outlet: 'outlet1'}
  //   ]
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    // Aux1Component,
    // Aux2Component,
    // Aux3Component,
    // Aux4Component,    
    // Level0Component,
    // Level1Component,
    // Level2Component,
    // Level3Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // , { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
