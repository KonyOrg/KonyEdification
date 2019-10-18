/**
 * @module businessLogic
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */
var gblUserType;

gblSelectedHamburgerMenuItem = "flexMenuItem1";
/**
 * @function emailValidation
 *
 */
function emailValidation (email)
{
  var emailRegx = /(\w+)\@(\w+)\.[a-zA-Z]/g;
  if (!emailRegx.test(email))
    return false;
  else
    return true;
}

/**
 * @function phoneNumberValidation
 *
 */
function phoneNumberValidation ()
{
  var phonenoRegx = /^\d{10}$/;
  if (!phonenoRegx.test(frmRegistration.tbxPhone.text))
    return false;
  else
    return true;
  
}

/**
 * Commented this because we changed the application flow. 
 *  Always we want to show the startup screen with "Registed User?" and "Create An Account" options
 * @function setDynamicStartupForm
 *
function setDynamicStartupForm()
{
	kony.print (" ***** Entering into setDynamicStartupForm ***** ");
  	var isTermsAndConditionsAccepted = kony.store.getItem("isTermsAndConditionsAccepted");
	kony.print (" ***** isTermsAndConditionsAccepted: "+ isTermsAndConditionsAccepted +" ***** ");
	if(isTermsAndConditionsAccepted) 
    {
		return frmLogin;
	}
	else 
    { 
      	return frmStartup; 
    } 
	kony.print (" ***** Exiting out of setDynamicStartupForm ***** ");
}
 */