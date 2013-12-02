var Page = {

    addSkill: function(section, name) {
        var sectionObj = $("#" + section);
        var skillTemplate = $("#skill-badge-template").html()

        /*var comment;
        if (percentage <= 25)
            comment = "beginner";
        else if (percentage <= 50)
            comment = "novice";
        else if (percentage <= 75)
            comment = "experienced";
        else
            comment = "experienced++";*/


        var output = Mustache.render(skillTemplate, {skillName: name});
        sectionObj.append(output)
        sectionObj.add(output);
    }


}


var onLoadBody = function() {

    Page.addSkill("working-skills", "Android");
    Page.addSkill("working-skills", "Python");
    Page.addSkill("working-skills", "Java");
    Page.addSkill("working-skills", "C#");
    Page.addSkill("working-skills", ".NET");
    Page.addSkill("working-skills", "HTML");
    Page.addSkill("working-skills", "CSS");
    Page.addSkill("working-skills", "Javascript");
    Page.addSkill("working-skills", "GIT");
    Page.addSkill("working-skills", "SVN");
    Page.addSkill("working-skills", "Python");
    Page.addSkill("working-skills", "Tomcat");
    Page.addSkill("working-skills", "OpenGL ES 1.1");


    Page.addSkill("basic-skills", "iOS");
    Page.addSkill("basic-skills", "Qt");
    Page.addSkill("basic-skills", "Grails");
    Page.addSkill("basic-skills", "Flask");
    Page.addSkill("basic-skills", "C++");
    Page.addSkill("basic-skills", "C");
    Page.addSkill("basic-skills", "Lua");
    Page.addSkill("basic-skills", "MySQL");
    Page.addSkill("basic-skills", "OpenGL");
    Page.addSkill("basic-skills", "Grails");
    Page.addSkill("basic-skills", "Photoshop CS3");
    Page.addSkill("basic-skills", "Unity");


    /*Page.addSkill("mobile", "Android", "75");
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
    Page.addSkill("others", "Apache Solr", "50");*/

}

var map;
function initialize() {

    var myLatLon =  new google.maps.LatLng(-7.217033, -35.91045);

    var mapOptions = {
        zoom: 8,
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

$(".social-icon svg").on("click", function(event) {
    var name = $(this).parent().attr("id");
    var url = "";
    if (name == "facebook") {
        url = "https://www.facebook.com/yurifariasg";
    } else if (name == "gplus") {
        url = "https://plus.google.com/+YuriFariasGomes";
    } else if (name == "github") {
        url = "https://github.com/yurifariasg";
    } else if (name == "instagram") {
        url = "http://instagram.com/yurifg";
    } else if (name == "twitter") {
        url = "https://twitter.com/yurifariasg";
    } else if (name == "linkedin") {
        url = "http://br.linkedin.com/pub/yuri-farias-gomes/35/52b/488/en";

    }
    window.open(url);
});

$("body").show()