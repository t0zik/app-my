import { defineType, defineField } from "sanity";

 const  project_info = defineType({
  name: "projectInfo",
  type: "document",
  title: "project information",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "name",
    }),
    defineField({
      name: "progressPercent",
      type: "string",
      title: "progress percent",
    }),
    defineField({
      name: "progressInformation",
      type: "string",
      title: "progress information",
    }),
    defineField({
      name: "projectDescription",
      type: "string",
      title: "project description",
    }),
    defineField({
        name: 'images',
        title: 'Images',
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
    defineField({
      name: "editVideoLink",
      type: "string",
      title: "Edit video link",
    }),
  ],
})
export default project_info