export const totalUnits = (units) => {
    return ((0.5 * units.half) +
        (units.one) +
        (2 * units.two) +
        (5 * units.five) +
        (10 * units.ten) +
        (20 * units.twenty) +
        (50 * units.fifty) +
        (100 * units.hundred) +
        (200 * units.two_hundred))
}