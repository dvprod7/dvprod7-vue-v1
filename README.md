# 🎨 dvprod7-vue-v1

Proyecto personal desarrollado con **Vue 3**, **Vite** y **SCSS**, con animaciones GSAP e interacciones personalizadas.  
Este repositorio representa la primera versión (v1) del sitio **dvprod7**, optimizado para futuras mejoras visuales y estructurales.

---

## 🧩 Tecnologías principales

- ⚡ **Vite** — Entorno rápido para desarrollo y build.  
- 🖼️ **Vue 3** — Framework progresivo para interfaces modernas.  
- 🎬 **GSAP** — Animaciones fluidas y profesionales.  
- 💅 **SCSS** — Estilos estructurados y mantenibles con su propio grid system.  

---

## ⚙️ Instalación y ejecución

### 🔹 1. Clonar el repositorio
```bash
git clone https://github.com/dvprod7/dvprod7-vue-v1.git
cd dvprod7-vue-v1
```

### 🔹 2. Instalar dependencias
```bash
npm install
```

### 🔹 3. Ejecutar en desarrollo
```bash
npm run dev
```
> El proyecto se abrirá normalmente en 👉 [http://localhost:5173](http://localhost:5173)

### 🔹 4. Generar build de producción
```bash
npm run build
```

### 🔹 5. Previsualizar la build
```bash
npm run preview
```

## 🔥 Deploy en Firebase Hosting

### 🔸 1. Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### 🔸 2. Iniciar sesión
```bash
firebase login
```

### 🔸 3. Inicializar hosting
Dentro del directorio del proyecto:
```bash
firebase init
```
Selecciona:
- **Hosting**
- Conecta con tu proyecto existente o crea uno nuevo
- Configura:
  - `public directory`: `dist`
  - ¿Single-page app? → `Yes`
  - ¿Overwrite index.html? → `No`

### 🔸 4. Build y deploy
```bash
npm run build
firebase deploy
```

> Firebase te mostrará la URL final del sitio al finalizar el proceso.

---

## 📁 Estructura del proyecto

```
dvprod7-vue-v1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── router/
│   ├── styles/
│   └── App.vue
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧠 Notas útiles

- Asegúrate de tener **Node.js 18+** instalado.  
- Si haces cambios grandes en las dependencias, ejecuta `npm install` de nuevo.  
- Las animaciones GSAP están pensadas para ejecutarse solo en componentes específicos —evita recargarlas globalmente.  
- Para reiniciar el proyecto desde cero, elimina la carpeta `node_modules` y ejecuta:
  ```bash
  npm install
  ```

---

## ✨ Créditos
Desarrollado por **Daniel Valenzuela (dvprod7)**  
💡 *Primera versión del proyecto personal y base para futuras evoluciones visuales.*