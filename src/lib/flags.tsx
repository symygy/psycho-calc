interface Flags {
  [key: number]: boolean | null;
}

interface FlagsObject {
  N: Flags;
  E: Flags;
  P: Flags;
  K: Flags;
}

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
