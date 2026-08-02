Minerva Libros

Minerva Libros es una aplicación para consultar, administrar y comprar libros. El proyecto cuenta con un backend API REST en Express/MongoDB y un frontend en React.

Usuario de prueba
Usuario administrador:
Email: admin@test.com
Password: asdasd
Rol: admin

Funcionalidades:
-Registro de usuarios.
-Login con JWT.
-Contraseñas encriptadas con bcrypt.
-Sesión persistida en localStorage.
-Rutas protegidas para usuarios autenticados.
-Permisos de administrador para crear, editar y eliminar libros.
-Listado público de libros.
-Detalle de libro con botón de compra.
-Filtro de libros de fantasía.
-Carga de imágenes para libros.
-Validaciones en backend y frontend.
-CRUD de libros.
-CRUD de autores disponible desde la API.

Entidades:
1)Usuarios
-Campos principales:
-email
-password
-rol

2)Libros
Campos principales:

nombre
precio
editorial
genero
idioma
img
link

3)Autores
Campos principales:

nombre
pais
nacimiento
bio

Cómo levantar el backend:

1-Descargar los archivos .env y .env.example y guardar en carpeta back-minervalibros

2-Entrar a la carpeta del backend:
cd back-minervalibros

3-Instalar dependencias:
pnpm install

4-Levantar el servidor:
pnpm run dev

El backend corre en:
http://localhost:3333

Cómo levantar el frontend:

1-Entrar a la carpeta del frontend:
cd front-minervalibros
2-Instalar dependencias:
pnpm install

Levantar el servidor de desarrollo:
pnpm run dev

El frontend corre en:
http://localhost:5174


Endpoints principales:

Usuarios
Registro:
POST /api/usuarios

Login:
POST /api/usuarios/login

Libros
Listar libros:
GET /api/libros

Obtener libro por ID:
GET /api/libros/:id

Crear libro:
POST /api/libros

Editar libro:
PUT /api/libros/:id
PATCH /api/libros/:id

Eliminar libro:
DELETE /api/libros/:id

Autores
Listar autores:
GET /api/autores
Obtener autor por ID:
GET /api/autores/:id

Crear autor:
POST /api/autores

Editar autor:
PUT /api/autores/:id

PATCH /api/autores/:id

Eliminar autor:

DELETE /api/autores/:id

Autenticación

El login devuelve un token JWT. El frontend guarda el token en localStorage y lo envía en las peticiones protegidas usando el header:

Authorization: Bearer TOKEN

Roles
El sistema usa roles:
user
admin

El usuario admin puede crear, editar y eliminar libros. Los usuarios no autenticados pueden ver el listado, el detalle de libros y la página de contacto.

Validaciones
El backend valida datos con Yup mediante middlewares.

Para testear la parte CRUD desde Postman hay que hacer un request POST a log in y obtener el token del user admin administrado más arriba.

