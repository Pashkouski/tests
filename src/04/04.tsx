test ("should take old men older then 90", () => {
    const ages =[18, 20 ,22, 1, 100, 90, 14]

    const oldAges = ages.filter( el => el > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipped 160', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]
    const chipCourses = courses.filter( el => el.price < 160)

    expect(chipCourses).toBe(2)
})