import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Aux1Component,
  Aux2Component,
  Aux3Component,
  Aux4Component,
  Level0Component,
  Level1Component,
  Level2Component,
  Level3Component
} from './ser.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Level0Component,
    data: { breadcrumb: 'Level 0' },
    children : [
      {
          path: 'level-1',
          component: Level1Component,
          data: { breadcrumb: 'Level 1' },
          children : [
              {
                  path: 'level-2',
                  component: Level2Component,
                  data: { breadcrumb: 'Level 2' },
                  children : [
                      {
                        path: 'level-3',
                        component: Level3Component,
                        data: { breadcrumb: 'Level 3' }
                      },
                      { path: 'aux-3', component: Aux3Component, outlet: 'outlet2'},
                      { path: 'aux-4', component: Aux4Component, outlet: 'outlet2'}
                  ]
              },
              { path: 'aux-1', component: Aux1Component, outlet: 'outlet1'},
              { path: 'aux-2', component: Aux2Component, outlet: 'outlet1'}
          ]
      },
      // { path: 'aux-1', component: Aux1Component, outlet: 'outlet1'},
      // { path: 'aux-2', component: Aux2Component, outlet: 'outlet1'}
    ]
  }
];

@NgModule({
  declarations: [
    Aux1Component,
    Aux2Component,
    Aux3Component,
    Aux4Component,    
    Level0Component,
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SerModule { }
