function AS_Button_41e6589e959649739ee4e9397ca41c48(eventobject) {
    function SHOW_ALERT__309e4152f1a648a194d79c67cad5a9d3_True() {
        kony.application.exit();
    }

    function SHOW_ALERT__309e4152f1a648a194d79c67cad5a9d3_False() {}

    function SHOW_ALERT__309e4152f1a648a194d79c67cad5a9d3_Callback(response) {
        if (response === true) {
            SHOW_ALERT__309e4152f1a648a194d79c67cad5a9d3_True();
        } else {
            SHOW_ALERT__309e4152f1a648a194d79c67cad5a9d3_False();
        }
    }
    kony.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Terms And Conditions",
        "yesLabel": "Yes",
        "noLabel": "No",
        "message": "Don't want to accept terms and conditions? We will exit the application.",
        "alertHandler": SHOW_ALERT__309e4152f1a648a194d79c67cad5a9d3_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}