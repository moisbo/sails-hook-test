module.exports.workflow={
  "testRecord": {
    "draft": {
      config: {
        workflow: {
          stage: 'draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'testRecord-1.0-draft'
      },
      starting: true
    }
  }

}
