export interface Flags {
  [key: number]: boolean | null;
}

export type Result = {
  [key: string]: number
}


export interface FlagsObject {
  N: Flags;
  E: Flags;
  P: Flags;
  K: Flags;
}

export type StenObject = {
  below: number,
  above :number
}

export type StensObject = {
  N: StenObject,
  E: StenObject,
  P: StenObject,
  K: StenObject
}


export const stensWomenEPQR = [
  {
    N: { below: 1, above: 1 },
    E: { below: 1, above: 1 },
    P: { below: 1, above: 2 },
    K: { below: 1, above: 1 },
  },
  {
    N: { below: 2, above: 2 },
    E: { below: 1, above: 1 },
    P: { below: 3, above: 3 },
    K: { below: 2, above: 1 },
  },
  {
    N: { below: 3, above: 3 },
    E: { below: 2, above: 2 },
    P: { below: 4, above: 4 },
    K: { below: 3, above: 1 },
  },
  {
    N: { below: 4, above: 4 },
    E: { below: 2, above: 3 },
    P: { below: 5, above: 6 },
    K: { below: 4, above: 2 },
  },
  {
    N: { below: 4, above: 4 },
    E: { below: 3, above: 3 },
    P: { below: 6, above: 7 },
    K: { below: 5, above: 3 },
  },
  {
    N: { below: 4, above: 5 },
    E: { below: 3, above: 4 },
    P: { below: 7, above: 8 },
    K: { below: 5, above: 4 },
  },
  {
    N: { below: 5, above: 5 },
    E: { below: 4, above: 4 },
    P: { below: 8, above: 9 },
    K: { below: 6, above: 4 },
  },
  {
    N: { below: 6, above: 5 },
    E: { below: 4, above: 5 },
    P: { below: 9, above: 10 },
    K: { below: 7, above: 5 },
  },
  {
    N: { below: 6, above: 6 },
    E: { below: 5, above: 5 },
    P: { below: 10, above: 10 },
    K: { below: 7, above: 6 },
  },
  {
    N: { below: 7, above: 6 },
    E: { below: 5, above: 6 },
    P: { below: 10, above: 10 },
    K: { below: 8, above: 6 },
  },
  {
    N: { below: 7, above: 7 },
    E: { below: 6, above: 7 },
    P: { below: 10, above: 10 },
    K: { below: 9, above: 7 },
  },
  {
    N: { below: 8, above: 8 },
    E: { below: 7, above: 8 },
    P: { below: 10, above: 10 },
    K: { below: 10, above: 9 },
  },
  {
    N: { below: 10, above: 10 },
    E: { below: 10, above: 10 },
    P: { below: 10, above: 10 },
    K: { below: 10, above: 10 },
  },
];

export const flagsEPQR: FlagsObject = {
  N: {
    1: true,
    5: true,
    9: true,
    13: true,
    17: true,
    21: true,
    25: true,
    30: true,
    34: true,
    38: true,
    42: true,
    46: true,
  },
  E: {
    3: true,
    7: true,
    11: true,
    15: true,
    19: true,
    23: true,
    27: false,
    32: true,
    36: true,
    41: false,
    44: true,
    48: true,
  },
  P: {
    2: false,
    6: false,
    10: true,
    14: true,
    18: false,
    22: true,
    26: false,
    28: false,
    31: true,
    35: false,
    39: true,
    43: false,
    48: true,
  },
  K: {
    4: true,
    8: false,
    12: false,
    16: true,
    20: false,
    24: false,
    29: false,
    33: false,
    37: false,
    40: false,
    45: true,
    47: false,
  },
};
