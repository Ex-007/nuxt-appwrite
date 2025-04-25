<template>
    <div class="body">
        <div class="wrapper">

            <!-- LOGIN -->
            <form @submit.prevent="loginUser" v-if="login">
                <h2>Login</h2>
                <div class="input-field">
                    <input type="email" required v-model="loginn.email">
                    <label>Enter your email</label>
                </div>
                <div class="input-field">
                    <input type="password" required v-model="loginn.password">
                    <label>Enter your password</label>
                </div>
                <div class="forget">
                    <label for="remember">
                        <input type="checkbox" id="remember">
                        <p>Remember me</p>
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <p v-if="auth.error">{{ auth.error }}</p>
                <button type="submit">Log In</button>
                <div class="register">
                    <p>Don't have an account? <span @click="registerF">Register</span></p>
                </div>
            </form>

            <!-- REGISTER -->
            <form @submit.prevent="register" v-if="signUp">
                <h2>Join Us</h2>
                <div class="input-field">
                    <input type="text" required v-model="userDetails.name">
                    <label>Name</label>
                </div>
                <div class="input-field">
                    <input type="email" required v-model="userDetails.email">
                    <label>Email</label>
                </div>
                <div class="input-field">
                    <input type="password" required v-model="userDetails.password">
                    <label>Password</label>
                </div>
                <p v-if="auth.error">{{ auth.error }}</p>
                <button type="submit">Log In</button>
                <div class="register">
                    <p>Already Have an Account? <span @click="loginF">login</span></p>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
    import {useAuthStore} from '@/stores/authentication'
    import { useRouter } from 'vue-router'
    const auth = useAuthStore()
    const router = useRouter()
    const login = ref(true)
    const signUp = ref(false)

    const registerF = () => {
        login.value = false
        signUp.value = true
    }

    const loginF = () => {
        login.value = true
        signUp.value = false
    }

    const userDetails = ref({
      email : '',
      password : '',
      name : ''
    })

    const loginn = ref({
      email: '',
      password: ''
    })

    // REGISTER
    const register = async() => {
        await auth.registration(userDetails.value)
    }

    // LOGIN
    const loginUser = async () => {
      if(loginn.value.email == '' || loginn.value.password == ''){
        console.log('Fill all fields')
        return
      }

      await auth.login(loginn.value)
    }

    watch(() => auth.canProceed, (newVal) => {
        if (newVal) {
            router.push('/dashboard')
        }
    });





</script>

<style scoped>
        .body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            width: 100%;
            padding: 0 10px;
        }
    
        .body::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: url("/img/brandName.png"), #000;
            background-position: center;
            background-size: cover;
        }
        p{
            color: white;
            padding: 5px;
        }
    
        .wrapper {
            width: 400px;
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(8px);
        }
    
        form {
            display: flex;
            flex-direction: column;
        }
    
        h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #fff;
        }
    
        .input-field {
            position: relative;
            border-bottom: 2px solid #ccc;
            margin: 15px 0;
        }
    
        .input-field label {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            color: #909dd2dc;
            font-size: 16px;
            pointer-events: none;
            transition: 0.15s ease;
        }
    
        .input-field input {
            width: 100%;
            height: 40px;
            background: transparent;
            border: none;
            outline: none;
            font-size: 16px;
            color: #eaa800;
        }
    
        .input-field input:focus~label,
        .input-field input:valid~label {
            font-size: 0.8rem;
            top: 10px;
            transform: translateY(-120%);
        }
    
        .forget {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 25px 0 35px 0;
            color: #fff;
        }
    
        #remember {
            accent-color: #eaa800;
        }
    
        .forget label {
            display: flex;
            align-items: center;
        }
    
        .forget label p {
            margin-left: 8px;
        }
    
        .wrapper a {
            color: #eaa800;
            text-decoration: none;
        }
    
        .wrapper a:hover {
            text-decoration: underline;
        }
    
        button {
            background: #fff;
            color: #000;
            font-weight: 600;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            border-radius: 3px;
            font-size: 16px;
            border: 2px solid transparent;
            transition: 0.3s ease;
            cursor: pointer;
        }
    
        button:hover {
            color: #fff;
            border-color: #fff;
            background: rgba(255, 255, 255, 0.15);
        }
    
        .register {
            text-align: center;
            margin-top: 30px;
            color: #fff;
        }
        span{
            cursor: pointer;
        }
</style>