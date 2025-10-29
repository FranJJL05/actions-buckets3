# Actions y Bucket S3: Despliegue CI/CD en AWS S3

"Aplicación web estática de Lista de Tareas (To-Do List) con lógica en JavaScript."

---

## Despliegue Continuo (CD)

Este proyecto utiliza **GitHub Actions** para implementar un flujo de Integración Continua (CI) y Despliegue Continuo (CD) en **AWS S3**.

El *workflow* de CI/CD se dispara automáticamente con cada `push` a la rama **`dev`** y realiza los siguientes pasos:

1.  **Integración Continua (CI):**
    * **Pruebas unitarias:** Se ejecutan todas las pruebas de **Jest** (en `test/pruebas.test.js`). Si fallan, el despliegue se detiene.
    * **Documentación:** Se genera la documentación técnica del código fuente usando **JSDoc**.
2.  **Despliegue Continuo (CD):**
    * Sincroniza los archivos web (`src/`) y la documentación generada (`docs/`) al *bucket* configurado en AWS S3.

## Enlaces del Proyecto

| Recurso | Enlace |
| :--- | :--- |
| **Aplicación Desplegada** | https://docs.aws.amazon.com/es_es/vpc/latest/privatelink/vpc-endpoints-s3.html |
| **Documentación Técnica** | https://docs.aws.amazon.com/es_es/vpc/latest/privatelink/vpc-endpoints-s3.html/docs/index.html |

## Estructura del Repositorio

El código fuente de la aplicación se encuentra en la carpeta **`src/`**.

* `.github/workflows/`: Archivos de configuración de GitHub Actions.
* `src/`: Contiene el `index.html`, `styles.css`, y la lógica JavaScript.
* `test/`: Contiene el archivo de pruebas unitarias (`pruebas.test.js`).
* `docs/`: Carpeta con la documentación generada (no subida a Git).