export default{
    name:'rrb_apartaments',
    title:'Royal Residence Botanico apartments',
    type:'document',
    fields: [
        {
          name:'floorNumber',
          title:'floor number',
          type:'string'
        },
        {
          name: 'rooms',
          title: 'rooms',
          type: 'array',
          of:
          [
            {type:'room'}
          ]
        },
    
      ]
}