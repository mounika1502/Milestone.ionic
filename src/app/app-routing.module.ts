
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './route.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'add-shipper',
    loadChildren: () => import('./add-shipper/add-shipper.module').then( m => m.AddShipperPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'add-raw',
    loadChildren: () => import('./add-raw/add-raw.module').then( m => m.AddRawPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule),canActivate:[RouteGuard]
  },  
  {
    path: 'dealermanagement',
    loadChildren: () => import('./dealermanagement/dealermanagement.module').then( m => m.DealermanagementPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'manufacturers',
    loadChildren: () => import('./manufacturers/manufacturers.module').then( m => m.ManufacturersPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'dealerorders',
    loadChildren: () => import('./dealerorders/dealerorders.module').then( m => m.DealerordersPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'ordermanage',
    loadChildren: () => import('./ordermanage/ordermanage.module').then( m => m.OrdermanagePageModule),canActivate:[RouteGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),canActivate:[RouteGuard]
  },
  {
    path: 'raw-product',
    loadChildren: () => import('./raw-product/raw-product.module').then( m => m.RawProductPageModule)
  },
  {
    path: 'raw-data',
    loadChildren: () => import('./raw-data/raw-data.module').then( m => m.RawDataPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),canActivate:[RouteGuard]
  },
  { path: 'raw-edit',
    loadChildren: () => import('./raw-edit/raw-edit.module').then( m => m.RawEditPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'blackgalaxy',
    loadChildren: () => import('./blackgalaxy/blackgalaxy.module').then( m => m.BlackgalaxyPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'galaxyroute',
    loadChildren: () => import('./galaxyroute/galaxyroute.module').then( m => m.GalaxyroutePageModule),canActivate:[RouteGuard]
  },
  {
    path: 'inventory-data',
    loadChildren: () => import('./inventory-data/inventory-data.module').then( m => m.InventoryDataPageModule),canActivate:[RouteGuard]
 },
  {
    path: 'inventory-edit',
    loadChildren: () => import('./inventory-edit/inventory-edit.module').then( m => m.InventoryEditPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'shippers',
    loadChildren: () => import('./shippers/shippers.module').then( m => m.ShippersPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'shipper-data',
    loadChildren: () => import('./shipper-data/shipper-data.module').then( m => m.ShipperDataPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'companydetails',
    loadChildren: () => import('./companydetails/companydetails.module').then( m => m.CompanydetailsPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'mobile-login',
    loadChildren: () => import('./mobile-login/mobile-login.module').then( m => m.MobileLoginPageModule)
  },
  {
    path: 'shipper-edit',
    loadChildren: () => import('./shipper-edit/shipper-edit.module').then( m => m.ShipperEditPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'password-update',
    loadChildren: () => import('./password-update/password-update.module').then( m => m.PasswordUpdatePageModule)
  },
  {
    path: 'dealers',
    loadChildren: () => import('./dealers/dealers.module').then( m => m.DealersPageModule),canActivate:[RouteGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs/tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tabs/tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
