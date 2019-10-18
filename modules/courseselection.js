/**
 * @module courseselection
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function populateAvailableCoursesForLoggedInUserType
 *
 */
function populateAvailableCoursesForLoggedInUserType ()
{
  	kony.print (" ***** Entering into populateAvailableCoursesForLoggedInUserType ***** ");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
    var dataObject = new kony.sdk.dto.DataObject("Courses_UserType_Mapping");
    var options = {"dataObject":dataObject};
    dataObject.setOdataUrl("$filter=UserTypeID eq '"+gblUserType+"'");
	showProgressIndicator ("Retrieving available courses ...");
	objSvc.fetch(options,
                 /**
                  * @function successcallback for populateAvailableCoursesForLoggedInUserType
                  *
			 	  */
                 function(res){
                    kony.print (" ***** In successcallback of populateAvailableCoursesForLoggedInUserType ***** ");
      				if (res.records.length !== 0)
                    {
					  masterDataForAvailableCourses = [];
                      j = res.records.length;
                      for (var i=0;i<res.records.length;i++)
                      {
                        var objSvc1 = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
                        var dataObject1 = new kony.sdk.dto.DataObject("Courses");
                        var options1 = {"dataObject":dataObject1};
                        dataObject1.setOdataUrl("$filter=CourseID eq '"+res.records[i].CourseID+"'");
                        objSvc1.fetch(options1,
                                     /**
                                      * @function successcallback for retrieveCourseDetails
                                      *
                                      */
                                     function(res1){
                          				j--;
                                        kony.print (" ***** In successcallback of retrieveCourseDetails ***** ");
                          				masterDataForAvailableCourses.push({"lblCourse":res1.records[0].CourseName,"imgCourse":res1.records[0].CourseImage,"CourseID":res1.records[0].CourseID,"CourseDescription":res1.records[0].CourseDescription,"CourseDetails":res1.records[0].CourseDetails});
                                        kony.print (" ***** Exiting successcallback of retrieveCourseDetails ***** ");
                          				if (j === 0){
                                          frmCourseSelection.segAvailableCourses.setData(masterDataForAvailableCourses);
                                          dismissLoadingIndicator ();
                                          frmCourseSelection.segAvailableCourses.setVisibility(true);
                                        }
                                     },
                                     /**
                                      * @function errorcallback for retrieveCourseDetails
                                      *
                                      */
                                     function(err1){
                                        dismissLoadingIndicator ();
                                        kony.print (" ***** In errorcallback of retrieveCourseDetails. "+ JSON.stringify(err1) +" ***** ");
                                        showMessage ("Due to technical issues, unable to fetch available courses for the logged in user.");
                                        kony.print (" ***** Exiting errorcallback of retrieveCourseDetails ***** ");
                                    }
                                    );  
                      }
                    }
                    else
                    {
					  dismissLoadingIndicator ();
                      frmCourseSelection.flexNoData.setVisibility(true);
                    }
                    kony.print (" ***** Exiting successcallback of populateAvailableCoursesForLoggedInUserType ***** ");
    			 },
                 /**
                  * @function errorcallback for populateAvailableCoursesForLoggedInUserType
                  *
			 	  */
                 function(err){
      				dismissLoadingIndicator ();
      				kony.print (" ***** In errorcallback of populateAvailableCoursesForLoggedInUserType. "+ JSON.stringify(err) +" ***** ");
      				showMessage ("Due to technical issues, unable to fetch available courses for the logged in user.");
                    kony.print (" ***** Exiting errorcallback of populateAvailableCoursesForLoggedInUserType ***** ");
    			}
                );  
	kony.print (" ***** Exiting out of populateAvailableCoursesForLoggedInUserType ***** ");
}