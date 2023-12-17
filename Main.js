/* script.js */

$(document).ready(function() {
  // Get all pending requests
  var pendingRequests = getData('pending-requests');
  renderRequests(pendingRequests, '#pending-requests-list');

  // Get all open requests
  var openRequests = getData('open-requests');
  renderRequests(openRequests, '#open-requests-list
