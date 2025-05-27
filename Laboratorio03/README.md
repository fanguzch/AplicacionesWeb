# Laboratorio 03 – Unit Testing en NestJS  
**Estudiante: Fabián Guzmán Chinchilla**  

## Parte 1 – Investigación sobre herramientas de testing en JavaScript

### 1. Jest

#### Descripción:
Jest es un framework de pruebas desarrollado por Facebook. Está diseñado para trabajar principalmente con aplicaciones en React, aunque también es totalmente compatible con proyectos en Node.js como NestJS. Incluye motor de pruebas, funciones de simulación (*mocks*) y aserciones de forma integrada.

#### Cuándo usarlo:
- **Sí usar**: Aplicaciones backend con Node.js, proyectos con React, desarrollo en TypeScript, pruebas unitarias y de integración.
- **No usar**: Cuando se requiere una solución específica para pruebas de extremo a extremo o interacción con navegador en tiempo real.

#### Ejemplo:
```ts
// suma.ts
export function sumar(a: number, b: number): number {
  return a + b;
}

// suma.spec.ts
import { sumar } from './suma';

test('sumar dos números', () => {
  expect(sumar(3, 5)).toBe(8);
});
```
---
### 2. Mocha + Chai

#### Descripción:
Mocha es un *test runner* flexible y muy popular en el ecosistema de JavaScript. Puede usarse con diferentes bibliotecas de aserción, siendo **Chai** una de las más comunes. Juntos permiten escribir pruebas con un enfoque BDD o TDD.

#### Cuándo usarlo:
- **Sí usar**: Cuando se requiere una solución configurable o se integran varias herramientas personalizadas.
- **No usar**: En proyectos donde se prefieren soluciones integradas o listas para usar como Jest.

#### Ejemplo:
```js
// suma.js
function sumar(a, b) {
  return a + b;
}
module.exports = sumar;

// prueba/suma.test.js
const sumar = require('../suma');
const { expect } = require('chai');

describe('sumar()', () => {
  it('debería sumar dos números', () => {
    expect(sumar(4, 7)).to.equal(11);
  });
});
```
---
### 3. Vitest

#### Descripción:
Vitest es un framework moderno para pruebas, desarrollado como compañero de Vite. Destaca por su velocidad de ejecución, integración con herramientas modernas, y compatibilidad con ES Modules. Su sintaxis es muy similar a Jest, lo que lo hace fácil de adoptar para quienes ya lo han usado.

#### Cuándo usarlo:
-  **Sí usar**: En proyectos modernos que utilizan Vite, cuando se busca velocidad en la ejecución de pruebas o integración con entornos frontend modernos.
-  **No usar**: En proyectos donde ya se utiliza Jest de forma estable o en aplicaciones backend con NestJS donde Jest ya está bien integrado.

#### Ejemplo:
```ts
// suma.ts
export function sumar(a: number, b: number): number {
  return a + b;
}
// suma.test.ts
import { describe, it, expect } from 'vitest';
import { sumar } from './suma';

describe('sumar()', () => {
  it('debería retornar la suma de dos números', () => {
    expect(sumar(6, 2)).toBe(8);
  });
});
```