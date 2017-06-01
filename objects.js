var Person ={
    name:"James",
    job: "Programmer",
    age:27,
    greeting: function helloGreeting(name,job,age){
        console.log("Hello, world!. My name is" + this.name + "." + " I am " + this.age + "years old and I work as an" + this.job );
    }

}

