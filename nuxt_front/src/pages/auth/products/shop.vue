<template>
    <div class="applications">
        <div class="applications__wrapper">
            <div class="applications__menu">
                <no-ssr>
                    <vue-scroll>
                        <div class="applications__head">
                            <h3>Каталог</h3>
                            <div class="applications-block applications-block_performers">
                                <div class="applications-block__header">
                                    Категории
                                </div>
                                <div class="applications-block__body">
                                    <ul class="category">
                                        <li 
                                            class="category__item"
                                            v-for="category in categories"
                                            :key="category"
                                        >
                                            {{category.name}}
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="applications-block applications-block_performers">
                                <div class="applications-block__header">
                                Фильтр
                                </div>
                                <div class="title-price">Цена</div>
                                <div class="applications-block__body">
                                    <div class="filter-price">
                                        <input v-model.number="filters.minPrice" type="number">
                                        <input v-model.number="filters.maxPrice" type="number">
                                        <button>Применить</button>
                                    </div>  
                                </div>
                            </div>
                            <div class="applications-block applications-block_performers">
                                <div class="applications-block__header">
                                Размер
                                </div>
                                <div class="applications-block__body">
                                    <ul class="category">
                                        <li 
                                            class="category__item"
                                            v-for="(category,i) in categories"
                                            :key="i"
                                        >
                                            {{category.name}}
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="applications-block applications-block_performers">
                                <div class="applications-block__header">
                                Цвет
                                </div>
                                <div class="applications-block__body">
                                    <ul class="filter-color">
                                        <li
                                            class="filter-color__item"
                                            v-for="(color, i) in colors"
                                            :key="i"
                                        >
                                            <div class="circle-background" :style="`background: `+ color.name"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </vue-scroll>
                </no-ssr>
            </div>
            <div class="applications__page">
                <no-ssr>
                    <app-catalog
                        :plants="plants"
                    >
                    </app-catalog>
                </no-ssr>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    async fetch({ store }) {
        await store.dispatch("dev/category/getCategory", []);
        await store.dispatch("dev/plants/getPlants", []);
        await store.dispatch("dev/size/getSizes", []);
        await store.dispatch("dev/color/getColors", []);
    },
    data() {
        return {
            filters: {
                minPrice: [],
                maxPrice: []     
            },
        }
    },
    mounted(){
    },
    computed: {
        ...mapGetters({
            plants: "dev/plants/items",
            categories: "dev/category/items",
            sizes: 'dev/size/items',
            colors: 'dev/color/items'
        })
    },
    methods: {
        
    },
    watch: {
        plants: {
            handler(bef){
                this.filters.minPrice = this.minPriceAll;
                this.filters.maxPrice = this.maxPriceAll;
            },
            deep: true
        },
        filters: {
            handler (newFilter) {
                this.$emit('filter', newFilter);
            },
            deep: true
        }
    }
    
}
</script>>