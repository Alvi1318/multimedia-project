# Technical Report: Tourism in Sarrià de Ter

**Subject:** Multimedia & Web Development  
**Student:** Alex Cotano Bueno  
**Degree:** Computer Engineering (3rd Year)

## 1. Description of the Page Structure (Wireframe)

The website is designed as a **Single Page Application (SPA)** with a vertical scrolling layout. The structure is clean and organized into distinct sections to improve User Experience (UX).

The visual hierarchy is as follows:

1.  **Header:** Contains the title and the main slogan.
2.  **History Section:** A brief introduction to the town with an integrated **edited image**.
3.  **Video Section:** A dark section highlighting the **promotional video**.
4.  **Festivals:** Information cards about local traditions.
5.  **Interactive Section (The Core):**
    * **Audio Guide:** An audio player with instructions.
    * **Activity List:** A grid of cards displaying tourist activities (products).
    * **Shopping Cart:** A dynamic list showing selected activities and the total price.
6.  **Map:** An embedded Google Map showing the location.
7.  **Footer:** Copyright and credits.

*Note: Since this is a React project, each of these sections corresponds to a reusable component in the code.*

## 2. Implemented Features and Multimedia Elements

### A. React Features
I used the **Create React App** template. The logic follows the **Model-View-Controller** pattern simplified with Hooks:
* **Components:** The UI is split into small pieces (e.g., `TargetaActivitat.js`, `Cistella.js`) to make the code reusable and clean.
* **State Management (`useState`):** I used the `useState` hook in `App.js` to manage the "cart" array. When the user clicks "Join In", the specific activity object is added to the state array, and the UI updates automatically to show the new item and calculate the total price.
* **Props:** Data is passed from the parent (`App.js`) to the children components using props.

### B. Multimedia Integration
Following the assignment requirements, I created and integrated the following assets:

* **Edited Image (GIMP):**
    * *File:* `/assets/imatge_editada.jpg`
    * *Process:* I took a photo of the town and used **GIMP** to improve the colors (Levels/Curves). I applied an "Artistic" filter to give it a painted look and added a text overlay with a Drop Shadow effect, as explained in the class notes.
    
* **Promotional Video (Blender):**
    * *File:* `/assets/video_promo.mp4`
    * *Process:* I used the **Blender Video Sequence Editor**. I imported several photos of Sarrià de Ter and a background music track. I added a Text Title ("Descobreix Sarrià") at the beginning and used "Gamma Cross" transitions between the images to make it look professional.
    
* **Audio Clip:**
    * *File:* `/assets/audio_ambient.mp3`
    * *Process:* I recorded a voice-over acting as a tourist guide in English. I mixed it with soft background music to create a 35-second introduction that invites the user to use the interactive section.

## 3. Development Process

The development was divided into three main stages:

1.  **Setup and Structure:**
    First, I initialized the project using `npx create-react-app`. I cleaned up the default files and created the folder structure: `components` for the logic and `public/assets` for the media files.

2.  **Coding the Components:**
    I started coding the static components (`Header`, `Footer`, `History`). Then, I focused on the dynamic part: the `LlistaActivitats` and the `Cistella`. I implemented the `afegirALaCistella` function to handle the user interaction. I used standard CSS to style the cards and the sections, ensuring a responsive layout using Flexbox.

3.  **Multimedia Creation and Integration:**
    Once the code was working, I switched to GIMP and Blender to create the assets. Finally, I integrated them into the React code using the standard HTML5 tags (`<video>`, `<audio>`, `<img>`) pointing to the public folder.

## 4. Access to the Live Website

The project has been successfully deployed using **GitHub Pages**, making it accessible online from any browser without the need for local installation.

You can visit the live version of the website at the following link:
* **Live URL:** [https://alvi1318.github.io/multimedia-project/](https://alvi1318.github.io/multimedia-project/)
