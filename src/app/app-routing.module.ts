import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert/alert.module').then((m) => m.AlertPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./pages/avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./pages/buttons/buttons.module').then((m) => m.ButtonsPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./pages/checkbox/checkbox.module').then(
        (m) => m.CheckboxPageModule
      ),
  },
  {
    path: 'datetime',
    loadChildren: () =>
      import('./pages/datetime/datetime.module').then(
        (m) => m.DatetimePageModule
      ),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./pages/fab/fab.module').then((m) => m.FabPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./pages/grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'infinite',
    loadChildren: () =>
      import('./pages/infinite/infinite.module').then(
        (m) => m.InfinitePageModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/input/input.module').then((m) => m.InputPageModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'list-reorder',
    loadChildren: () =>
      import('./pages/list-reorder/list-reorder.module').then(
        (m) => m.ListReorderPageModule
      ),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./pages/modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'popover',
    loadChildren: () =>
      import('./pages/popover/popover.module').then((m) => m.PopoverPageModule),
  },
  {
    path: 'progress',
    loadChildren: () =>
      import('./pages/progress/progress.module').then(
        (m) => m.ProgressPageModule
      ),
  },
  {
    path: 'refresh',
    loadChildren: () =>
      import('./pages/refresh/refresh.module').then((m) => m.RefreshPageModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toasts',
    loadChildren: () => import('./pages/toasts/toasts.module').then( m => m.ToastsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
