# Agentic Game Template

Plantilla academica para crear vertical slices con Godot, Unity o Phaser y flujos asistidos por OpenCode.

## Para estudiantes

1. Crea un repositorio desde esta plantilla o clónala en una carpeta nueva.
2. Abre la raiz del proyecto con OpenCode.
3. Ejecuta `/bootstrap godot`, `/bootstrap unity` o `/bootstrap phaser`.
4. Ejecuta `/preproduction` para definir y documentar el proyecto antes de desarrollar.
5. Ejecuta `/guide` para verificar el entorno y aprender la estructura.

Los comandos usan nombres en ingles. Las instrucciones y los documentos generados estan en espanol.

## Elegir un perfil

La raiz es una plantilla fuente y no contiene un juego inicializado. `/bootstrap` copia el perfil elegido y los recursos compartidos al proyecto generado:

- Godot: abre `game/project.godot` y ejecuta la escena principal desde el editor.
- Unity: abre `game/` desde Unity Hub con la version acordada para la materia. Configura archivos `.meta` visibles y serializacion de assets en texto antes de colaborar.
- Phaser: desde `game/`, instala las dependencias con `npm install` y ejecuta `npm run dev`.

Despues de inicializar, completa `docs/project-manifest.md` con el motor, su version, lenguaje, plataforma, punto de entrada y forma de ejecucion. Tambien completa `docs/engine-guide.md` con requisitos, enlaces oficiales e instrucciones especificas del motor.

No ejecutes los perfiles directamente desde `profiles/`: son fuentes para `/bootstrap`, no un proyecto unico jugable.

## Flujo recomendado

```text
/bootstrap -> /preproduction -> /guide -> /status -> /spec -> /implement -> /playtest -> /review -> /check -> /submit
```

## Que contiene

- `shared/`: documentos y plantillas que recibe cada juego.
- `profiles/`: bases tecnicas minimas para Godot, Unity y Phaser.
- `.opencode/`: commands, skills y agentes disponibles en cada proyecto generado.
- `docs/`: guia de la plantilla, fuentes y politica de uso de IA.

## Principios

- Una vertical slice es una experiencia breve, completa y jugable.
- `/preproduction` completa la documentacion inicial del proyecto mediante una entrevista guiada y deja las definiciones pendientes explicitadas.
- `docs/references.md` reune fuentes para documentar GDD, alcance, roadmap, riesgos y decisiones de produccion.
- Las specs son opcionales para cambios pequenos y recomendadas para sistemas nuevos.
- `main` debe mantenerse ejecutable.
- OpenCode ayuda a razonar, documentar y verificar; el estudiante toma las decisiones.
- No se agregan sistemas fuera del alcance sin recortar otro elemento primero.

## Referencias

- [OpenCode commands](https://opencode.ai/docs/commands/)
- [OpenCode skills](https://opencode.ai/docs/skills/)
- [MDA framework](https://users.cs.northwestern.edu/~hunicke/MDA.pdf)
- [Game Programming Patterns](https://gameprogrammingpatterns.com/contents.html)
- [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/)

## Estado

Version inicial de la plantilla. No incluye CI ni despliegues.
