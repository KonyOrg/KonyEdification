/**
 * @module dashboard
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function populateLatestActivitesOnDashboard
 *
 */
function populateLatestActivitesOnDashboard ()
{
  	kony.print (" ***** Entering into populateLatestActivitesOnDashboard ***** ");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
    var dataObject = new kony.sdk.dto.DataObject("LatestActivites");
    var options = {"dataObject":dataObject};
	showProgressIndicator ("Retrieving Latest Activites ...");
  	objSvc.fetch(options,
                 /**
                  * @function successcallback for populateLatestActivitesOnDashboard
                  *
                  */
                 function(res){
      				dismissLoadingIndicator ();
                    kony.print (" ***** In successcallback of populateLatestActivitesOnDashboard ***** ");
      				if (res.records.length === 0){
                      frmDashboard.segLatestActivites.setVisibility(false);
                      frmDashboard.flexNoData.setVisibility(true);
                    }
      				else{
                      var masterDataForLatestActivitesSegment = [];
                      for (var i=0;i<res.records.length;i++)
                      {
                        masterDataForLatestActivitesSegment.push({"imgSegRowSummary1":res.records[i].Image,"lblHeadLine":res.records[i].Summary,"lblPubDate":res.records[i].PublishDate,"url":res.records[i].URL});
                      }
                      frmDashboard.flexNoData.setVisibility(false);
                      frmDashboard.segLatestActivites.setVisibility(true);
                      frmDashboard.segLatestActivites.setData(masterDataForLatestActivitesSegment);
                    }
                    kony.print (" ***** Exiting successcallback of login ***** ");
    			 },
                 /**
                  * @function errorcallback for populateLatestActivitesOnDashboard
                  *
                  */
                 function(err){
      				dismissLoadingIndicator ();
      				kony.print (" ***** In errorcallback of populateLatestActivitesOnDashboard. "+ JSON.stringify(err) +" ***** ");
      				showMessage ("Due to technical issues, unable to login at this time.");
                    kony.print (" ***** Exiting errorcallback of login ***** ");
    			}
                );  
	kony.print (" ***** Exiting out of populateLatestActivitesOnDashboard ***** ");
}