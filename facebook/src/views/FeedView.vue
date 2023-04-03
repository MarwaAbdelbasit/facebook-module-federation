<template>
    <main>
        <nav class="nav">
            <ul>
                <li><h1>Feeds</h1></li>
            </ul>
        </nav>
        <div class="container">
            <div class="card" v-for="(feed, index) in feeds" :key="index">
                <h1 class="card__title">{{ feed.title }}</h1>
                <p class="card__body">{{ feed.body }}</p>
                <Parcel
                    v-on:parcel="likeParcelMounted()"
                    :config="likeParcelConfig"
                    :wrapWith="'div'"
                    :mountParcel="mountParcel"
                    :parcelProps="likeParcelProps()"
                />
                <!-- :parcelProps="vueParcelProps()" -->
            </div>
        </div>
    </main>
</template>

<script>
import feeds from '../data/feeds.json';
// import LikeBtn from '../../../like/src/components/LikeBtn.vue';
import Parcel from "single-spa-vue/parcel";
import { mountRootParcel } from "single-spa";

export default {
    name: 'FeedsView',

    computed: {
        feeds() { return feeds; }
    },

    data() {
        return {
            // eslint-disable-next-line no-undef
            likeParcelConfig: System.import("@like/like"),
            mountParcel: mountRootParcel,
        }
    },

    methods: {
        likeParcelMounted() {
            console.log('Like parcel mounted');
        },

        likeParcelProps() {
            return {
                btnText: ''
            }
        }
    },

    components: {
        Parcel
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
@import '../assets/styles/mixins';

.nav {
    background-color: $facebookBlue;
    color: $white;
    padding: 2rem 4rem;
}

.container {
    @include container(30px, 30px);
}

.card {
    @include card;
}
</style>