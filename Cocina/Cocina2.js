case '5':
                console.log(`\n${color.fondoBlanco}${color.verde} --- BUSQUEDAS AUTOMATICAS (COCINA) --- ${color.reset}`);
                console.log("1. Productos Baratos (Menos de $50)");
                console.log("2. Productos Caros ($50 o mas)");
                console.log("3. Solo Bebidas");
                console.log("4. Solo Postres");
                console.log("5. Buscar producto exacto por ID");
                
                const filtro = await preguntar(`\n${color.verde}Aplica un filtro: ${color.reset}`);
                let resultados = [];

                if (filtro === '1') resultados = productos.filter(p => p.precio < 50);
                if (filtro === '2') resultados = productos.filter(p => p.precio >= 50);
                if (filtro === '3') resultados = productos.filter(p => p.categoria === 'bebida');
                if (filtro === '4') resultados = productos.filter(p => p.categoria === 'postre');
                
                if (filtro >= '1' && filtro <= '4') {
                    console.log(`\n${color.verde}Resultados encontrados:${color.reset}`);
                    resultados.forEach(p => console.log(`- ${p.nombre} ($${p.precio}) - Stock: ${p.cantidad}`));
                } else if (filtro === '5') {
                    const idBuscar = parseInt(await preguntar(`Ingresa el ID exacto: `));
                    const exacto = productos.find(p => p.id === idBuscar);
                    if (exacto) console.log(`\n¡Encontrado! ${exacto.nombre} - Stock: ${exacto.cantidad}`);
                    else console.log(`${color.rojo}Producto no encontrado.${color.reset}`);
                } else {
                    console.log(`${color.rojo}Opcion no valida.${color.reset}`);
                }
                break;