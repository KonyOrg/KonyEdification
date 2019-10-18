/**
  * @function shareAboutAppInAndroid
  * this function is for share or recommend this application to other users
  * this function will be called onClick of the share button
  * end
  */
function shareAboutAppInAndroid(){
  
  var KonyMain = java.import("com.konylabs.android.KonyMain");
  var Intent = java.import("android.content.Intent");
  var String=java.import("java.lang.String");
  var intentObject=new Intent(Intent.ACTION_SEND);  
  intentObject.setType("text/plain");
  intentObject.putExtra(Intent.EXTRA_SUBJECT, "Kony Edification");
  //var str = new String("");
  var str =  "Look at this awesome Kony Edification application for aspiring Kony Developers -> http://www.konyhackathon.com/KonyEdification";
  intentObject.putExtra(Intent.EXTRA_TEXT, str);  
  var contextObject = KonyMain.getActContext();
  contextObject.startActivity(Intent.createChooser(intentObject, "choose one"));
}

function shareAboutAppIniPhone(){ 
 
  var textToShare = "Look at this awesome Kony Edification application for aspiring Kony Developers -> ";
  var NSURL = objc.import("NSURL");
  var NSURLObjectLink=NSURL.URLWithString("http://www.konyhackathon.com/KonyEdification");
  var shareItems = [textToShare, NSURLObjectLink];
 var UIActivityViewController = objc.import("UIActivityViewController");
  var avcObject=UIActivityViewController.alloc().initWithActivityItemsApplicationActivities(shareItems, undefined);
  //var avcObject=UIActivityViewController.alloc().jsinit();
  //avcObject.initWithActivityItemsApplicationActivities(shareItems,null);
 //  UIActivityViewController * avc = [[UIActivityViewController alloc] initWithActivityItems:shareItems applicationActivities:nil];
 //self.presentViewControllerAnimatedCompletion(avcObject,true,undefined);
  var UIApplication = objc.import("UIApplication");
  UIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(avcObject, true, undefined);
	//self presentViewController:avc animated:YES completion:nil];
  
  
  //NSString *textToShare = @"Look at this awesome website for aspiring iOS Developers!";
  //  NSURL *myWebsite = [NSURL URLWithString:@"http://www.codingexplorer.com/"];
 
  //  NSArray *objectsToShare = @[textToShare, myWebsite];
 
  //  UIActivityViewController *activityVC = [[UIActivityViewController alloc] initWithActivityItems:objectsToShare applicationActivities:nil];

  
  
   
}


function getDeviceInfoAndShare(){
  //#ifdef android
  shareAboutAppInAndroid()
  //#else
  shareAboutAppIniPhone();
  //#endif
}