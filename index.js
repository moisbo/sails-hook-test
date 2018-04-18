var _ = require('./node_modules/lodash');
var testController =  require('./api/controller/TestController');
var testServiceConfig =  require('./config/testService.js');
var recordTypeConfig =  require('./config/recordType.js');
var recordTypeConfig =  require('./config/workflow.js');
var testRecordFormConfig =  require('./form-config/test-record-1.0-draft.js');


module.exports = function (sails) {

  // Declare a var that will act as a reference to this hook.
  var hook;

  return {

    initialize: function(cb) {
      // Assign this hook object to the `hook` var.
      // This allows us to add/modify values that users of the hook can retrieve.
      hook = this;
      // Initialize a couple of values on the hook.
      hook.numRequestsSeen = 0;
      hook.numUnhandledRequestsSeen = 0;
      // Signal that initialization of this hook is complete
      // by calling the callback.
        fs.copySync('angular/outDir', '../../.tmp/public/angular/testRecord');
      return cb();

    },

    routes: {
      after: {
        'get /:branding/:portal/api/helloWorld': testController.helloWorld
      }
    },

    configure: function() {
      sails.config['testService'] = testServiceConfig;

      sails.config = _.merge(sails.config, recordTypeConfig);
      sails.config = _.merge(sails.config, workflowConfig);

      sails.config['form']['forms']['test-record-1.0-draft.js'] = testRecordFormConfig;
  };
};
