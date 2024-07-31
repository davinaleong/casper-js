export interface LibHelpers {
  getRandomElement<T>(arr: T[]): T
}

export const getRandomElement = <T>(arr: T[]): T => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export const LibHelpers: LibHelpers = {
  getRandomElement,
}
