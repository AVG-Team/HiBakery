import MenuItem from 'app/shared/layout/menus/menu-item';
import React from 'react';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/about">
        About
      </MenuItem>
      <MenuItem icon="asterisk" to="/bills">
        Bills
      </MenuItem>
      <MenuItem icon="asterisk" to="/discounts">
        Discounts
      </MenuItem>
      <MenuItem icon="asterisk" to="/images">
        Images
      </MenuItem>
      <MenuItem icon="asterisk" to="/order-detail">
        Order Detail
      </MenuItem>
      <MenuItem icon="asterisk" to="/orders">
        Orders
      </MenuItem>
      <MenuItem icon="asterisk" to="/password-reset-tokens">
        Password Reset Tokens
      </MenuItem>
      <MenuItem icon="asterisk" to="/product-category">
        Product Category
      </MenuItem>
      <MenuItem icon="asterisk" to="/product-detail">
        Product Detail
      </MenuItem>
      <MenuItem icon="asterisk" to="/products">
        Products
      </MenuItem>
      <MenuItem icon="asterisk" to="/setting-system">
        Setting System
      </MenuItem>
      <MenuItem icon="asterisk" to="/users">
        Users
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
