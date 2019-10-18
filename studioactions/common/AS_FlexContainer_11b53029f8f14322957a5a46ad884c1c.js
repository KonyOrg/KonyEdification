function AS_FlexContainer_11b53029f8f14322957a5a46ad884c1c(eventobject) {
    var swipeID = eventobject.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1,
        swipedistance: 100,
        swipevelocity: 90
    }, swipeHandler);
    /**
     * @function swipeHandler
     *
     */
    function swipeHandler(widget, gestureInfo, context) {
        if (gestureInfo.swipeDirection === 1) closeHamburgerMenu();
    }
}