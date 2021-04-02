 /**
  let products = [
  {
    type:'galaxy j2 prime',
    company: 'samsung'
  },
  {
    type:'iphone 7',
    company: 'apple'
  },
  {
    type:'zenfone M3',
    company: 'asus'
  },
  {
    type:'pocophone f1',
    company: 'xiaomi'
  },
  {
    type:'note 8 pro',
    company: 'xiaomi'
  },
  {
    type:'iphone 7',
    company: 'apple'
  },
  {
    type:'galaxy j2 prime',
    company: 'samsung'
  },
  {
    type:'zenfone M3',
    company: 'asus'
  },
  {
    type:'galaxy j2 prime',
    company: 'samsung'
  },
  {
    type:'note 8 pro',
    company: 'xiaomi'
  },
  ];
  
  function getUniq(arr) {
    // let tempArr = arr.map(product => product.company);
    // return [...new Set(tempArr)];
    
    return [...arr.reduce((acc,curr) => {
      acc.add(curr.company);
      return acc;
    },new Set())];
  }
  
  console.log(getUniq(products));
**/