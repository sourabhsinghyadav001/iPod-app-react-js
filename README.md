
# Read before you examine!
All info about the project is given in this readme file, after reading this file the code is assumed to be self-explanatory.  
## Packages used
- Redux toolkit: for global control state like middle button click, mouse rotate gesture, page to be routed.  
- ZingTouch: for detecting mouse rotation while being clicked around the wheel.  

## CSS
- The fast-forward, fast-backward, pause-resume icons are made purely using CSS!  
- For the above icons, absolute positioning is used to place them in the pad.  
- Box shadow is used to make it look good as an iPod in the outer container.
- Appropriate z-indices are used to keep the pad on top, so that it can be clicked and rotated around.

## Components
- The Ipod wrapper component is to render any screen content. It uses Screen component to render it's children on the screen.
- The Pad component is used in Ipod component after screen component.
- MenuPage is the major component which is a template for each menu page, it processes middle button click and navigation by rotation.
- FinalPage is a small component that renders final screen when end of the sub-menu is reached.
- Page Components :They just use MenuPage component to render the pages by providing it the menuItems and next page to be routed info.

## Routing and the Router Component.
- I have NOT used react router! 
- I implemented my own router!
- The Router component returns JSX according to the page-id.
- The App.js just uses redux state to detect change in the router page-id.
## Throttling of rotation.
- I have throttled the rotation to 500ms in the Pad component to stop excessive re-renders and sudden movement of the selected option.
