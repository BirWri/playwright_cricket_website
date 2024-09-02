import { test, expect } from '@playwright/test';

test.describe('Important detailing on Homepage of ICC', () => {

    test('URL includes the word cricket ', async ({ page }) => {
        await page.goto('https://www.icc-cricket.com/')
        await expect(page.url()).toContain('cricket')
        
    })

    test('ICC logo visible on Homepage', async ({ page }) => {
        await page.goto('https://www.icc-cricket.com/')
        await expect(page.getByAltText('Header logo')).toBeVisible();
        //Not sure why the alternative with the id isnt working
        //await expect(page.locator('#logo_x-5g2bYkaiU0KBWrRvXZ8')).toBeVisible();
    })
    
    
    
})
