const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntar = (texto) => new Promise(resolver => readline.question(texto, resolver));

let productos = [
    { id: 1, nombre: "Cafe Americano", cantidad: 50, precio: 35.00 },
    { id: 2, nombre: "Capuccino XL", cantidad: 40, precio: 48.00 },
    { id: 3, nombre: "Espresso Doble", cantidad: 30, precio: 40.00 },
    { id: 4, nombre: "Latte Frio de Vainilla", cantidad: 25, precio: 55.00 },
    { id: 5, nombre: "Frappe de Oreo", cantidad: 20, precio: 60.00 }
];

function listarProductos() {
    if (productos.length === 0) {
        console.log("\nEl inventario esta vacio.");
        return;
    }
    console.log("\n--- INVENTARIO DISPONIBLE ---");
    productos.forEach(p => {
        console.log(`[ID: ${p.id}] ${p.nombre} | Stock: ${p.cantidad} | Precio: $${p.precio.toFixed(2)}`);
    });
}

async function menuCocina() {
    let salir = false;
    while (!salir) {
        console.log("\n--- MODULO COCINA ---");
        console.log("1. Ver lista de productos");
        console.log("2. Agregar un producto");
        console.log("3. Editar un producto");
        console.log("4. Eliminar un producto");
        console.log("5. Regresar al menu principal");
        
        const opcion = await preguntar("\nElige una opcion: ");
        
        switch (opcion.trim()) {
            case '1':
                listarProductos();
                break;
            case '2':
                console.log("\n--- Nuevo Producto ---");
                const nombre = await preguntar("Nombre: ");
                
                const cantidadStr = await preguntar("Cantidad (solo numeros): ");
                const cantidadValidada = parseInt(cantidadStr);
                if (isNaN(cantidadValidada) || cantidadValidada < 0) {
                    console.log("Error: La cantidad debe ser un numero valido. Regresando al menu...");
                    break;
                }

                const precioStr = await preguntar("Precio (solo numeros): ");
                const precioValidado = parseFloat(precioStr);
                if (isNaN(precioValidado) || precioValidado < 0) {
                    console.log("Error: El precio debe ser un numero valido. Regresando al menu...");
                    break;
                }
                
                let nuevoId = 1;
                if (productos.length > 0) {
                    nuevoId = Math.max(...productos.map(p => p.id)) + 1;
                }
                
                productos.push({
                    id: nuevoId,
                    nombre: nombre,
                    cantidad: cantidadValidada,
                    precio: precioValidado
                });
                console.log(`Producto agregado correctamente con el ID automatico: ${nuevoId}`);
                break;
            case '3':
                listarProductos();
                const inputIdEditar = await preguntar("\nIngresa el ID del producto a editar: ");
                const idEditar = parseInt(inputIdEditar);
                
                if (isNaN(idEditar)) {
                    console.log("ID invalido. Regresando al menu...");
                    break;
                }

                const indexEditar = productos.findIndex(p => p.id === idEditar);
                
                if (indexEditar !== -1) {
                    console.log("Deja en blanco si no quieres modificar un campo.");
                    const nuevoNombre = await preguntar("Nuevo nombre: ");
                    const nuevaCantidad = await preguntar("Nueva cantidad: ");
                    const nuevoPrecio = await preguntar("Nuevo precio: ");
                    
                    if (nuevoNombre.trim() !== "") productos[indexEditar].nombre = nuevoNombre;
                    
                    if (nuevaCantidad.trim() !== "") {
                        const cant = parseInt(nuevaCantidad);
                        if (!isNaN(cant) && cant >= 0) {
                            productos[indexEditar].cantidad = cant;
                        } else {
                            console.log("Cantidad ignorada: no es un numero valido.");
                        }
                    }
                    
                    if (nuevoPrecio.trim() !== "") {
                        const prec = parseFloat(nuevoPrecio);
                        if (!isNaN(prec) && prec >= 0) {
                            productos[indexEditar].precio = prec;
                        } else {
                            console.log("Precio ignorado: no es un numero valido.");
                        }
                    }
                    console.log("Producto actualizado exitosamente.");
                } else {
                    console.log("Producto no encontrado. Regresando al menu de cocina...");
                }
                break;
            case '4':
                listarProductos();
                const inputIdEliminar = await preguntar("\nIngresa el ID del producto a eliminar: ");
                const idEliminar = parseInt(inputIdEliminar);
                
                if (isNaN(idEliminar)) {
                    console.log("ID invalido. Regresando al menu...");
                    break;
                }

                const indexEliminar = productos.findIndex(p => p.id === idEliminar);
                
                if (indexEliminar !== -1) {
                    productos.splice(indexEliminar, 1);
                    console.log("Producto eliminado exitosamente.");
                } else {
                    console.log("El producto con ese ID no existe. Regresando al menu...");
                }
                break;
            case '5':
                salir = true;
                break;
            default:
                console.log("Opcion no valida.");
        }
    }
}