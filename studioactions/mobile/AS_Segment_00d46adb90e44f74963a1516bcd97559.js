function AS_Segment_00d46adb90e44f74963a1516bcd97559(eventobject, sectionNumber, rowNumber) {
    frmLatestActivityDetails.browserLatestActivity.requestURLConfig = {
        URL: frmDashboard.segLatestActivites.selectedRowItems[0].url,
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
    };
    frmLatestActivityDetails.show();
}