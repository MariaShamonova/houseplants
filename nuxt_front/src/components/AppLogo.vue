<template>
  <div class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <div
          class="header__mobile-menu"
          @click="isActive=!isActive"
          :class="{ 'active': isActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nuxt-link class="header__logo" to="/" @click.native="isActive=!isActive">
          <img src="../assets/img/Logo.png" alt width="92" height="89" />
        </nuxt-link>
      </div>
      <div class="header__right">
        <nav class="header__menu" :class="{ active: isActive }">
          <ul class="header__items">
            <li class="header__item">
              <nuxt-link class="header__link" @click.native="isActive=!isActive" to="/auth/products/shop">Магазин</nuxt-link>
            </li>
            <li class="header__item" @mouseover="menuHide = true">
             <nuxt-link class="header__link" @click.native="isActive=!isActive" to="/">Доставка и оплата</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link class="header__link" @click.native="isActive=!isActive" to="/">Контакты</nuxt-link>
            </li>
            <li class="header__item">
              <nuxt-link class="basket-logo" to="/"  @click.native="isActive=!isActive">
                <img src="../assets/img/basket.png" alt="" width="20">
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
 </div>
</template>



