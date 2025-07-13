import { defineType, defineField } from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        defineField({
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subLinks',
              title: 'Sub Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'subLink',
                  title: 'Sub Link',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'Link',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: 'nestedLinks',
                      title: 'Nested Links',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'nestedLink',
                          title: 'Nested Link',
                          fields: [
                            defineField({
                              name: 'name',
                              title: 'Name',
                              type: 'string',
                              validation: (Rule) => Rule.required(),
                            }),
                            defineField({
                              name: 'href',
                              title: 'Link',
                              type: 'string',
                              validation: (Rule) => Rule.required(),
                            }),
                          ],
                        },
                      ],
                    }),
                  ],
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
