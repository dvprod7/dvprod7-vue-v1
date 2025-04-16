import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];
if (!componentName) {
  console.error('Debes ingresar el nombre del componente');
  process.exit(1);
}

const componentPath = path.join('src/components', componentName);
if (!fs.existsSync(componentPath)) {
  fs.mkdirSync(componentPath);
}

// Crear el archivo .vue
const vueContent = `<template>
  <div class="${componentName.toLowerCase()}">
    <!-- ${componentName} -->
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@use '@/styles/grid';
@use './${componentName}.scss';
</style>
`;

fs.writeFileSync(path.join(componentPath, `${componentName}.vue`), vueContent);

// Crear el archivo .scss
const scssContent = `@use '@/styles/variables' as *;
.${componentName.toLowerCase()} {
  // Estilos de ${componentName}  
}
`;

fs.writeFileSync(path.join(componentPath, `${componentName}.scss`), scssContent);

console.log(`✅ Componente ${componentName} creado en src/components/${componentName}/`);
