# Tarea 1 — Aplicación Ionic (Giannefran)

## Autora

Giannefran  
Estudiante de Ingeniería en Informática — UNETI  
Barquisimeto, Venezuela

## Descripción

Aplicación móvil desarrollada con Ionic + Angular como parte de la asignación 1 del curso. La app implementa un menú lateral con tres secciones independientes: Inicio, Información Personal y Contacto. El diseño visual está basado en una paleta Deep Navy con acentos en Violeta Eléctrico, tipografía moderna (Inter + Montserrat) y un sistema de tarjetas con efecto glassmorphism. Todo el código está documentado con comentarios propios que explican mis decisiones de implementación.

## Tecnologías utilizadas

- **Framework:** Ionic 8
- **Lenguaje:** TypeScript / Angular
- **Empaquetador móvil:** Capacitor
- **Tipografías:** Inter, Montserrat (Google Fonts)
- **Iconos:** Ionicons
- **Control de versiones:** Git + GitHub

## Estructura del proyecto

```
src/app/
├── inicio/                       # Página de bienvenida
├── informacion-personal/         # Perfil académico, stack y proyectos
├── contacto/                     # Canales de contacto
├── app.component.ts              # Componente raíz con menú lateral
├── app-routing.module.ts         # Definición de rutas con lazy loading
└── app.module.ts                 # Módulo principal
```

## Páginas implementadas

### 1. Inicio (`/inicio`)
Pantalla de bienvenida con presentación personal y acceso rápido al perfil.

### 2. Información Personal (`/informacion-personal`)
Perfil académico, stack tecnológico (Frontend + Backend), proyecto destacado e intereses adicionales.

### 3. Contacto (`/contacto`)
Lista de canales de contacto (Email, WhatsApp, GitHub, Ubicación) con botón directo de envío de correo.

## Cómo ejecutar el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
ionic serve

# 3. Abrir en el navegador
# http://localhost:8100
```

## Decisiones de arquitectura

- **Lazy loading en todas las rutas:** cada página se carga solo cuando se necesita.
- **3 páginas independientes con módulos propios:** demuestra dominio sobre la arquitectura modular de Angular en Ionic.
- **Sistema de variables CSS:** la paleta y los tokens de diseño se centralizan en `variables.scss` para mantener consistencia visual y facilitar futuras modificaciones.
- **Glassmorphism reutilizable:** se definió la clase `.glass-card` en `global.scss` para aplicarse consistentemente en todas las tarjetas del proyecto.

## Evidencias

Las capturas de pantalla del proceso de desarrollo paso a paso están en la carpeta `evidencias/`.

## Interactividad agregada (Evaluación 2)

### Contacto
- Formulario reactivo con validaciones por campo (nombre, email, asunto, mensaje).
- Mensajes de error contextuales que aparecen tras tocar el campo.
- Contador de caracteres en el mensaje con cambio de color al acercarse al límite.
- Submit que abre el cliente de correo con los datos prellenados.
- Botón Limpiar con confirmación previa.
- Canales (Email, WhatsApp, GitHub, Ubicación) ahora funcionales.

### Inicio
- Saludo dinámico según la hora del día.
- Navegación rápida a Perfil y Contacto.
- Contador local de visitas con localStorage.

### Información Personal
- Chips de stack interactivas que muestran descripción al tap.
- Tarjetas de proyecto expandibles con detalle extendido.

## Crédito al trabajo base

Este proyecto parte del trabajo original de Giannefran Radomile (UNETI Barquisimeto)
para la Evaluación 1 de Programación III. La versión actual agrega la capa de
interactividad solicitada para la Evaluación 2.
