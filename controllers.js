/**
 * Created by ahmed on 2/20/16.
 */
    //Our Controllers go here

app.controller('OtherStudentsController', [function(){

    var here = this;
    here.OtherStudents = [
        {"name":"Soulaima","age":25,"hobby":"Dance"},
        {"name":"Zahra","age":40,"hobby":"Reading"},
        {"name":"Fathi","age":18,"hobby":"Fishing"},
        {"name":"Kamilia","age":30,"hobby":"Training dogs"}];
}]);

app.controller('StudentController', [function(){

    var andhere= this;
    andhere.Students = [
        {"name":"Ahmed","age":23,"hobby":"Rap"},
        {"name":"Anis","age":40,"hobby":"Recommending people"},
        {"name":"Kais","age":18,"hobby":"Painting"},
        {"name":"Khalil","age":55,"hobby":"Golf"}];

    andhere.helloText = "Your Name";

}]);