const {normalizeURL, getURLsFromHTML} = require("./crawl.js")
const {test, expect} = require("@jest/globals")

test('normalizeURL strip protocol', ()=>{
    const input = "https://abc.dev/location";
    const actual = normalizeURL(input);
    const expected  = "abc.dev/location";
    expect(actual).toEqual(expected);
})

test('normalizeURL strip trailing slash', ()=>{
    const input = "https://abc.dev/location/";
    const actual = normalizeURL(input);
    const expected  = "abc.dev/location";
    expect(actual).toEqual(expected);
})

test('normalizeURL capitals', ()=>{
    const input = "https://ABC.dev/location";
    const actual = normalizeURL(input);
    const expected  = "abc.dev/location";
    expect(actual).toEqual(expected);
})

test('normalizeURL strip http', ()=>{
    const input = "http://abc.dev/location";
    const actual = normalizeURL(input);
    const expected  = "abc.dev/location";
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML absolute', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://abc.dev/path/">
        </body>
    </html>
    `;
    const inputBaseURl = "abc.dev/path/";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURl);
    const expected  = ["https://abc.dev/path/"];
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML relative', ()=>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/path/">
        </body>
    </html>
    `;
    const inputBaseURl = "https://abc.dev";
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURl);
    const expected  = ["https://abc.dev/path/"];
    expect(actual).toEqual(expected);
})
