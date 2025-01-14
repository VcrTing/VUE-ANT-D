/// <reference types="vite/client" />

declare global {
    type ONE = { [k: string]: any }
    type MANY = ONE[ ]
}

declare module 'ONE'
declare module 'MANY'

declare module '~pages'
declare module 'pinia-plugin-persist'
declare module 'virtual:generated-layouts'
