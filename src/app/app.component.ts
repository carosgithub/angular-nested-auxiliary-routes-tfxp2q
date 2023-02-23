import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}

// @Component({
//   selector: 'app-level-0',
//   template: `
//     Level 0
//     <br/>
//     <router-outlet></router-outlet>
//     [#1<router-outlet name="outlet1"></router-outlet>]
//     <br/>`
// })
// export class Level0Component { }

// @Component({
//   selector: 'app-level-1',
//   template: `
//     Level 1
//     <br/>
//     <router-outlet></router-outlet>`
// })
// export class Level1Component { }

// @Component({
//   selector: 'app-level-2',
//   template: `
//     Level 2
//     <br/>
//     <router-outlet></router-outlet>
//     [#2<router-outlet name="outlet2"></router-outlet>]`
// })
// export class Level2Component { }

// @Component({
//   selector: 'app-level-3',
//   template: `Level 3`
// })
// export class Level3Component { }

// @Component({
//   selector: 'app-aux-1',
//   template: `Aux 1`
// })
// export class Aux1Component { }

// @Component({
// selector: 'app-aux-2',  
//   template: `Aux 2`
// })
// export class Aux2Component { }

// @Component({
// selector: 'app-aux-3',  
//   template: `Aux 3`
// })
// export class Aux3Component { }

// @Component({
// selector: 'app-aux-4',  
//   template: `Aux 4`
// })
// export class Aux4Component { }
