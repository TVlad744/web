Employee.instances = [];

function Employee(name, surname, baseSalary, experience) {
	this.name = name || "none";
	this.surname = surname || "none";
	this.baseSalary = baseSalary || -1;
	this.experience = experience || -1;
	this.countedSalary = -1;

	if(this.name != "none")
		Employee.instances.push(this);

	this.sayHi = function() {
		alert( this.name );
	};
}

function Designer(name, surname, baseSalary, experience, effCoef){
	Employee.call(this, name, surname, baseSalary, experience);
	if(effCoef >= 0 && effCoef <=1)
		this.effCoef = effCoef;
	else
		this.effCoef = 0;
}
Designer.prototype = new Employee;

function Developer(name, surname, baseSalary, experience, effCoef){
	Employee.call(this, name, surname, baseSalary, experience);
}
Developer.prototype = new Employee;

function Manager(name, surname, baseSalary, experience, team){
	Employee.call(this, name, surname, baseSalary, experience);
	this.team = [];

	if(Array.isArray(team))
		team.forEach((item) => {
			if((item instanceof Developer) || (item instanceof Designer))
				this.team.push(item);
		}
	)
	else if(typeof(team) == "object" && ((team instanceof Developer) || (team instanceof Designer)))
		this.team.push(team);
}
Manager.prototype = new Employee;

function Department(manager){
	this.manager = [];
	
	if(typeof(manager) == "object")
		this.manager = manager;
	
	this.giveSalary = function() {
		Employee.instances.forEach((item) =>{
				if(item.experience >= 2 && item.experience < 5)
				{
					item.countedSalary = item.baseSalary + 200;
				}
				else if(item.experience >= 5)
				{
					item.countedSalary = item.baseSalary * 1.2 + 500;
				}
				else
					item.countedSalary = item.baseSalary;
				if(item instanceof Designer)
					item.countedSalary = item.countedSalary * item.effCoef;
					else if(item instanceof Manager)
					{
					let devel = 0;
					item.team.forEach((devs) =>{
							if(devs instanceof Developer)
								devel++;
						}
					)
					if(item.team.length >= 5 && item.team.length < 10)
						item.countedSalary = item.countedSalary + 200;
					else if(item.team.length > 10)
						item.countedSalary = item.countedSalary + 300;
					if(devel > (item.team.length / 2))
						item.countedSalary = item.countedSalary + item.countedSalary * 0.1;
				}
				console.log(`${item.name} ${item.surname} отримав ${item.countedSalary} шекелів`);
			}
		)
	};
}


let vasya = new Designer("Вася", "Корній", 300, 10, 1);
let petro = new Designer("Петро", "Якимець", 200, 1, 1);
let matviy = new Developer("Матвій", "Славута", 500, 3);
let kindrat = new Developer("Кіндрат", "Новак", 700, 6);
let legolas = new Developer("Леголас", "Грінліф", 650, 4);
let vlad = new Manager("Влад", "Бандера", 1000, 15, [petro, vasya, matviy, kindrat, legolas]);
let taras = new Manager("Тарас", "Гудіні", 1500, 23)
let department = new Department;

department.giveSalary();
