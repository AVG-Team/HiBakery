import about from 'app/entities/about/about.reducer';
import bills from 'app/entities/bills/bills.reducer';
import discounts from 'app/entities/discounts/discounts.reducer';
import images from 'app/entities/images/images.reducer';
import orderDetail from 'app/entities/order-detail/order-detail.reducer';
import orders from 'app/entities/orders/orders.reducer';
import passwordResetTokens from 'app/entities/password-reset-tokens/password-reset-tokens.reducer';
import productCategory from 'app/entities/product-category/product-category.reducer';
import productDetail from 'app/entities/product-detail/product-detail.reducer';
import products from 'app/entities/products/products.reducer';
import settingSystem from 'app/entities/setting-system/setting-system.reducer';
import users from 'app/entities/users/users.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  about,
  bills,
  discounts,
  images,
  orderDetail,
  orders,
  passwordResetTokens,
  productCategory,
  productDetail,
  products,
  settingSystem,
  users,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
