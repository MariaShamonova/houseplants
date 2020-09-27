<template>
    <div class="basket">
        <div class="basket__wrapper">
            <div class="basket-goods">
                <div class="basket-goods__wrapper">
                    <div class="basket-goods__title">
                        <div class="title-left">
                            <div class="title"><p>Корзина</p></div>
                           
                        </div>
                        <div class="title-right">
                            <button class="remove-products">Очистить корзину</button>
                        </div>
                    </div>
                    <div class="basket-goods__content">
                        <ul class="basket-goods__list">
                            <li class="basket-goods__item">
                                <div class="item__photo">
                                    <div class="wrapper">
                                        <img src="/img/plants-3.png" alt="">
                                    </div>
                                </div>
                                <div class="info-content">
                                    <div class="info-content__wrapper">
                                        <div class="product">
                                            <div class="product__title column">
                                                <div class="column__name">
                                                    <p>Аукуба японская</p>
                                                </div>
                                                <div class="column__content">
                                                    <p>Краткое описание растения</p>
                                                </div>
                                            </div>
                                            <div class="product__size column">
                                                <div class="column__name">
                                                    <p>Размер</p>
                                                </div>
                                                <div class="column__content">
                                                    <p>Маленький</p>
                                                </div>
                                            </div>
                                            <div class="product__color column">
                                                <div class="column__name">
                                                    <p>Цвет</p>
                                                </div>
                                                <div class="column__content">
                                                    <div class="circle-background" :style="`background: green`"></div>
                                                </div>
                                            </div>
                                            <div class="product__amount column">
                                                <div class="column__name">
                                                    <p>Кол-во</p>
                                                </div>
                                                <div class="column__content">
                                                    <div class="change-amount">
                                                        <div class="change-amount__item change-amount__button">-</div>
                                                        <div class="change-amount__item"><input type="text" placeholder="1"></div>
                                                        <div class="change-amount__item change-amount__button">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="summary">
                                            <div class="summary__wrapper">
                                                <p>1200 Р</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-content__buttons">
                                        <div class="buttons__wrapper">
                                            <div class="button">Удалить из корзины</div>
                                            <div class="button">Добавить в избранное</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="basket-goods__item">
                                <div class="item__photo">
                                    <div class="wrapper">
                                        <img src="/img/plants-3.png" alt="">
                                    </div>
                                </div>
                                <div class="info-content">
                                    <div class="info-content__wrapper">
                                        <div class="product">
                                            <div class="product__title column">
                                                <div class="column__name">
                                                    <p>Аукуба японская</p>
                                                </div>
                                                <div class="column__content">
                                                    <p>Краткое описание растения</p>
                                                </div>
                                            </div>
                                            <div class="product__size column">
                                                <div class="column__name">
                                                    <p>Размер</p>
                                                </div>
                                                <div class="column__content">
                                                    <p>Маленький</p>
                                                </div>
                                            </div>
                                            <div class="product__color column">
                                                <div class="column__name">
                                                    <p>Цвет</p>
                                                </div>
                                                <div class="column__content">
                                                    <div class="circle-background" :style="`background: green`"></div>
                                                </div>
                                            </div>
                                            <div class="product__amount column">
                                                <div class="column__name">
                                                    <p>Кол-во</p>
                                                </div>
                                                <div class="column__content">
                                                    <div class="change-amount">
                                                        <div class="change-amount__item change-amount__button">-</div>
                                                        <div class="change-amount__item"><input type="text" placeholder="1"></div>
                                                        <div class="change-amount__item change-amount__button">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="summary">
                                            <div class="summary__wrapper">
                                                <p>1200 Р</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-content__buttons">
                                        <div class="buttons__wrapper">
                                            <div class="button">Удалить из корзины</div>
                                            <div class="button">Добавить в избранное</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="busket__right">
            
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    props: {
        plants: { type: [Array, Object] }
    }
}
</script>