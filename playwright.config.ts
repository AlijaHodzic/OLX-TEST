import { defineConfig } from '@playwright/test';

export default defineConfig({
    //testMatch: ["tests/basicInteraction.test.ts"],
    use: { 
    
        headless: false,
        screenshot:"only-on-failure",
        video:"off",
        launchOptions:{
            slowMo:1000
        }
    },
    retries:0,
    reporter:[["dot"],["json",{
        outputFile:"jasonRports/jsonRport.json"
    }],["html",{
        open:"never"
    }]]
});