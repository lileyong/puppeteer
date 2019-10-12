const puppeteer = require('puppeteer')
const url = 'https://www.to8to.com/zb/index11.html'

async function savePage () {
    const browser = await puppeteer.launch({
        defaultViewport: {
            width: 1920,
            height: 600
        }
    })
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'networkidle2'
    })

    await page.screenshot({
        type: 'jpeg',
        path: 'dist/output.jpg',
        quality: 100,
        fullPage: true
    })
    await browser.close()
}

savePage()
