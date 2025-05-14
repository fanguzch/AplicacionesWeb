# Laboratorio 02 – Estilos en aplicaciones de React


### 1. CSS tradicional (archivos `.css` externos)

**Descripción:**  
Consiste en crear archivos `.css` separados que se importan en los componentes. Las clases CSS se aplican como en un sitio HTML/CSS clásico.

**Ventajas:**
- Familiar y fácil de implementar.
- Separación clara entre estilo y lógica.
- Ideal para proyectos pequeños o prototipos.

**Desventajas:**
- No encapsula los estilos por componente.
- Riesgo de colisiones entre clases.

**Perspectiva personal:**  
Lo considero útil en proyectos pequeños. Sin embargo, prefiero otras opciones más escalables en proyectos grandes.

---

### 2. CSS Modules

**Descripción:**  
Permite escribir archivos `.module.css` cuyos estilos se importan como objetos, logrando que cada clase tenga un nombre único a nivel de componente.

**Ventajas:**
- Evita conflictos de nombres.
- Uso de CSS puro con beneficios de encapsulamiento.
- Compatible con herramientas como Create React App.

**Desventajas:**
- Sintaxis ligeramente más compleja.
- Menos flexible para estilos altamente dinámicos.

**Perspectiva personal:**  
Me parece que combina lo mejor del CSS clásico con encapsulamiento automático.

---

### 3. Styled-components

**Descripción:**  
Es una librería basada en template literals que permite definir estilos directamente en el componente, utilizando JavaScript.

**Ventajas:**
- Estilos encapsulados por componente.
- Se pueden usar props para modificar estilos dinámicamente.
- Ideal para crear componentes reutilizables.

**Desventajas:**
- Requiere instalación de una dependencia externa.
- Puede dificultar la legibilidad si se abusa.

**Perspectiva personal:**  
Pienso que la integración de estilos con la lógica del componente permite mayor flexibilidad y modularidad.

---

### 4. Inline styles (estilos en línea)

**Descripción:**  
Se utilizan objetos JavaScript para definir estilos directamente en el atributo `style` de los elementos JSX.

**Ventajas:**
- Fácil de aplicar.
- Útil para estilos dinámicos rápidos.

**Desventajas:**
- No permite usar pseudoclases ni media queries.
- No es adecuado para estilos complejos.

**Perspectiva personal:**  
Útil cuando se trata de cambios simples o condicionales. No lo considero adecuado para diseñar componentes completos.

---

### 5. Frameworks CSS (Tailwind CSS, Bootstrap)

**Descripción:**  
Se utilizan clases utilitarias prediseñadas para aplicar estilos directamente desde el JSX, sin necesidad de escribir CSS personalizado.

**Ventajas:**
- Rápido desarrollo visual.
- Estilos consistentes.
- Gran documentación y comunidad.

**Desventajas:**
- JSX puede volverse desordenado con muchas clases.
- Requiere aprender la convención del framework.

**Perspectiva personal:**  
Considero que el uso de frameworks como Tailwind o Bootstrap depende del tipo de proyecto. En algunos casos, la velocidad que ofrecen es ideal; en otros, styled-components se adapta mejor a los requisitos de personalización.
