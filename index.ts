export const generateRandomHexId = (size: number = 32): string => (
    [...Array(size)].map(() => (
        Math.floor(Math.random() * 16).toString(16)
    )).join('')
)

export const generateRandomNumberId = (size: number = 32): string => (
    new Uint8Array(size).map(() => (
        Math.floor(Math.random() * 256)
    )).join('').substring(0, size)
)
