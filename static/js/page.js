var Page = {

    addSkill: function(section, name, percentage) {
        var sectionObj = $("#" + section);
        var skillTemplate = $("#skill-row-template").html()

        var comment;
        if (percentage <= 25)
            comment = "beginner";
        else if (percentage <= 50)
            comment = "novice";
        else if (percentage <= 75)
            comment = "experienced";
        else
            comment = "experienced++";


        var output = Mustache.render(skillTemplate, {skillName: name, percentage: percentage, comment: comment});
        sectionObj.append(output)
        sectionObj.add(output);
    }


}


var onLoadBody = function() {

    Page.addSkill("mobile", "Android", "75");
    Page.addSkill("mobile", "iOS", "25");
    Page.addSkill("mobile", "Qt/S60", "50");

    Page.addSkill("frontend", "HTML", "50");
    Page.addSkill("frontend", "CSS", "50");
    Page.addSkill("frontend", "Javascript", "50");

    Page.addSkill("backend", "Grails", "50");
    Page.addSkill("backend", ".NET", "75");
    Page.addSkill("backend", "Flask", "25");

    Page.addSkill("languages", "Java", "100");
    Page.addSkill("languages", "Python", "75");
    Page.addSkill("languages", "C#", "75");
    Page.addSkill("languages", "C++", "50");
    Page.addSkill("languages", "C", "25");
    Page.addSkill("languages", "Lua", "25");

    Page.addSkill("others", "MySQL", "50");
    Page.addSkill("others", "Tomcat", "75");
    Page.addSkill("others", "Apache Solr", "50");

}

var map;
function initialize() {

    var myLatLon =  new google.maps.LatLng(-7.217033, -35.91045);

    var mapOptions = {
        zoom: 16,
        center: myLatLon
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLon,
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function() {
    $('#nav-bar-menu').bind('click', 'ul li a', function(event) {
        event.preventDefault();
        $.scrollTo(event.target.hash, 250);
    });
});