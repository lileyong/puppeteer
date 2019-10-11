const puppeteer = require('puppeteer')
const url = 'https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_d8717cc9df334cbcb9c5d8a4cbc9610b'

async function savePage() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'networkidle2'
    })

    const dimensions = await page.evaluate(() => {
        return {
            scrollWidth: document.body.scrollWidth,
            scrollHeight: document.body.scrollHeight
        }
    })
    await page.setViewport({
        width: dimensions.scrollWidth > 750 ? 1920 : 750,
        height: dimensions.scrollHeight
    })

    await page.screenshot({
        path: 'dist/output.jpg'
    })
    await browser.close()
}

savePage()