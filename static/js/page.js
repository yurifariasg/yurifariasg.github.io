var Page = {

    addSkill: function(section, name) {
        var sectionObj = $("#" + section);
        var skillTemplate = $("#skill-badge-template").html()

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
    Page.addSkill("working-skills", "MySQL");
    Page.addSkill("working-skills", "HTTP");
    Page.addSkill("working-skills", "RESTful Services");

    Page.addSkill("basic-skills", "Swift");
    Page.addSkill("basic-skills", "C++");
    Page.addSkill("basic-skills", "Qt");
    Page.addSkill("basic-skills", "Flask");
    Page.addSkill("basic-skills", "C");
    Page.addSkill("basic-skills", "Lua");
    Page.addSkill("basic-skills", "OpenGL");
    Page.addSkill("basic-skills", "Photoshop CS3");
    Page.addSkill("basic-skills", "Unity");
    Page.addSkill("basic-skills", "Rails");
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
        url = "http://instagram.com/yurifariasg";
    } else if (name == "twitter") {
        url = "https://twitter.com/yurifariasg";
    } else if (name == "linkedin") {
        url = "http://br.linkedin.com/pub/yuri-farias-gomes/35/52b/488/en";
    }
    window.open(url);
});

$("body").show()
