const {normalizeURL} = require("./crawl.js")
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
