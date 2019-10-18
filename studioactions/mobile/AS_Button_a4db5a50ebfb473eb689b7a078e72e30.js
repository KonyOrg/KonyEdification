function AS_Button_a4db5a50ebfb473eb689b7a078e72e30(eventobject) {
    frmRegistration.btnCreateAnAccount.text = "SIGN UP";
    frmRegistration.btnCreateAnAccount.onClick = registerNewUser;
    //kony.store.setItem("isTermsAndConditionsAccepted",true);
    frmRegistration.show();
}