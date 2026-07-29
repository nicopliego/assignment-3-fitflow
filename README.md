# FitFlow

## Descripción

FitFlow es una aplicación web educativa que permite crear un plan fitness básico y personalizado. La aplicación permite:

- Generar una rutina según el objetivo, nivel, intensidad y días disponibles.
- Obtener un menú, una receta sencilla o una alternativa para un antojo.
- Calcular una estimación diaria de agua.
- Guardar y revisar el progreso de peso.

## Usuario principal

FitFlow está dirigida a personas que quieren organizar un plan básico de fitness de manera sencilla, sin crear una cuenta ni utilizar herramientas complejas.

## Funciones

- Rutinas personalizadas con lógica predefinida.
- Sugerencias de nutrición.
- Recetas fáciles.
- Alternativas para antojos.
- Calculadora de agua.
- Registro de progreso.
- Persistencia con `localStorage`.

## Tecnologías utilizadas

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- React
- React state
- `localStorage`
- Git
- GitHub
- Vercel

## Cómo ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación normalmente se abre en [http://localhost:3000](http://localhost:3000).

## Lógica algorítmica

- Rutina usa listas predefinidas y condiciones según el objetivo, nivel, intensidad y días disponibles.
- Nutrición usa listas predefinidas y condiciones según la necesidad y la opción seleccionada.
- Agua multiplica el peso por 35 para obtener mililitros y divide el resultado entre 1000 para mostrar litros.
- Progreso resta el peso inicial al peso actual para determinar el cambio.
- `localStorage` guarda el progreso dentro del navegador y permite recuperarlo después de recargar la aplicación.

## Flujo principal

1. El usuario abre FitFlow.
2. Selecciona una pestaña.
3. Completa las opciones.
4. Presiona el botón correspondiente.
5. La aplicación procesa los datos con lógica de TypeScript.
6. Muestra el resultado.
7. En Progreso, los datos permanecen guardados después de recargar.

## Prompts principales utilizados

- Definir el propósito, alcance y plan de FitFlow.
- Crear la interfaz principal y la navegación por pestañas.
- Implementar las rutinas con listas y condiciones.
- Implementar las opciones de nutrición con datos predefinidos.
- Implementar la calculadora de agua.
- Implementar el registro persistente de progreso.
- Agregar personalización a Rutina y Nutrición.
- Revisar, probar y documentar el proyecto final.

## Limitaciones

- No usa inteligencia artificial dentro de la aplicación.
- No usa base de datos.
- No tiene autenticación.
- Las rutinas y sugerencias son ejemplos predefinidos.
- No calcula calorías ni macronutrientes.
- Las recomendaciones son educativas.
- No sustituye asesoría médica, nutricional o de entrenamiento.

## Posibles mejoras futuras

- Más rutinas y ejercicios.
- Más recetas.
- Preferencias alimenticias.
- Historial de peso.
- Gráficas de progreso.
- Edición de registros.
- Más opciones de personalización.

## Autoevaluación

Aprendí a dividir una aplicación en milestones y utilicé variables, listas, objetos, funciones, estados, condiciones y cálculos para construir cada sección. También aprendí a usar `localStorage` y a registrar el proceso con GitHub. Utilicé inteligencia artificial como copiloto, pero revisé y probé cada funcionalidad para comprender el resultado. Una mejora futura sería ampliar las opciones sin complicar demasiado la aplicación.

## Enlaces

- Repositorio de GitHub: pendiente
- Aplicación en Vercel: pendiente
