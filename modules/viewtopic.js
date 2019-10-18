/**
 * @module viewtopic
 *
 * @author Venkata Raju Bankapalli <venkata.bankapalli@kony.com>
 */

/**
 * @function viewVideoForTopic
 *
 */
function viewVideoForTopic ()
{
  kony.print (" ***** Entering into viewVideoForTopic ***** ");
  frmViewTopic.video.source = {"mp4": frmTopicsInAModule.segAvailableModules.selectedRowItems[0].ModuleVideoURL};
  frmViewTopic.lblTopicName.text = frmTopicsInAModule.segAvailableModules.selectedRowItems[0].lblModuleName;
  frmViewTopic.show();
  kony.print (" ***** Exiting out of viewVideoForTopic ***** ");
}