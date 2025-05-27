class Animal {
    void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }

    public static void main(String[] args) {
        Animal a = new Animal();
        Dog d = new Dog();

        a.makeSound();
        d.makeSound();
    }
}
