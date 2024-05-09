// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'Nuxt Dojo',
      meta:[
        {name:'description',content:'Evething about Nuxt 3'}
      ],
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
  // devtools: { enabled: true }
})
