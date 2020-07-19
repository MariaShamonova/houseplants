<template>
    <div class="applications">
        <div class="applications__wrapper">
            <div class="applications__menu" :class="{ active: showMenu }">
                <no-ssr>
                    <vue-scroll>
                        <div class="applications__head">
                            <div class="applications-block applications-block_performers">
                                <div class="applications-block__header">
                                <b-form-checkbox
                                    aria-describedby="users"
                                    aria-controls="users"
                                    v-model="allSelectedUsers"
                                    @change="toggleAllUsers"
                                >Исполнители</b-form-checkbox>
                                <button   class="applications-block__add" >+</button>
                                
                                </div>
                                <div class="applications-block__body">
                                <b-form-group>
                                    <b-form-checkbox-group
                                    v-model="filters.users"
                                    :options="users"
                                    value-field="id"
                                    text-field="name"
                                    name="users"
                                    stacked
                                    ></b-form-checkbox-group>
                                </b-form-group>
                                </div>
                            </div>
                        </div>
                    </vue-scroll>
                </no-ssr>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>>