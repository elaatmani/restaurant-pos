export const totalUnits = (units) => {
    return ((0.5 * (!units.half ? 0 : units.half)) +
        (!units.one ? 0 : units.one) +
        (2 * (!units.two ? 0 : units.two)) +
        (5 * (!units.five ? 0 : units.five)) +
        (10 * (!units.ten ? 0 : units.ten)) +
        (20 * (!units.twenty ? 0 : units.twenty)) +
        (50 * (!units.fifty ? 0 : units.fifty)) +
        (100 * (!units.hundred ? 0 : units.hundred)) +
        (200 * (!units.two_hundred ? 0 : units.two_hundred)))
}