// test/pruebas.test.js
const test = require('node:test');
const assert = require('node:assert');

// Importa la clase del archivo de código fuente
const { GestorTareas } = require('../src/js/index.js');
    
test('Pruebas para la clase GestorTareas', async (t) => {
    
    // Caso 1: Agregar tarea con éxito
    await t.test('debe agregar una tarea y la lista debe tener longitud 1', () => {
        const gestor = new GestorTareas(); // Inicializamos gestor (reemplaza beforeEach)
        gestor.agregarTarea("Comprar pan");
        
        // El equivalente a 'expect(gestor.obtenerTareas().length).toBe(1);'
        assert.strictEqual(gestor.obtenerTareas().length, 1, 'La lista debe tener 1 tarea.');
        // El equivalente a 'expect(gestor.obtenerTareas()[0].descripcion).toBe("Comprar pan");'
        assert.strictEqual(gestor.obtenerTareas()[0].descripcion, "Comprar pan", 'La descripcion debe ser "Comprar pan".');
        // El equivalente a 'expect(gestor.obtenerTareas()[0].completada).toBe(false);'
        assert.strictEqual(gestor.obtenerTareas()[0].completada, false, 'La tarea debe estar incompleta.');
    });
    
    // Caso 2: Manejo de error al agregar tarea vacía
    await t.test('debe lanzar un error si la descripcion está vacía', () => {
        const gestor = new GestorTareas();
        
        // El equivalente a 'expect(() => ...).toThrow(...);'
        assert.throws(() => {
            gestor.agregarTarea("");
        }, {
            message: "La descripción de la tarea no puede estar vacía."
        }, 'Debe lanzar un error al agregar tarea vacía.');
    });
    
    // Caso 3: Marcar una tarea como completada
    await t.test('debe marcar una tarea existente como completada', () => {
        const gestor = new GestorTareas();
        gestor.agregarTarea("Hacer ejercicio");
        const idTarea = gestor.obtenerTareas()[0].id;
        
        gestor.marcarCompletada(idTarea);
        
        // El equivalente a 'expect(gestor.obtenerTareas()[0].completada).toBe(true);'
        assert.strictEqual(gestor.obtenerTareas()[0].completada, true, 'La tarea debe marcarse como completada.');
    });

    // Caso 4: Intentar marcar una tarea con ID inexistente
    await t.test('debe devolver false si el ID de la tarea no se encuentra', () => {
        const gestor = new GestorTareas();
        const resultado = gestor.marcarCompletada(9999);
        
        // El equivalente a 'expect(resultado).toBe(false);'
        assert.strictEqual(resultado, false, 'Debe devolver false para ID inexistente.');
    });
});