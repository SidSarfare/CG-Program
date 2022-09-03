class Animal {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound(): void {
      console.log('generic animal sound\n');
    }
  }
  
  class Dog extends Animal {
    public makeSound(): void {
      console.log('wuff wuff');
    }
  }
  
  class Cat extends Animal {
      public makeSound(): void{
          console.log("Meow Meow");
      }
  }
  
  let dog1 = new Dog("Toshii");
  dog1.makeSound();
  
  let cat1 = new Cat("Tas");
  cat1.makeSound();