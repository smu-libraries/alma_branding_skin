# Alma Branding Skin

Alma Branding Skin is the customization for Alma elements that are embedded within a Primo (new UI) interface, typically in the Physical Copy (Get It) section in the full details of a record. Examples of such elements include the table of physical holdings for a title, buttons for triggering patron hold requests or showing the item location, and the citation form for purchase requests.

This project involves only style changes (i.e. CSS and images). For changes in text or translation, look for the appropriate code table in Alma.

# Usage

Use this project to generate a zip file that can be uploaded to Alma.

## Editing customization

1. Checkout the source (alma_branding_skin) folder from GitHub

  ```
  $ git checkout https://github.com/smu-libraries/alma_branding_skin.git
  ```

2. Edit the CSS file branding_skin/css/mashup_new.css

## Creating the zip file

1. Install [Node.js](https://nodejs.org)
2. Install [gulp](https://gulpjs.com/)

  ```
  $ npm install -g gulp-cli
  ```

3. Install project dependencies using NPM

  ```
  $ npm install
  ```

4. Run the zip task in gulp

  ```
  $ gulp zip
  ```

The output zip file (skin.zip) will be created in the working directory.

## Uploading the zip file to Alma

1. Go to Alma Configuration > General > \[User Interface Settings\] Delivery System Skins
2. Select the correct skin
3. Use the form to upload skin.zip

If the changes are not applying, make sure to read through the Alma-Primo [Branding the Delivery Tabs](https://knowledge.exlibrisgroup.com/Alma/Product_Documentation/Alma_Online_Help_(English)/Alma-Primo_Integration/060Configuring_Alma_Delivery_System/090Branding_the_Delivery_Tabs?uxp=true) documentation carefully.

# License

Except where otherwise stated, this project is released under the [MIT License](LICENSE.md).
