
export default {
name:'status',
title:'status',
type: 'object',
fields: [
    {
        name:'status',
        title: '    ',
        type: 'string',
        initialValue: 'free',
        options: {
          list: [
            { title: 'SoldOut', value: 'soldOut' },
            { title: 'free' , value: 'free'},
            { title: 'reserved' , value:'reserved'}
          ], 
          layout:  'radio',
        }
    },
    ],
}

