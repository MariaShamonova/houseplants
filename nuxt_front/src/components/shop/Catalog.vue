<template>
    <div class="catalog">
        <div class="catalog-head">
            <p>Главная/ Каталог/Декоративные растения</p>
        </div>
        <div class="catalog-body">
            <div class="product-list">
                <div 
                    class="product-list__item"
                    v-for="(plant, index) in plants"
                    :key="index"
                >
                    <div class="info-block">
                        <div class="info-block__photo">
                            <img :src="plant.image" class="photo" alt="">
                        </div>
                        <div class="info-block__decription"></div>
                    </div>
                </div>
            </div>
            <div class="view-more">
                <button class="view-more__button">Показать больше</button>
            </div>
            <div class="pagination-block">
                <div class="pagination-block__content">
                    <div class="pagination">
                        <div class="arrows arrows-left"><img src="/img/arrows-left.svg" alt=""></div>
                        <a href=""><p>1</p></a>
                        <a href=""><p>2</p></a>
                        <a href=""><p>3</p></a>
                        <div class="arrows arrows-right"><img src="/img/arrows-right.svg" alt=""></div>
                    </div>
                </div>
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