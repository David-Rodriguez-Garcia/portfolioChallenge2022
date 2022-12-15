export enum Position {
  start = 'flex-start',
  center = 'center',
  end = 'flex-end',
  spaceAround = 'space-around',
  spaceBetween = 'space-between',
}

export type PositionType = keyof typeof Position

export const toContent = (type: PositionType) => Position[type]
