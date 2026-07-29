# Perfil Unity

Requiere una version exacta de Unity acordada por la materia o el equipo y registrada en `docs/project-manifest.md` antes de inicializar. Abre la carpeta `game/` con esa version desde Unity Hub. Al crear el proyecto, versiona `ProjectSettings/ProjectVersion.txt`, `ProjectSettings/` y todos los archivos `.meta` generados tras comprobar que abre correctamente.

Antes de trabajo colaborativo, configura serialization mode en Force Text y visible meta files. Evita editar la misma escena o prefab en paralelo.

## Smart Merge

El atributo `merge=unityyamlmerge` ya esta aplicado a escenas y prefabs, pero cada equipo debe configurar el driver de Git con la ruta a `UnityYAMLMerge` de su instalacion de Unity. Sigue la guia oficial enlazada abajo y verifica la configuracion con:

```text
git check-attr merge -- Assets/Scenes/Example.unity
```

El resultado debe ser `merge: unityyamlmerge`. Antes de depender de este flujo, resuelve un conflicto controlado sobre una escena o prefab y comprueba que el proyecto abre sin referencias perdidas.

Documentacion oficial:

- [Version control](https://docs.unity3d.com/6000.0/Documentation/Manual/VersionControl.html)
- [Smart Merge](https://docs.unity3d.com/6000.0/Documentation/Manual/SmartMerge.html)
