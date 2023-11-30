import test, { expect } from "@playwright/test"


test("OlxTestiranje",async ({page})=>{

await page.goto("https://olx.ba/");

await page.click("#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button.css-1sjubqu")
   await page.click("//a[contains(text(),'Registracija')]")
await page.fill("(//div[@class='relative']//input)[1]","alija.alija@gmail.com")
await page.fill("//input[@type='password']","zelenikisobran")
await page.fill("(//div[@class='relative']//input)[3]","Prodavac1")

////////////////////////////////////////////////////////////////////////
await page.selectOption("(//div[contains(@class,'flex flex-col')]//select)[1]",
 { 
    label: 'Muški'
 });
await page.selectOption("//select[@label='Regija']",{

    value:"4"
})

await page.selectOption("//select[@label='Mjesto']",{
    value:"35"

})

const singleCheckbox= page.locator("#checkbox")
expect(singleCheckbox).not.toBeChecked();
await singleCheckbox.check();
expect(singleCheckbox).toBeChecked();
await page.click("button.my-md")

expect(page.locator("v-toast__icon"))
await page.waitForTimeout(1000);

//test

})


