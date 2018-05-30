/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'WebinarPOC.Application',

    name: 'WebinarPOC',

    requires: [
        // This will automatically load all classes in the WebinarPOC namespace
        // so that application classes do not need to require each other.
        'WebinarPOC.*'
    ],

    // The name of the initial view to create.
    mainView: 'WebinarPOC.view.main.Main'
});
