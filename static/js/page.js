

$('#skills-tabs a').click(function (e) {
    console.log("Clicked");
    e.preventDefault();
    $(this).tab('show');
});

var Page = {

    addSkill: function(section, name, percentage) {
        var sectionObj = $("#" + section);
        var skillTemplate = $("#skill-row-template").html()
        var output = Mustache.render(skillTemplate, {skillName: name, percentage: percentage});
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