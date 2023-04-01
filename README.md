# SPAG-MaterialDB

This is a work in progress for the Open Material Database for [opensource.construction](https://opensource.construction)

The idea is to save material data (e.g. coming from an Excel-table) as individual JSON files and host them on a public Github Repository, enable Github Pages and enjoy an open data api just by accessing the file-URL.

For example: https://github.com/Swiss-Property-AG/SPAG-MaterialDBmaterials/SPAG-300001-10.008.json will give you a the data of this material in a structured way.

{"material_ID": "SPAG-300001-10.008", "material_name": "Steinwolle: Platten, Matten, Rollen; nicht \u00fcberwacht", "material_vendor": "", "material_category": "D\u00e4mmung", "LCA_source": "KBOB", "LCA_ID": "10.008", "LCA_source_URL": "", "density (kg/m3)": "200", "GHG emissions Total (kg)": "1.1896", "GHG emissions production (kg)": "1.13", "GHG emissions disposal (kg)": "0.0596"}


## How it works

1. Clone this Repository

2. Upload the material data into the input folder

3. Generate the JSON data for each entry, plus the index (for search) and the list of materials

run: python csv_to_json.py <input.csv> <output-folder> <name-reference>

<mark>input.csv</mark> this is the uploaded csv containing the material data
<mark>output-folder<m/ark> this is where you want the JSON files to be stored
<mark>name-reference</mark> specify the colum name of your csv that you want to use for the file name