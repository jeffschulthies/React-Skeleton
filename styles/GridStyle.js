import { StyleSheet } from 'aphrodite/no-important'

// Port of CSS Skeleton
const GridStyle = StyleSheet.create({
  Container: {
    position: 'relative',
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box', 

    /* For devices larger than 400px */
    '@media (min-width: 400px)': {
      width: '85%',
      padding: '0', 
    },

    '@media (min-width: 550px)': {
      width: '80%',
    }
  },

  Column: {
    width: '100%',
    float: 'left',
    boxSizing: 'border-box', 

    '@media (min-width: 550px)': {
        marginLeft: '4%',
    },

    ':first-child': {
      marginLeft: '0',
    }
  },

  Columns: {
    width: '100%',
    float: 'left',
    boxSizing: 'border-box', 

    '@media (min-width: 550px)': {
        // We can modify this later
        marginLeft: '4%',
    },

    ':first-child': {
      marginLeft: '0',
    },
  },

  OneColumn: {
    '@media (min-width: 550px)': {
      width: '4.66666666667%', 
    }
  },

  OneColumns: {
    '@media (min-width: 550px)': {
      width: '4.66666666667%', 
    }  
  },

  TwoColumns: {
    '@media (min-width: 550px)': {
      width: '13.3333333333%', 
    }
  },

  ThreeColumns: {
    '@media (min-width: 550px)': {
      width: '22%'
    }
  },

  FourColumns: {
    '@media (min-width: 550px)': {
      width: '30.6666666667%'
    }
  },

  FiveColumns: {
    '@media (min-width: 550px)': {
      width: '39.3333333333%'
    }
  },

  SixColumns: {
    '@media (min-width: 550px)': {
      width: '48%'
    }
  },

  SevenColumns: {
    '@media (min-width: 550px)': {
      width: '56.6666666667%'
    }
  },

  EightColumns: {
    '@media (min-width: 550px)': {
      width: '65.3333333333%'
    }
  },

  NineColumns: {
    '@media (min-width: 550px)': {
      width: '74.0%'
    }
  },

  TenColumns: {
    '@media (min-width: 550px)': {
      width: '82.6666666667%'
    }
  },

  ElevenColumns: {
    '@media (min-width: 550px)': {
      width: '91.3333333333%'
    }
  },

  TwelveColumns: {
    '@media (min-width: 550px)': {
      width: '100%',
      marginLeft: '0',
    }
  },

  OneThirdColumn: {
    '@media (min-width: 550px)': {
      width: '30.6666666667%',
    }
  },

  TwoThirdsColumn: {
    '@media (min-width: 550px)': {
      width: '65.3333333333%',
    }
  },

  OneHalfColumn: {
    '@media (min-width: 550px)': {
      width: '48%'
    }
  },

  OffsetByOneColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '8.66666666667%'
      } 
  },
  OffsetByOneColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '8.66666666667%'
      } 
  },

  OffsetByTwoColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '17.3333333333%'
      } 
  },
  OffsetByTwoColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '17.3333333333%'
      } 
  },

  OffsetByThreeColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '26%'
      } 
  },
  OffsetByThreeColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '26%'
      } 
  },

  OffsetByFourColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '34.6666666667%'
      } 
  },
  OffsetByFourColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '34.6666666667%'
      } 
  },

  OffsetByFiveColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '43.3333333333%'
      } 
  },
  OffsetByFiveColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '43.3333333333%'
      } 
  },

  OffsetBySixColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '52%'
      } 
  },
  OffsetBySixColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '52%'
      } 
  },

  OffsetBySevenColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '60.6666666667%'
      } 
  },
  OffsetBySevenColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '60.6666666667%'
      } 
  },

  OffsetByEightColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '69.3333333333%'
      } 
  },
  OffsetByEightColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '69.3333333333%'
      } 
  },

  OffsetByNineColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '78.0%'
      } 
  },
  OffsetByNineColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '78.0%'
      } 
  },

  OffsetByTenColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '86.6666666667%'
      } 
  },
  OffsetByTenColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '86.6666666667%'
      } 
  },

  OffsetByElevenColumn: {
     '@media (min-width: 550px)': {
        marginLeft: '95.3333333333%'
      } 
  },
  OffsetByElevenColumns: {
     '@media (min-width: 550px)': {
        marginLeft: '95.3333333333%'
      } 
  },

  OffsetByOneThirdColumn: {
    '@media (min-width: 550px)': {
      marginLeft: '34.6666666667%'
    }
  },
  OffsetByOneThirdColumns: {
    '@media (min-width: 550px)': {
      marginLeft: '34.6666666667%'
    }
  },

  OffsetByTwoThirdsColumn: {
    '@media (min-width: 550px)': {
      marginLeft: '69.3333333333%'
    }
  },
  OffsetByTwoThirdsColumns: {
    '@media (min-width: 550px)': {
      marginLeft: '69.3333333333%'
    }
  },

  OffsetByOneHalfColumn: {
    '@media (min-width: 550px)': {
      marginLeft: '52%'
    }
  },
  OffsetByOneHalfColumns: {
    '@media (min-width: 550px)': {
      marginLeft: '52%'
    }
  },
});

export default GridStyle

