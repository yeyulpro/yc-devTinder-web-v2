import {defineConfig} from "vite";


import React from 'react'

export default defineConfig({
    test:{
        environment:'jsdom',
        setupFiles:['./src/__tests__/setup.js'],
        include:["src/**/*.test.{js,jsx}", "src/**/*.spec.{js,jsx}"],
          exclude: [
      "node_modules/**",
      "src/__tests__/LoginNavbar.test.jsx" 
    ],
    }
})
