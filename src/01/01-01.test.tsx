import {mult, SplitIntoWords, sum} from "./01-01";

let a: number
let b: number
let c: number

beforeEach( () => {

    a = 1;
    b = 2;
    c = 3;

})

test('sum should be correct', () => {

    //action
    const result1 = sum(a, b)
    const result2 = sum(a, c)
    const result3 = sum(c, b)

    //expect result



    expect(result1).toBe(3)
    expect(result2).toBe(4)
    expect(result3).toBe(5)

})

test('mult should be correct', () => {

    //action
    const result1 = mult(a, b)
    const result2 = mult(a, c)
    const result3 = mult(c, b)

    //expect result



    expect(result1).toBe(2)
    expect(result2).toBe(3)
    expect(result3).toBe(6)

})


test('split should be correct', () => {
    //data
    const sent1 = 'Hello my friends';
    const sent2 = 'JS - the best programing language';
    //action
    const result1 = SplitIntoWords(sent1)
    const result2 = SplitIntoWords(sent2)
    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')


    expect(result2.length).toBe(6)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('the')
    expect(result2[3]).toBe('best')
    expect(result2[4]).toBe('programing')
    expect(result2[5]).toBe('language')

})