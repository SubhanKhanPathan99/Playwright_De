const { expect } = require('@playwright/test');


exports.HomePage =
class HomePage {

    constructor(page){
        this.page   = page;
        this.InstaLink  = '[title="instagram"]';
        this.facebookLink   = '[title="facebook"]'
        this.closebtn   =   '#modalContent';
        this.PinetrestLink  =   '[title="pinterest"]'
        this.tiktokLink =   '[title="tiktok"]'
        this.LoginPgBtn  = '#account-nav-menu-icon'
        this.SignInOpt  = '//a[@class="nav-list-option"]//span[normalize-space()="Sign In"]'
        this.SignInBtn  ='//button[@class="button button__primary"]'
        this.ErrorMsg   = '#form-error-text'
    }

    async   gotoLoginPage(){
        await this.page.goto('https://www.dsw.com/');
    }

    async home(){

        await this.page.locator(this.InstaLink).scrollIntoViewIfNeeded();
        await   this.page.locator(this.closebtn).getByRole('button').filter({ hasText: /^$/ }).click();

        const Insta = await   this.page.locator(this.InstaLink)
        await expect(Insta).toHaveAttribute('href','https://www.instagram.com/dsw')

        const Face = await   this.page.locator(this.facebookLink)
        await expect(Face).toHaveAttribute('href','https://www.facebook.com/DSW')

        const Pine = await   this.page.locator(this.PinetrestLink)
        await expect(Pine).toHaveAttribute('href','https://www.pinterest.com/DSW/')

        const tiktok = await   this.page.locator(this.tiktokLink)
        await expect(tiktok).toHaveAttribute('href','https://www.tiktok.com/@dsw')

        await this.page.locator(this.LoginPgBtn).click();
        
        await this.page.locator(this.SignInOpt).click();

        await this.page.locator(this.SignInBtn).click();

        await expect(this.page.locator(this.ErrorMsg)).toHaveText('The email address is incorrect. Make sure the format is correct (abc@wxyz.com) and try again.')


    }


}