import { test, expect } from '@playwright/test';

test.describe('Important detailing on Homepage of ICC', () => {

    test('URL includes the word cricket ', async ({ page }) => {
        await page.goto('https://www.icc-cricket.com/')
        await expect(page.url()).toContain('cricket')
        
    })

    test('ICC logo visible on Homepage', async ({ page }) => {
        await page.goto('https://www.icc-cricket.com/')
        await expect(page.getByAltText('Header logo')).toBeVisible()

    })
    
    
    
})
