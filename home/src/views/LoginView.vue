<template>
  <main>
    <div class="container">
        <div class="content">
            <h1 class="content__title">facebook</h1>
            <p class="content__description">Facebook helps you connect and share with the people in your life.</p>
        </div>

        <div class="form">
            <input type="text" class="form__username" placeholder="Username" v-model="username">
            <input type="password" class="form__password" placeholder="Password" v-model="password">
            <button class="form__login_btn" @click="login">Log in</button>
            <span v-if="empty_field" class="form__invalid">Please, Enter username and password !</span>
            <span v-if="invalid_data" class="form__invalid">Username or Password not valid</span>
        </div>
    </div>
  </main>
</template>

<script>
import users from '../data/users.json';

export default {
    name: 'LoginView',

    data() {
        return {
            username: '',
            password: '',
            empty_field: false,
            invalid_data: false,
        }
    },

    watch: {
        username() {
            !this.username ? this.empty_field = false : this.empty_field = false;
        },

        password() {
            !this.password ? this.empty_field = false : this.empty_field = false;
        },
    },

    methods: {
        login() {
            if(!this.username || !this.password) {
                this.empty_field = true;
                return;
            }

            users.find((user) => user.username == this.username && user.password == this.password) ? this.$router.push({path: '/feeds'}) : this.invalid_data;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
@import '../assets/styles/mixins';

.container {
    @include breakpoints(mobile) {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    @include breakpoints(small) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    @include breakpoints(medium) {
        align-items: center;
        flex-direction: row;
    }
    @include breakpoints(large) {
        align-items: center;
        flex-direction: row;
    }
}

.content {
    margin-right: 4rem;

    &__title {
        color: $facebookBlue;
        font-size: 60px;
        margin-bottom: 1rem;
    }

    &__description {
        font-size: 22px;
        font-weight: bold;
    }
}

.form {
    @include card;

    &__username {
        @include input-mixin;
    }

    &__password {
        @include input-mixin;
    }

    &__login_btn {
        background-color: $facebookBlue;
        color: $white;
        width: 100%;
        border: none;
        border-radius: 6px;
        font-size: 20px;
        line-height: 48px;
        padding: 0 16px;
        margin: 1rem 0;
        cursor: pointer;

        &:hover {
            box-shadow: 0 2px 4px $shadow-color, 0 8px 16px $shadow-color;
        }
    }

    &__invalid {
        color: $red;
        font-size: smaller;
    }
}
</style>