/**
 * @module login
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */


/**
 * @function 
 *
 */
function resetLoginForm ()
{
  frmLogin.tbxEmail.text = "";
  frmLogin.tbxPassword.text = "";
  frmLogin.flexRememberUserIDCheckbox.skin = sknFlex7;
}

/**
 * @function frmLoginInit
 *
 */
function frmLoginInit ()
{
  kony.print (" ***** Entering into frmLoginInit ***** ");
  var rememberedUserID = kony.store.getItem("remembereduserid");
  kony.print (" ***** Remembered userid: "+rememberedUserID+" ***** ");
  if (rememberedUserID)
  {
      frmLogin.tbxEmail.text = rememberedUserID;
  }
  kony.print (" ***** Exiting out of frmLoginInit ***** ");
}

/**
 * @function login
 *
 */
function login ()
{
  kony.print (" ***** Entering into login ***** ");
  var email = frmLogin.tbxEmail.text;
  var password = frmLogin.tbxPassword.text;
  kony.print (" ***** Entering email, password is: "+email+", "+password+" ***** ");
  if(validateLoginData ())
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
    var dataObject = new kony.sdk.dto.DataObject("Users");
    var options = {"dataObject":dataObject};
    dataObject.addField("Email",email);
    dataObject.addField("Password",password);
    dataObject.setOdataUrl("$filter=Email eq '"+email+"' and Password eq '"+password+"'");
	showProgressIndicator ("Login in progress ...");
  	objSvc.fetch(options,
                 /**
                  * @function successcallback for login
                  *
                  */
                 function(res){
      				dismissLoadingIndicator ();
                    kony.print (" ***** In successcallback of login ***** ");
      				if (res.records.length === 0){
      					showMessage ("Invalid credentials");
                    }
      				else{
      					gblUserType = res.records[0].UserTypeID;
                        if (frmLogin.flexRememberUserIDCheckbox.skin === sknFlex8)
                        {
                            kony.store.setItem("remembereduserid",frmLogin.tbxEmail.text);
                        }
                      	frmLogin.tbxEmail.text = "";
                      	frmLogin.tbxPassword.text = "";
                      	frmLogin.flexRememberUserIDCheckbox.skin = sknFlex7;
                      	frmDashboard.show();
                    }
                    kony.print (" ***** Exiting successcallback of login ***** ");
    			 },
                 /**
                  * @function errorcallback for login
                  *
                  */
                 function(err){
      				dismissLoadingIndicator ();
      				kony.print (" ***** In errorcallback of login. "+ JSON.stringify(err) +" ***** ");
      				showMessage ("Due to technical issues, unable to login at this time.");
                    kony.print (" ***** Exiting errorcallback of login ***** ");
    			}
                );
    
  }  
  kony.print (" ***** Exiting out of login ***** ");
}

/**
 * @function validateLoginData
 * 
 */
function validateLoginData ()
{
  kony.print (" ***** Entering into validateLoginData ***** ");
  if (frmLogin.tbxEmail.text === null || frmLogin.tbxEmail.text.trim() === "")
  {
    frmLogin.flexEmailID.skin = sknFlex9;
	showMessage ("Email is mandatory");
    kony.print (" ***** Exiting out of validateLoginData, email is mandatory, returning false ***** ");
    return false;
  }
  else if (!emailValidation (frmLogin.tbxEmail.text))
  {
    frmLogin.flexEmailID.skin = sknFlex9;
	showMessage ("Invalid Email");
    kony.print (" ***** Exiting out of validateLoginData, invalid Email, returning false ***** ");
    return false;
  }
  else if (frmLogin.tbxPassword.text === null || frmLogin.tbxPassword.text.trim() === "")
  {
    frmLogin.flexPassword.skin = sknFlex9;
	showMessage ("Password is mandatory");
    kony.print (" ***** Exiting out of validateLoginData, password is mandatory, returning false ***** ");
    return false;
  }
  else
  {
    kony.print (" ***** Exiting out of validateLoginData, validation successful, returning true ***** ");
    return true;
  }  
}