package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Main {
    public static void main(String[] args) {
        Shape shape = new Square(1);

        Renderer renderer = new Renderer(shape);

        renderer.draw();
    }
}
