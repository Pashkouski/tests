export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function SplitIntoWords(sent: string) {
    return sent.toLowerCase().split(' ')
        .map((el) => el.replace('!', ''))
}