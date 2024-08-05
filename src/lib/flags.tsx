export interface EpqrFlag {
  [key: number]: boolean | null;
}

export type CissFlag = {
  [key: number]: boolean;
};

export type Result = {
  [key: string]: number;
};

export interface EpqrObject {
  N: EpqrFlag;
  E: EpqrFlag;
  P: EpqrFlag;
  K: EpqrFlag;
}

export type CissObject = {
  SSZ: CissFlag;
  SSE: CissFlag;
  SSU: CissFlag;
  ACZ: CissFlag;
  PKT: CissFlag;
};

export type StenObject = {
  below: number;
  above: number;
};

export type StensObject = {
  N: StenObject;
  E: StenObject;
  P: StenObject;
  K: StenObject;
};

export type stenCissObj = {
  SSZ: { bottom: number; top: number };
  SSE: { bottom: number; top: number };
  SSU: { bottom: number; top: number };
  ACZ: { bottom: number; top: number };
  PKT: { bottom: number; top: number };
};


export const stensCISS = {
  // 16-24 yo
  tab1: [
    {
      SSZ: { bottom: 16, top: 30 },
      SSE: { bottom: 16, top: 21 },
      SSU: { bottom: 16, top: 30 },
      ACZ: { bottom: 8, top: 10 },
      PKT: { bottom: 5, top: 8 },
    },
    {
      SSZ: { bottom: 31, top: 39 },
      SSE: { bottom: 22, top: 26 },
      SSU: { bottom: 31, top: 34 },
      ACZ: { bottom: 11, top: 12 },
      PKT: { bottom: 9, top: 11 },
    },
    {
      SSZ: { bottom: 40, top: 47 },
      SSE: { bottom: 27, top: 32 },
      SSU: { bottom: 35, top: 39 },
      ACZ: { bottom: 13, top: 15 },
      PKT: { bottom: 12, top: 14 },
    },
    {
      SSZ: { bottom: 48, top: 52 },
      SSE: { bottom: 33, top: 37 },
      SSU: { bottom: 40, top: 44 },
      ACZ: { bottom: 16, top: 17 },
      PKT: { bottom: 15, top: 16 },
    },
    {
      SSZ: { bottom: 53, top: 57 },
      SSE: { bottom: 38, top: 42 },
      SSU: { bottom: 45, top: 50 },
      ACZ: { bottom: 18, top: 21 },
      PKT: { bottom: 17, top: 19 },
    },
    {
      SSZ: { bottom: 58, top: 61 },
      SSE: { bottom: 43, top: 50 },
      SSU: { bottom: 51, top: 54 },
      ACZ: { bottom: 22, top: 25 },
      PKT: { bottom: 20, top: 20 },
    },
    {
      SSZ: { bottom: 62, top: 65 },
      SSE: { bottom: 51, top: 55 },
      SSU: { bottom: 55, top: 59 },
      ACZ: { bottom: 26, top: 27 },
      PKT: { bottom: 21, top: 22 },
    },
    {
      SSZ: { bottom: 66, top: 68 },
      SSE: { bottom: 56, top: 61 },
      SSU: { bottom: 60, top: 64 },
      ACZ: { bottom: 28, top: 29 },
      PKT: { bottom: 23, top: 23 },
    },
    {
      SSZ: { bottom: 69, top: 73 },
      SSE: { bottom: 62, top: 69 },
      SSU: { bottom: 65, top: 68 },
      ACZ: { bottom: 30, top: 33 },
      PKT: { bottom: 24, top: 24 },
    },
    {
      SSZ: { bottom: 74, top: 80 },
      SSE: { bottom: 70, top: 80 },
      SSU: { bottom: 69, top: 80 },
      ACZ: { bottom: 34, top: 40 },
      PKT: { bottom: 25, top: 25 },
    },
  ],
  // 25-54 yo
  tab2: [
    {
      SSZ: { bottom: 16, top: 38 },
      SSE: { bottom: 16, top: 24 },
      SSU: { bottom: 16, top: 27 },
      ACZ: { bottom: 8, top: 8 },
      PKT: { bottom: 5, top: 9 },
    },
    {
      SSZ: { bottom: 39, top: 43 },
      SSE: { bottom: 25, top: 30 },
      SSU: { bottom: 28, top: 30 },
      ACZ: { bottom: 9, top: 10 },
      PKT: { bottom: 10, top: 10 },
    },
    {
      SSZ: { bottom: 44, top: 48 },
      SSE: { bottom: 31, top: 35 },
      SSU: { bottom: 31, top: 34 },
      ACZ: { bottom: 11, top: 13 },
      PKT: { bottom: 11, top: 12 },
    },
    {
      SSZ: { bottom: 49, top: 52 },
      SSE: { bottom: 36, top: 39 },
      SSU: { bottom: 35, top: 38 },
      ACZ: { bottom: 14, top: 15 },
      PKT: { bottom: 13, top: 14 },
    },
    {
      SSZ: { bottom: 53, top: 57 },
      SSE: { bottom: 40, top: 43 },
      SSU: { bottom: 39, top: 43 },
      ACZ: { bottom: 16, top: 19 },
      PKT: { bottom: 15, top: 16 },
    },
    {
      SSZ: { bottom: 58, top: 61 },
      SSE: { bottom: 44, top: 51 },
      SSU: { bottom: 44, top: 47 },
      ACZ: { bottom: 20, top: 21 },
      PKT: { bottom: 17, top: 18 },
    },
    {
      SSZ: { bottom: 62, top: 65 },
      SSE: { bottom: 52, top: 55 },
      SSU: { bottom: 48, top: 52 },
      ACZ: { bottom: 22, top: 24 },
      PKT: { bottom: 19, top: 20 },
    },
    {
      SSZ: { bottom: 66, top: 68 },
      SSE: { bottom: 56, top: 60 },
      SSU: { bottom: 53, top: 56 },
      ACZ: { bottom: 25, top: 27 },
      PKT: { bottom: 21, top: 22 },
    },
    {
      SSZ: { bottom: 69, top: 74 },
      SSE: { bottom: 61, top: 64 },
      SSU: { bottom: 57, top: 61 },
      ACZ: { bottom: 28, top: 30 },
      PKT: { bottom: 23, top: 23 },
    },
    {
      SSZ: { bottom: 75, top: 80 },
      SSE: { bottom: 65, top: 80 },
      SSU: { bottom: 62, top: 80 },
      ACZ: { bottom: 31, top: 40 },
      PKT: { bottom: 24, top: 25 },
    },
  ],
  // 55-79 yo
  tab3: [
    {
      SSZ: { bottom: 16, top: 37 },
      SSE: { bottom: 16, top: 26 },
      SSU: { bottom: 16, top: 25 },
      ACZ: { bottom: 8, top: 9 },
      PKT: { bottom: 5, top: 9 },
    },
    {
      SSZ: { bottom: 38, top: 42 },
      SSE: { bottom: 27, top: 31 },
      SSU: { bottom: 26, top: 31 },
      ACZ: { bottom: 10, top: 11 },
      PKT: { bottom: 10, top: 11 },
    },
    {
      SSZ: { bottom: 43, top: 46 },
      SSE: { bottom: 32, top: 36 },
      SSU: { bottom: 32, top: 35 },
      ACZ: { bottom: 12, top: 13 },
      PKT: { bottom: 12, top: 12 },
    },
    {
      SSZ: { bottom: 47, top: 50 },
      SSE: { bottom: 37, top: 41 },
      SSU: { bottom: 36, top: 38 },
      ACZ: { bottom: 14, top: 15 },
      PKT: { bottom: 13, top: 14 },
    },
    {
      SSZ: { bottom: 51, top: 55 },
      SSE: { bottom: 42, top: 45 },
      SSU: { bottom: 39, top: 44 },
      ACZ: { bottom: 16, top: 19 },
      PKT: { bottom: 15, top: 16 },
    },
    {
      SSZ: { bottom: 56, top: 60 },
      SSE: { bottom: 46, top: 50 },
      SSU: { bottom: 45, top: 49 },
      ACZ: { bottom: 20, top: 22 },
      PKT: { bottom: 17, top: 19 },
    },
    {
      SSZ: { bottom: 61, top: 64 },
      SSE: { bottom: 51, top: 56 },
      SSU: { bottom: 50, top: 53 },
      ACZ: { bottom: 23, top: 24 },
      PKT: { bottom: 20, top: 20 },
    },
    {
      SSZ: { bottom: 65, top: 68 },
      SSE: { bottom: 57, top: 62 },
      SSU: { bottom: 54, top: 57 },
      ACZ: { bottom: 25, top: 27 },
      PKT: { bottom: 21, top: 22 },
    },
    {
      SSZ: { bottom: 69, top: 72 },
      SSE: { bottom: 63, top: 69 },
      SSU: { bottom: 58, top: 61 },
      ACZ: { bottom: 28, top: 29 },
      PKT: { bottom: 23, top: 24 },
    },
    {
      SSZ: { bottom: 73, top: 80 },
      SSE: { bottom: 70, top: 80 },
      SSU: { bottom: 62, top: 80 },
      ACZ: { bottom: 30, top: 40 },
      PKT: { bottom: 25, top: 25 },
    },
  ],
};

export const stensMenEPQR = [
  {
    N: { below: 2, above: 2 },
    E: { below: 1, above: 1 },
    P: { below: 1, above: 1 },
    K: { below: 1, above: 1 },
  },
  {
    N: { below: 3, above: 3 },
    E: { below: 2, above: 2 },
    P: { below: 2, above: 3 },
    K: { below: 2, above: 2 },
  },
  {
    N: { below: 4, above: 4 },
    E: { below: 2, above: 2 },
    P: { below: 3, above: 4 },
    K: { below: 3, above: 3 },
  },
  {
    N: { below: 5, above: 5 },
    E: { below: 2, above: 3 },
    P: { below: 4, above: 5 },
    K: { below: 4, above: 4 },
  },
  {
    N: { below: 5, above: 5 },
    E: { below: 3, above: 3 },
    P: { below: 5, above: 6 },
    K: { below: 5, above: 4 },
  },
  {
    N: { below: 6, above: 6 },
    E: { below: 3, above: 3 },
    P: { below: 6, above: 7 },
    K: { below: 6, above: 5 },
  },
  {
    N: { below: 7, above: 6 },
    E: { below: 3, above: 4 },
    P: { below: 7, above: 8 },
    K: { below: 6, above: 5 },
  },
  {
    N: { below: 7, above: 7 },
    E: { below: 4, above: 4 },
    P: { below: 8, above: 9 },
    K: { below: 7, above: 6 },
  },
  {
    N: { below: 7, above: 7 },
    E: { below: 5, above: 5 },
    P: { below: 9, above: 9 },
    K: { below: 8, above: 6 },
  },
  {
    N: { below: 8, above: 8 },
    E: { below: 5, above: 6 },
    P: { below: 10, above: 10 },
    K: { below: 8, above: 7 },
  },
  {
    N: { below: 8, above: 8 },
    E: { below: 6, above: 7 },
    P: { below: 10, above: 10 },
    K: { below: 9, above: 8 },
  },
  {
    N: { below: 9, above: 9 },
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

export const flagsCISS: CissObject = {
  SSZ: {
    1: true,
    2: true,
    6: true,
    10: true,
    15: true,
    21: true,
    24: true,
    26: true,
    27: true,
    36: true,
    39: true,
    41: true,
    42: true,
    43: true,
    46: true,
    47: true,
  },
  SSE: {
    5: true,
    7: true,
    8: true,
    13: true,
    14: true,
    16: true,
    17: true,
    19: true,
    22: true,
    25: true,
    28: true,
    30: true,
    33: true,
    34: true,
    38: true,
    45: true,
  },
  SSU: {
    3: true,
    4: true,
    9: true,
    11: true,
    12: true,
    18: true,
    20: true,
    23: true,
    29: true,
    31: true,
    32: true,
    35: true,
    37: true,
    40: true,
    44: true,
    48: true,
  },
  ACZ: {
    9: true,
    11: true,
    12: true,
    18: true,
    20: true,
    40: true,
    44: true,
    48: true,
  },
  PKT: {
    4: true,
    29: true,
    31: true,
    35: true,
    37: true,
  },
};

export const flagsEPQR: EpqrObject = {
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
