// test/pruebas.test.js
const test = require('node:test');
const assert = require('node:assert');

// Importa la clase del archivo de código fuente
const { GestorTareas } = require('../src/js/index.js');
    
describe('Pruebas para la clase GestorTareas', () => {
    let gestor;

    // Antes de cada prueba, inicializamos un nuevo gestor vacío
    beforeEach(() => {
        gestor = new GestorTareas();
    });

    // Caso 1: Agregar tarea con éxito
    test('debe agregar una tarea y la lista debe tener longitud 1', () => {
        gestor.agregarTarea("Comprar pan");
        expect(gestor.obtenerTareas().length).toBe(1);
        expect(gestor.obtenerTareas()[0].descripcion).toBe("Comprar pan");
        expect(gestor.obtenerTareas()[0].completada).toBe(false);
    });
    
    // Caso 2: Manejo de error al agregar tarea vacía
    test('debe lanzar un error si la descripcion está vacía', () => {
        expect(() => gestor.agregarTarea("")).toThrow("La descripción de la tarea no puede estar vacía.");
    });
    
    // Caso 3: Marcar una tarea como completada
    test('debe marcar una tarea existente como completada', () => {
        gestor.agregarTarea("Hacer ejercicio");
        const idTarea = gestor.obtenerTareas()[0].id;
        
        gestor.marcarCompletada(idTarea);
        
        expect(gestor.obtenerTareas()[0].completada).toBe(true);
    });

    // Caso 4: Intentar marcar una tarea con ID inexistente
    test('debe devolver false si el ID de la tarea no se encuentra', () => {
        const resultado = gestor.marcarCompletada(9999);
        expect(resultado).toBe(false);
    });
});