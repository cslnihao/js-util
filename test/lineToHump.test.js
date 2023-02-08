import lineToHump from "../src/lineToHump"

test('line-to-hump to lineToHump', () => {
    expect(lineToHump('line_to_hump')).toBe('lineToHump')
})