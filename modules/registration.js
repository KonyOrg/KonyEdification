/**
 * @module registration
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function 
 *
 */
function resetRegistrationForm ()
{
  frmRegistration.tbxUserName.text = "";
  frmRegistration.tbxEmail.text = "";
  frmRegistration.tbxPassword.text = "";
  frmRegistration.tbxConfirmPassword.text = "";
  frmRegistration.tbxPhone.text = "";
  frmRegistration.lstUserType.masterData = [["0","Select UserType"],["1","Designer"],["2","Developer"]];
  frmRegistration.lstUserType.selectedKey = "0";
}

/**
 * @function checkValueIsNullOrEmpty
 *
 */
function validateRegistrationData ()
{
  kony.print (" ***** Entering into validateRegistrationData ***** ");
  if (frmRegistration.tbxUserName.text === null || frmRegistration.tbxUserName.text.trim() === "")
  {
    frmRegistration.flexUserName.skin = sknFlex9;
	showMessage ("Name is mandatory");
    kony.print (" ***** Exiting out of validateRegistrationData, name is mandatory, returning false ***** ");
    return false;
  }
  else if (frmRegistration.tbxEmail.text === null || frmRegistration.tbxEmail.text.trim() === "")
  {
    frmRegistration.flexEmailID.skin = sknFlex9;
	showMessage ("Email is mandatory");
    kony.print (" ***** Exiting out of validateRegistrationData, email is mandatory, returning false ***** ");
    return false;
  }
  else if (!emailValidation (frmRegistration.tbxEmail.text))
  {
    frmRegistration.flexEmailID.skin = sknFlex9;
	showMessage ("Invalid Email");
    kony.print (" ***** Exiting out of validateRegistrationData, invalid Email, returning false ***** ");
    return false;
  }
  else if (frmRegistration.tbxPassword.text === null || frmRegistration.tbxPassword.text.trim() === "")
  {
    frmRegistration.flexPassword.skin = sknFlex9;
	showMessage ("Password is mandatory");
    kony.print (" ***** Exiting out of validateRegistrationData, password is mandatory, returning false ***** ");
    return false;
  }
  else if (frmRegistration.tbxConfirmPassword.text === null || frmRegistration.tbxConfirmPassword.text.trim() === "")
  {
    frmRegistration.flexConfirmPassword.skin = sknFlex9;
	showMessage ("Confirmation password is mandatory");
    kony.print (" ***** Exiting out of validateRegistrationData, Confirmation password is mandatory, returning false ***** ");
    return false;
  }
  else if (!matchPasswordWithConfirmPassword ())
  {
    frmRegistration.flexConfirmPassword.skin = sknFlex9;
	showMessage ("Password confirmation doesn't match");
    kony.print (" ***** Exiting out of validateRegistrationData, password confirmation doesn't match, returning false ***** ");
    return false;
  }
  else if (frmRegistration.tbxPhone.text === null || frmRegistration.tbxPhone.text.trim() === "")
  {
    frmRegistration.flexPhone.skin = sknFlex9;
	showMessage ("Phone number is mandatory");
    kony.print (" ***** Exiting out of validateRegistrationData, phone number is mandatory, returning false ***** ");
    return false;
  }
  else if (!phoneNumberValidation ())
  {
    frmRegistration.flexPhone.skin = sknFlex9;
	showMessage ("Invalid Phone number");
    kony.print (" ***** Exiting out of validateRegistrationData, invalid phone number, returning false ***** ");
    return false;
  }
  else if (frmRegistration.lstUserType.selectedKey === "0")
  {
    frmRegistration.flexUserType.skin = sknFlex9;
	showMessage ("Usertype is mandatory");
    kony.print (" ***** Exiting out of validateRegistrationData, validation for usertype failed, returning false ***** ");
    return false;
  }
  else
  {
    kony.print (" ***** Exiting out of validateRegistrationData, validation successful, returning true ***** ");
    return true;
  }
}

/**
 * @function registerNewUser
 *
 */
function registerNewUser()
{
  kony.print (" ***** Entering into registerNewUser ***** ");
  if(validateRegistrationData ())
  {
  	kony.print (" ***** In registerNewUser, validation of registrationData is successfull. Proceeding with registration ***** ");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
    var dataObject = new kony.sdk.dto.DataObject("Users");
    dataObject.addField("Name",frmRegistration.tbxUserName.text);
    dataObject.addField("Email",frmRegistration.tbxEmail.text);
    dataObject.addField("Password",frmRegistration.tbxPassword.text);
    dataObject.addField("Phone",frmRegistration.tbxPhone.text);
    dataObject.addField("UserTypeID",frmRegistration.lstUserType.selectedKey);
    var options = {"dataObject":dataObject};
	showProgressIndicator ("Registration in progress ...");
    objSvc.create(options,
                  /**
                   * @function successcallback for registerNewUser
                   *
                   */
                  function(res){
                    kony.print (" ***** In successcallback of registerNewUser ***** ");
      				dismissLoadingIndicator ();
      				gblUserType = frmRegistration.lstUserType.selectedKey;
      				frmDashboard.show();
                    kony.print (" ***** Exiting successcallback of registerNewUser ***** ");
    			  },
                  /**
                   * @function errorcallback for registerNewUser
                   *
                   */
                  function(err){
                    kony.print (" ***** In errorcallback of registerNewUser ***** ");
      				dismissLoadingIndicator ();
					frmRegistration.flexEmailID.skin = sknFlex9;
      				showMessage ("Registration Unsuccessful. User with this email already registered.");
                    kony.print (" ***** Exiting successcallback of registerNewUser ***** ");
    			  }
                 );
  }
    kony.print (" ***** Exiting out of registerNewUser ***** ");
}

/**
 * @function matchPasswordWithConfirmPassword
 *
 */
function matchPasswordWithConfirmPassword ()
{
  kony.print (" ***** Entering into matchPasswordWithConfirmPassword ***** ");
  var password = frmRegistration.tbxPassword.text;
  var confirmationPassword = frmRegistration.tbxConfirmPassword.text;
  if (!kony.string.equals(password, confirmationPassword))
  {
    kony.print (" ***** Exiting out of matchPasswordWithConfirmPassword, returning false ***** ");
    return false;
  }
  else
  {
    kony.print (" ***** Exiting out of matchPasswordWithConfirmPassword, returning true ***** ");
    return true;
  }
}

/**
 * @function fetchUserTypes
 *
 */
function fetchUserTypes ()
{
    kony.print (" ***** Entering into fetchUserTypes ***** ");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
    var dataObject = new kony.sdk.dto.DataObject("UserType");
    var options = {"dataObject":dataObject};
	showProgressIndicator ("Loading ...");
  	objSvc.fetch(options,
                 /**
                  * @function successcallback for fetchUserTypes
                  *
                  */
                 function(res){
      				dismissLoadingIndicator ();
                    kony.print (" ***** In successcallback of fetchUserTypes. Populating the UserType dropdown ***** ");
      				var masterDataForUserTypeDropdown = [["0","Select UserType"]];
      				for (var i=0;i<res.records.length;i++)
                    {
                      masterDataForUserTypeDropdown.push([res.records[i].UserTypeID,res.records[i].UserTypeDescription]);
                    }
      				frmRegistration.lstUserType.masterData = masterDataForUserTypeDropdown;
			        frmRegistration.lstUserType.selectedKey = "0";
      				frmRegistration.show();
                    kony.print (" ***** Exiting successcallback of fetchUserTypes ***** ");
    			 },
                 /**
                  * @function errorcallback for fetchUserTypes
                  *
                  */
                 function(err){
      				dismissLoadingIndicator ();
      				kony.print (" ***** In errorcallback of fetchUserTypes. Error while fetching the UserTypes"+ JSON.stringify(err) +" ***** ");
      				frmRegistration.show();
                    kony.print (" ***** Exiting errorcallback of fetchUserTypes ***** ");
    			}
                );
    kony.print (" ***** Exiting out of fetchUserTypes ***** ");
}
