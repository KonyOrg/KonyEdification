/**
 * @module topicsselection
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function animateTopicsInsideSegment
 *
 */
function animateTopicsInsideSegment() {
    var animationObject = kony.ui.createAnimation({
        "0": {
            "centerX": "150%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "50": {
            "centerX": "48%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "centerX": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        "duration": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {}
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    kony.print("after animationDefObject");
    var animationObject1 = kony.ui.createAnimation({
        "0": {
            "centerX": "-155%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "50": {
            "centerX": "52%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "centerX": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });

    var animationDefObject1 = {
        definition: animationObject1,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    kony.print("after animationDefObject1");

    var row1 = {
        sectionIndex: 0,
        rowIndex: 0
    };
    var row3 = {
        sectionIndex: 0,
        rowIndex: 2
    };
    var row5 = {
        sectionIndex: 0,
        rowIndex: 4
    };

    var evenrowList = [row1, row3, row5];

    /*var evenrowList=[];
    var evenrowNumber;
    var k=[0,2,4,6,8,10,12,14];
    for(var i=0;i<k.length;i++){

    evenrowNumber={sectionIndex:0,rowIndex:k[i]};
    evenrowList.push(evenrowNumber);
    }
    kony.print("even numbers"+evenrowList);
    var oddrowList=[];
    var oddrowNumber;
    var l=[1,3,5,7,9,11,13,15];
    for(var j=0;j<l.length;j++){

    oddrowNumber={sectionIndex:0,rowIndex:l[j]};
    oddrowList.push(oddrowNumber); 
    }

    kony.print("odd numbers"+oddrowList);*/

    var row2 = {
        sectionIndex: 0,
        rowIndex: 1
    };
    var row4 = {
        sectionIndex: 0,
        rowIndex: 3
    };

    var row6 = {
        sectionIndex: 0,
        rowIndex: 5
    };
    var oddrowList = [row2, row4, row6];
    frmTopicsInAModule.segAvailableModules.animateRows({
        rows: evenrowList,
        widgets: ["flexOuterContainer"],
        animation: animationDefObject
    });
    frmTopicsInAModule.segAvailableModules.animateRows({
        rows: oddrowList,
        widgets: ["flexOuterContainer"],
        animation: animationDefObject1
    });
    kony.print("exiting from animateTopics");
}

/**
 * @function populateTopicsForTheSelectedCourse
 *
 */
function populateTopicsForTheSelectedCourse ()
{
  kony.print (" ***** Entering into populateTopicsForTheSelectedCourse ***** ");
  var objSvc = kony.sdk.getCurrentInstance().getObjectService("TrainingService", {"access":"online"});
  var dataObject = new kony.sdk.dto.DataObject("Modules");
  var options = {"dataObject":dataObject};
  dataObject.setOdataUrl("$filter=CourseID eq '"+frmCourseSelection.segAvailableCourses.selectedRowItems[0].CourseID+"'");
  showProgressIndicator ("Retrieving available topics in the selected course ...");
  objSvc.fetch(options,
               	/**
                  * @function successcallback for populateAvailableTopicsInSelectedCourse
                  *
			 	  */
               function(res){
                 kony.print (" ***** In successcallback of populateAvailableTopicsInSelectedCourse ***** ");
    			 if (res.records.length === 0)
                 {
                    dismissLoadingIndicator ();
			        frmTopicsInAModule.segAvailableModules.setVisibility(false);
					frmTopicsInAModule.flexNoData.setVisibility(true);
                   	frmTopicsInAModule.show();
                 }
    			 else
                 {
      				var masterDataForTopicsInACourse = [];
      				for (var i=0;i<res.records.length;i++)
                    {
                      masterDataForTopicsInACourse.push({"CourseID":res.records[i].CourseID,"ModuleID":res.records[i].ModuleID,"ModuleVideoURL":res.records[i].ModuleVideoURL,"lblModuleName":res.records[i].ModuleName,"imgLogo":"icon.png"});
                    }
      				frmTopicsInAModule.segAvailableModules.setData(masterDataForTopicsInACourse);
					frmTopicsInAModule.flexNoData.setVisibility(false);
			        frmTopicsInAModule.segAvailableModules.setVisibility(true);
                    dismissLoadingIndicator ();
      				frmTopicsInAModule.show();
                 }
    			 kony.print (" ***** Exiting errorcallback of populateAvailableTopicsInSelectedCourse ***** ");
  			   },
               	/**
                  * @function errorcallback for populateAvailableTopicsInSelectedCourse
                  *
			 	  */
               function(err){
                  dismissLoadingIndicator ();
                  kony.print (" ***** In errorcallback of populateAvailableTopicsInSelectedCourse. "+ JSON.stringify(err) +" ***** ");
                  showMessage ("Due to technical issues, unable to fetch available topics under selected course.");
                  kony.print (" ***** Exiting errorcallback of populateAvailableTopicsInSelectedCourse ***** ");
  			   }
              );  
  kony.print (" ***** Exiting out of populateTopicsForTheSelectedCourse ***** ");
}