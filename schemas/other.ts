import { defineType,defineField } from "sanity"

export default{
    name:'otherInfo',
    title:'other information',
    type:'document',
    fields:[
        {
            name:'adress',
            title:'adress',
            type:'string'
        },
        {
            name:'awards',
            title:'awards',
            type:'array',
            of:[{type:'awards'}]
        },
        {
            name:'faq',
            title:'FAQ',
            type:'array',
            of:[
                {
                    type:'object',
                    fields:[
                        {name:'faqQuestion',title:'FAQ question',type:'string'},
                        {name:'faqAnswer',title:'FAQ answer',type:'string'}
                    ]
                }
            ]
        },
        defineField({
            name: 'employerImages',
            title: 'employer images',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'url', type: 'url', title: 'URL' },
                  { name: 'file', type: 'file', title: 'File' },
                ],
              },
            ],
            validation: Rule =>
              Rule.required().min(3).error('Minimum of 3 images required'),
          }),
    ]
}