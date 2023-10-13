# Map Marker Preparation Tool

This tool allows you to prepare JSON files for creating markers on the map. Follow these steps to use the tool:

## Step 1: Insert Your Photo

1. Make sure your photo contains EXIF data with GPS location and date information.
2. Click on the "Select Photo" button to select your photo from your device.
3. Alternatively, you can use drag-and-drop to select your photo onto the designated area.

## Step 2: Adjust Fields Manually

1. Latitude and Longitude will be automatically filled from your photo's EXIF data if available.
2. Enter your Author name in the "Author" field.
3. Fill in the "Title," "Comment (Polish)," and "Comment (English)" fields if needed.
4. Choose the type of your marker by selecting either "Can" or "Bottle."
5. The "Date" field will display the last modified date of the selected file.

## Step 3: Generate JSON

1. Click the "Generate JSON" button to generate a JSON configuration for your map marker.
2. The JSON will be displayed in the "Generated JSON" text area.
3. Copy the generated JSON to your clipboard.

## Step 4: Create Markers on the Map

1. Open the "markers.js" file in the main directory of your project.
2. Paste the generated JSON into the "markers.js" file to create your map markers.

## Step 5: Organize Your Photos

1. Make sure to place your photos in a valid directory structure that corresponds to your Author name.

   Example:

master
└── photos/your_author_name/
├── photo1.jpg
├── photo2.jpg
└── ...

2. Organize your photos in the "photos" directory under subdirectories with author names.
3. Ensure that the file paths in the generated JSON match the directory structure where your photos are stored.

## Step 6: View the Map

1. After creating markers and pushing your changes to master branch, open map page at [https://dulek.github.io/specjal-map/](https://dulek.github.io/specjal-map/) to view the markers on the map.
2. Your markers will be displayed with the information you provided in the generated JSON.

Enjoy using the tool to prepare and display markers on your map!
