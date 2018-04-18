/**
 * Test record form
 */
module.exports = {
  name: 'testRecord-1.0-draft',
  type: 'testRecord',
  skipValidationOnSave: false,
  editCssClasses: 'row col-md-12',
  viewCssClasses: 'row col-md-offset-1 col-md-10',
  messages: {
    "saving": ["@dmpt-form-saving"],
    "validationFail": ["@dmpt-form-validation-fail-prefix", "@dmpt-form-validation-fail-suffix"],
    "saveSuccess": ["@dmpt-form-save-success"],
    "saveError": ["@dmpt-form-save-error"]
  },
  fields: [{
      class: 'Container',
      compClass: 'TextBlockComponent',
      viewOnly: true,
      definition: {
        name: 'title',
        type: 'h1'
      }
    }
  ]
};
