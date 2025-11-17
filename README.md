# Specjal Map

This is just a simple, static project based on Leaflet to showcase photos me
and my pals are taking around the world, drinking [Specjal
beer](https://www.specjal.pl). See it in action at
[https://dulek.github.io/specjal-map/](https://dulek.github.io/specjal-map/).

## How it works

The code is in index.html, markers data goes into markers.js, in a pretty
self-explanatory format.

### Marker Fields

Each marker in `markers.js` can contain the following fields:

- **latitude** (required): Decimal latitude coordinate (e.g., `54.35052035926662`)
- **longitude** (required): Decimal longitude coordinate (e.g., `18.657723326814647`)
- **photo** (required): Path to the photo file (e.g., `"photos/tomasz/gdansk-zuraw.jpg"`)
- **author** (required): Name of the person who took the photo (e.g., `"Tomasz"`)
- **title** (required): English title/location description (e.g., `"Żuraw - Gdańsk - Poland"`).  
  **Format rules:**  
  - The **country name must always be in English**.  
  - The name of the place or landmark does **not** need to be translated, but must use Latin alphabet characters.  
  - Use hyphens (` - `) with spaces to separate elements.  
  - Typical structure: `[object/landmark] - [city/place/region/geographical area] - [(optional) state/province/region, ]country`.  
    Example: `"Żuraw - Gdańsk - Poland"`.  
  - If only two elements are given, use `[location] - [country]`.
  - **Before adding a new marker, check whether the name of the city/place/landmark and country is already used** elsewhere in the file and keep the naming consistent throughout `markers.js`.
- **titlePL** (optional): Polish title/location description (e.g., `"Żuraw - Gdańsk - Polska"`).  
  **Format rules:**  
  - Must be in Polish.  
  - Use hyphens (` - `) with spaces to separate elements.  
  - Typical structure: `[object/landmark] - [city/place/region/geographical area] - [(optional) województwo/region/stan, ]państwo`.  
    Example: `"Żuraw - Gdańsk - Polska"`.  
  - If only two elements are given, use `[location] - [country]`.  
  - The first element is considered the "location" for filtering and display in the sidebar.
- **type** (required): Type of Specjal - either `"can"` or `"bottle"` (e.g., `"bottle"`)
- **comment** (optional): English comment/description about the location or photo (e.g., `"Historic port crane in Gdańsk"`)
- **commentPL** (optional): Polish comment/description about the location or photo (e.g., `"Historyczny dźwig portowy w Gdańsku"`)
- **datetime** (optional): ISO 8601 timestamp when the photo was taken (e.g., `"2020-07-04T12:52:27.000Z"`)



## Marker Preparation Tool

We've created a tool that allows you to easily prepare JSON files for creating markers on the map. To use the tool, follow the steps provided in the [Map Marker Preparation Tool README](./json-tool/README.md). This tool works best when your photos contain EXIF data with GPS information.

- [Tool for Preparing Map Markers](https://dulek.github.io/specjal-map/json-tool)
