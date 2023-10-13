# Assignment 5

News Blog Website to show CSS Grid layout, Flexbox, and SASS/SCSS Features

## Directory Structure

- **common/**
  - `_functions.scss`: Contains custom functions for SCSS.
  - `_mixins.scss`: Defines custom mixins.
  - `_variables.scss`: Defines custom variables and global CSS properties.

- **theme/**
  - `_theme.scss`: Imports functions, mixins, and variables from the common directory and applies styles to the entire theme.
  
- **elements/**
    - `_cards.scss`: Contains styles for cards.
    - `_tag.scss`: Contains styles for tags.
    - `_about.scss`: Contains styles for the "about" section.
    - `_service.scss`: Contains styles for service elements.

- **style.scss**: The main SCSS file that imports the theme and other element-specific SCSS files.

## CSS Grid Layout & Flexbox

#### CSS Grid Layout

- CSS Grid is used to style `index.html` in `cards` for alignmnet os `horizontal card` & `vertical card` sections

- CSS Grid is used to style `services.html` in `service-grid` for alignmnet of `service` sections

- CSS Grid is used to style `article1.html` in `container` for alignmnet of `article1-card` sections

#### Flexbox Layout

- Flexbox is used to style `about.html` in `about-columns` for alignmnet of `about-section` sections

- Flexbox is used to style `article1.html` in `related-articles` for alignmnet of `vertical card related-article` sections

## SCSS Features and Usage

### Variables
Variables are defined in `_variables.scss` and used for consistent styling throughout the application. For example, `$primary-color` is used to set the primary color.

### Custom Properties
Custom properties, such as `--background-gradient-start` and `--background-gradient-end`, are defined in `:root` in `_variables.scss` and are used for global CSS properties.

### Nesting
Nesting is employed to define styles for different elements within their respective parent elements in the SCSS files. For instance, styles for `header`, `h1`, `nav`, and more are nested in `_theme.scss`.

### Interpolation
Interpolation is used in custom functions like `calculate-border-radius` and `generate-gradient` in `_functions.scss` to generate dynamic CSS values.

### Placeholder Selectors
Placeholder selectors, like `%time-to-read-style` and `%padding-bottom`, are used for common styles that can be extended in various parts of the code.

### Mixins
Mixins are defined in `_mixins.scss` and provide a way to reuse sets of styles across the application.

### Functions
Custom functions are defined in `_functions.scss` to generate dynamic CSS values based on function parameters.


