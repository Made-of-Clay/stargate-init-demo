import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// This will be a pre-installed package.
// import { initHost } from 'some-iti-repo'

console.log(window.hostConfig) // ← expect this returns the object added in dummy-config.js

const host = initHost()

console.log(window.hostConfig) // ← expect this returns 'undefined'

const app = createApp(App)

// provide each service individually or…
Object.keys(host).forEach((key) => app.provide(key, host[key]))

// … provide the whole host
app.provide('host', host)

// ⭐ See the App.vue component for an example injecting the provided dependencies

app.mount('#app')
