export enum FontWeight {
  light = '400',
  medium = '600',
  strong = '900',
}

export type FontWeightType = keyof typeof FontWeight

export const toWeight = (weight: FontWeightType) => FontWeight[weight]

export enum FontSize {
  small = 17,
  medium = 20,
  big = 30,
}

export type FontSizeType = keyof typeof FontSize

export const toSize = (size: FontSizeType) => FontSize[size]
