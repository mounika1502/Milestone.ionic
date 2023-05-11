
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
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
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },
  {
    path: 'add-shipper',
    loadChildren: () => import('./add-shipper/add-shipper.module').then( m => m.AddShipperPageModule)
  },
  {
    path: 'add-raw',
    loadChildren: () => import('./add-raw/add-raw.module').then( m => m.AddRawPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'dealermanagement',
    loadChildren: () => import('./dealermanagement/dealermanagement.module').then( m => m.DealermanagementPageModule)
  },
  {
    path: 'manufacturers',
    loadChildren: () => import('./manufacturers/manufacturers.module').then( m => m.ManufacturersPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)

  },
  {
    path: 'dealerorders',
    loadChildren: () => import('./dealerorders/dealerorders.module').then( m => m.DealerordersPageModule)

  },
  {
    path: 'ordermanage',
    loadChildren: () => import('./ordermanage/ordermanage.module').then( m => m.OrdermanagePageModule)

  },
  {
    path: 'viewdetails',
    loadChildren: () => import('./viewdetails/viewdetails.module').then( m => m.ViewdetailsPageModule)

  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)

  },
  {
    path: 'raw-product',
    loadChildren: () => import('./raw-product/raw-product.module').then( m => m.RawProductPageModule)

  },
  {
    path: 'raw-data',
    loadChildren: () => import('./raw-data/raw-data.module').then( m => m.RawDataPageModule)

  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },

  { path: 'raw-edit',
    loadChildren: () => import('./raw-edit/raw-edit.module').then( m => m.RawEditPageModule)

  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)

  },
  {
    path: 'blackgalaxy',
    loadChildren: () => import('./blackgalaxy/blackgalaxy.module').then( m => m.BlackgalaxyPageModule)

  },
  {
    path: 'galaxyroute',
    loadChildren: () => import('./galaxyroute/galaxyroute.module').then( m => m.GalaxyroutePageModule)
  },
  {
    path: 'inventory-data',
    loadChildren: () => import('./inventory-data/inventory-data.module').then( m => m.InventoryDataPageModule)

  },
  {
    path: 'inventory-edit',
    loadChildren: () => import('./inventory-edit/inventory-edit.module').then( m => m.InventoryEditPageModule)

  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'shippers',
    loadChildren: () => import('./shippers/shippers.module').then( m => m.ShippersPageModule)
  },
  {
    path: 'shipper-data',
    loadChildren: () => import('./shipper-data/shipper-data.module').then( m => m.ShipperDataPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
