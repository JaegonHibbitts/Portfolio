HIBBITTS PORTFOLIO WEBSITE
===========================

FILES
-----
index.html                       Main one-page landing page.
css/styles.css                   All visual styles and responsive layout.
js/main.js                       Fading Engineer/Maker/Designer word rotation,
                                 scrolling header, and mobile menu.
projects/*.html                  Six project detail pages with video areas.
employment/*.html                Six employment detail pages with image areas.
assets/images/                   Placeholder images to replace with your own.
assets/videos/                   Place your real project video files here.

QUICK START
-----------
1. Open index.html in a browser to preview the website.
2. Replace the hero image:
   - Place your background in assets/images/, for example hero-background.jpg.
   - In css/styles.css, update the .hero-home background URL.
3. Replace profile-placeholder.svg with your own portrait or change its
   src in index.html.
4. Replace project and employment card SVG placeholders with your images.
   You may keep the same filenames, or edit the corresponding src links.
5. Put horizontal project videos in assets/videos/ using the filenames
   referenced in each projects/*.html page, or update each source path.
6. Replace social media URLs, Facebook placeholder link, and contact email
   in index.html.

REQUESTED IMPLEMENTATION NOTES
------------------------------
- Typeface: Poppins is loaded from Google Fonts as a close visual match to
  the clean geometric sans-serif style in the supplied design reference.
- Hero role animation: Engineer, Maker, and Designer fade/rotate every second.
- Homepage navigation scrolls to Home, About, Projects, Employment, Contact.
- Project images link to individual video-and-description pages.
- Employment images link to individual image-and-description pages.
- All project videos and employment detail images use a 16:9 landscape frame
  with rounded corners.
- Cards lift and slightly enlarge on hover to show selection.
- Skills pie chart percentages: Mechanical Design 53%, Electrical 27%,
  Software 20%, with light blue, dark blue, and black segments.

PROJECT DETAIL VIDEO FILENAMES
------------------------------
jaybot-demo.mp4
lidar-maze-demo.mp4
ur3e-stacking-demo.mp4
enes100-otv-demo.mp4
nasa-hunch-demo.mp4
mesa-app-demo.mp4
