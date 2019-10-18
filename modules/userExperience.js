/**
 * @module userExperience
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */
var quotes = ["\"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge\" - Stephen Hawking","\"Real knowledge is to know the extent of one's ignorance\" - Confucius","\"Nothing is better than reading and gaining more and more knowledge\" - Stephen Hawking","\"Intelligence is the ability to adapt to change\" - Stephen Hawking","\"An investment in knowledge pays the best interest\" - Benjamin Franklin"];
var index = 0;
/**
 * @function quotesAnimation
 *
 */
function quotesAnimation ()
{
  var animationObject = {
                          0: {"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          10: {"opacity":0.25,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          20: {"opacity":0.5,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          30: {"opacity":0.75,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          40: {"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          50: {"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          60: {"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          70: {"opacity":0.75,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          80: {"opacity":0.5,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          90: {"opacity":0.25,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          100: {"opacity":0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
 						 };
  
  var animationConfigObject = {
                                "duration":10,
                                "iterationCount":1,
                                "direction":kony.anim.DIRECTION_NONE,
                                "fillMode":kony.anim.FILL_MODE_FORWARDS
  							  };
  
  var animationCallbackObject = {"animationEnd" : function(){if (index==4) index=0; else index++; frmStartup.lblQuotes.text=quotes[index]; quotesAnimation();}};

  frmStartup.lblQuotes.animate(kony.ui.createAnimation(animationObject),animationConfigObject,animationCallbackObject);
}

/**
 * @function emptyCallback
 *
 */
function emptyCallback ()
{
  
}

/**
 * @function showProgressIndicator
 *
 */
function showProgressIndicator (loadingMsg)
{
	var form = kony.application.getCurrentForm();
  	var flexBlurBackgroundDuringProgress = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "flexBlurBackgroundDuringProgress",
        "width": "100%",
        "zIndex": 9,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "onClick": emptyCallback,
        "skin": "sknFlex10"
    }, {}, {});
  	var flexProgressIndicator = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "height": "60dp",
        "id": "flexProgressIndicator",
        "width": "75%",
        "zIndex": 10,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "sknFlex1"
    }, {}, {});
    flexProgressIndicator.setDefaultUnit(kony.flex.DP);
    var imgLoadingIndicator = new kony.ui.Image2({
        "bottom": 5,
        "centerY": "50%",
        "height": "40dp",
        "id": "imgLoadingIndicator",
        "left": "10dp",
        "src": "icon.png",
        "width": "40dp",
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLoadingIndicator = new kony.ui.Label({
        "bottom": 10,
        "centerY": "50%",
        "id": "lblLoadingIndicator",
        "left": 10,
        "text": loadingMsg,
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLbl10",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexProgressIndicator.add(imgLoadingIndicator, lblLoadingIndicator);
  	form.add (flexBlurBackgroundDuringProgress);
  	form.add (flexProgressIndicator);
	animateProgressIndicator ();
}

/**
 * @function dismissLoadingIndicator
 *
 */
function dismissLoadingIndicator ()
{
  var form = kony.application.getCurrentForm();
  form.remove (form.flexBlurBackgroundDuringProgress);
  form.remove (form.flexProgressIndicator);
}

/**
 * @function animateProgressIndicator
 *
 */
function animateProgressIndicator ()
{
  var currentForm = kony.application.getCurrentForm();

  var transform1 = kony.ui.makeAffineTransform();
  transform1.rotate3D(0,0,1,0);

  var transform2 = kony.ui.makeAffineTransform();
  transform2.rotate3D(90,0,1,0);

  var transform3 = kony.ui.makeAffineTransform();
  transform3.rotate3D(180,0,1,0);
  
  var transform4 = kony.ui.makeAffineTransform();
  transform4.rotate3D(270,0,1,0);

  var transform5 = kony.ui.makeAffineTransform();
  transform5.rotate3D(360,0,1,0);

  var animationObject = {
                          0: {"transform": transform1,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          25: {"transform": transform2,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          50: {"transform": transform3,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          75: {"transform": transform4,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
                          100: {"transform": transform5,"opacity":1,"stepConfig":{"timingFunction":kony.anim.LINEAR}}
 						 };
  
  var animationConfigObject = {
                                "duration":1,
                                "iterationCount":0,
                                "direction":kony.anim.DIRECTION_NONE,
                                "fillMode":kony.anim.FILL_MODE_NONE
                              };
  var animationCallbackObject = {"animationEnd" : function(){}};

  currentForm.imgLoadingIndicator.animate(kony.ui.createAnimation(animationObject),animationConfigObject,animationCallbackObject);
}

/**
 * @function showMessage
 *
 */
function showMessage (msg)
{
	var form = kony.application.getCurrentForm();
  	var flexBlurBackgroundWhileShowingMessage = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "flexBlurBackgroundWhileShowingMessage",
        "width": "100%",
        "zIndex": 9,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "isVisible": true,
        "onClick": emptyCallback,
      	"layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "sknFlex10"
    }, {}, {});
  	var flexMsg = new kony.ui.FlexContainer({
        //"autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "height": "60dp",
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "id": "flexMsg",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "onClick": dismissMessage,
        "skin": "sknFlex1",
        "width": "90%",
        "zIndex": 10
    }, {}, {});
    flexMsg.setDefaultUnit(kony.flex.DP);
    var imgMsg = new kony.ui.Image2({
        "height": "35dp",
        "id": "imgMsg",
        "isVisible": true,
        "left": "15dp",
        "skin": "slImage",
        "src": "icon.png",
        //"top": "5dp",
        "centerY": "50%",
        "width": "40dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMsg = new kony.ui.Label({
        "bottom": "10dp",
        "id": "lblMsg",
        "isVisible": true,
        "left": "65dp",
        "skin": "sknLbl3",
        "text": msg,
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10dp",
        "width": "230dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flexMsg.add(imgMsg, lblMsg);
    form.add(flexMsg, flexBlurBackgroundWhileShowingMessage);
}

/**
 * @function dismissMessage
 *
 */
function dismissMessage ()
{
	var form = kony.application.getCurrentForm();
  	if (form.flexMsg)
 		form.remove (form.flexMsg);
  	if (form.flexBlurBackgroundWhileShowingMessage)
 		form.remove (form.flexBlurBackgroundWhileShowingMessage);
}

/**
 * @function closeHamburgerMenu
 *
 */
function closeHamburgerMenu ()
{
  var currentForm = kony.application.getCurrentForm();
  var animationObject = kony.ui.createAnimation({100 : {"left":"-100%"}});
  var animationConfigObject = {"duration":0.25,"iterationCount":1,"delay":0,"direction":kony.anim.DIRECTION_NONE,"fillMode":kony.anim.FILL_MODE_FORWARDS};
  var animationCallbackObject = {animationEnd:emptyCallback};
  currentForm.flexHamburgerMenu.animate(animationObject, animationConfigObject, animationCallbackObject);
}

/**
 * @function openHamburgerMenu
 *
 */
function openHamburgerMenu ()
{
  var currentForm = kony.application.getCurrentForm();
  var animationObject = kony.ui.createAnimation({100 : {"left":"0%"}});
  var animationConfigObject = {"duration":0.25,"iterationCount":1,"delay":0,"direction":kony.anim.DIRECTION_NONE,"fillMode":kony.anim.FILL_MODE_FORWARDS};
  var animationCallbackObject = {animationEnd:emptyCallback};
  currentForm.flexHamburgerMenu.animate(animationObject, animationConfigObject, animationCallbackObject);
}

/**
 * @function resetHamburgerMenuSelection
 *
 */
function resetHamburgerMenuSelection () {
  var currentForm = kony.application.getCurrentForm();
  if (gblSelectedHamburgerMenuItem === "flexMenuItem1")
  	currentForm.flexHamburgerMenu.flexMenuItem1.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem1.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem2")
  	currentForm.flexHamburgerMenu.flexMenuItem2.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem2.skin = sknFlex4;
  
  if (gblSelectedHamburgerMenuItem === "flexMenuItem3")
  	currentForm.flexHamburgerMenu.flexMenuItem3.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem3.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem4")
  	currentForm.flexHamburgerMenu.flexMenuItem4.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem4.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem5")
  	currentForm.flexHamburgerMenu.flexMenuItem5.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem5.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem6")
  	currentForm.flexHamburgerMenu.flexMenuItem6.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem6.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem7")
  	currentForm.flexHamburgerMenu.flexMenuItem7.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem7.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem8")
  	currentForm.flexHamburgerMenu.flexMenuItem8.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem8.skin = sknFlex4;
  
  if (gblSelectedHamburgerMenuItem === "flexMenuItem9")
  	currentForm.flexHamburgerMenu.flexMenuItem9.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem9.skin = sknFlex4;

  if (gblSelectedHamburgerMenuItem === "flexMenuItem9")
  	currentForm.flexHamburgerMenu.flexMenuItem10.skin = sknFlex6;
  else
  	currentForm.flexHamburgerMenu.flexMenuItem10.skin = sknFlex4;
}