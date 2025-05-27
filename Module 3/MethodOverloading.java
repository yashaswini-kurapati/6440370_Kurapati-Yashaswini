public class MethodOverloading {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println("Add two integers: " + add(5, 10));
        System.out.println("Add two doubles: " + add(3.5, 2.5));
        System.out.println("Add three integers: " + add(1, 2, 3));
    }
}
