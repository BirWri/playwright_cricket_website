import { test, expect } from '@playwright/test';

test.describe('Search and Verify new URL and heading', () => {
    
    test('Search for a country', async ({ page }) => {
        // tHIS TEST NEEDS TO BE EXWCUTED SLOWLY AS I AM NOT SURE IF IT IS THE PAGE OR
        // OR MY COMPUTER THAT CANT HANDLE THE SPEED
        await page.goto('https://www.icc-cricket.com/')
        const searchButton = page.locator("text=Search")
        await searchButton.click()

        await page.waitForTimeout(5000);
        await expect(page).toHaveURL("https://www.icc-cricket.com/search")
        await expect(page).toHaveURL(/.*search/)
        
        const searchBar = page.getByPlaceholder("what are you looking for?")
        await page.waitForTimeout(5000);
        
        await searchBar.fill("India")
        await page.waitForTimeout(1000);

        await searchBar.press("Enter")
        await page.waitForTimeout(5000);
        
        await expect(page.url()).toContain("search?q=India")
        await expect(page).toHaveURL("https://www.icc-cricket.com/search?q=India")
        //I dont know why this one isnt working. Need to figure out
        //await expect(page).toHaveURL(/.*search?q=India/)


        
    })
    
})
