var contextPath = "/ekp";
var orgName = "Red";

$(document).ready(function() {
  $.get(contextPath + "/api/assignments", {format: "json"}, function(data) {
    var assignments = data.assignments;
    var assignmentId = assignments.filter(function(assignment) {
      return assignment.organization.description == orgName;
    }).concat(assignments)[0].id;
    $.get(contextPath + "/servlet/ekp/ASSIGNMENTSWITCHER", {ASSIGNMENT_ID: assignmentId, ACTION: "SWITCH"}, function(data) {
      window.location.replace(data.redirect);
    })
  });
})
