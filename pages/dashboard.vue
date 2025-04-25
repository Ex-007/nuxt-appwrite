<template>
    <div>
        <div class="userNav">
            <div class="profilePictureName">
                <img src="/img/brandName.png" alt="Profile Picture" width="60">
                <h3>Welcome, {{ userName }}</h3>
            </div>
            <div class="logoutBtn">
                <button @click="logout">logout</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useUserStore } from '@/stores/userDashboard'
import {useAuthStore} from '@/stores/authentication'
import { useRouter } from 'vue-router'
const router = useRouter()
const auth = useAuthStore()
const users = useUserStore()
const userName = ref('')

// ROUTE MIDDLEWARE
definePageMeta({
    middleware: ['auth-client']
})




// LOGOUT
const logout = () => {
    auth.logout()
}

// WATCH LOGOUT
watch(() => auth.canOut, (newVal) => {
        if (newVal) {
            router.push('/account')
        }
    });

// ONMOUNTED
onMounted(async () => {
    await users.getCurrentSession()
    userName.value = users.signedInUser.name
})
</script>

<style scoped>
    .userNav{
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
    }
    .profilePictureName{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .profilePictureName>img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid white;
    }
    .logoutBtn>button{
        padding: 5px;
        color: white;
        background-color: black;
        border: 2px solid white;
        border-radius: 10px 0 10px 0;
        cursor: pointer;
    }
    .logoutBtn>button:hover{
        background-color: white;
        color: black;
        border: 2px solid rgb(0, 0, 0);
        outline: 2px solid white;
    }
</style>