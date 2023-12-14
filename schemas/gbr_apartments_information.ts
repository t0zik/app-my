import { defineType } from "sanity";

export const gbr_apartments_information = defineType({
  name: "gbr_apartaments",
  title: "Grand Botanico Residence apartments",
  type: "document",
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
});
