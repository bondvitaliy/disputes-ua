# disputes-ua
disputes.ua new design

CURRENT ISSUES

1. +++ margin-padding head index - hero - (maybe remove the height) - !DONE! - 

1.1. maybe redo the CONTACTS + FORM above footer - resize the paddind -80px??? - !Ask Dmytro!

2. +++ Installation of fonts - Lato Cyrillic - !DONE!

3. set the hovers + focus of all elements

4. contacts + form - remove the border-radius 15px and enlarge the size to the end of the page

5. +++ make a full-size map to the end of the page - NOT NEEDED

6. pop-up elements???

7. work with comments on Figma

8. make the single svg spray

9. replace the old SVGs with new rounded

10. language switcher - make button lang clickable

11. chat button - replace png with svg + white dots indise (non-transparent)

12. set the links to all the buttons and internal links

13. make a list of the designer's issues

14. +++ create a GitHub project - !DONE!

15. +++ Correct padding in the container - !DONE!

16. +++ False margins and paddings on all pages - !DONE!

17. the drop-down menu on the services page

18. sections -> add headers to all (display none if needed) - WORK IN PROGRESS

19. add some semantic tags such as <q>, <article>, <cite> etc. WORK IN PROGRESS

20. add the correct styles to the image: ex. border-radius 100px, overflow: hidden;

21. +++ Turn rgba colors into hex in the variables - !DONE!

22. +++ remove NBSPs - "white-space: pre-line" instead - !DONE!

23. correct padding-margin on Service buttons

24. add shadows on hanging elements - buttons, forms, etc - WORK IN PROGRESS - SHOW TO THE BOSS

25. add cursor pointer on all buttons - WORK IN PROGRESS

26. change the photo of boss (use overflow: hidden; on the img)



// MAIN ISSUES

1. do the ABOUT page

2. do the buttons on SERVICE pages

3. do the CHAT FORM

4. do the LANGUAGE button

5. do the PUBLICATIONS page to the end

6. do the OPENED SERVICE page - !Ask Dmytro!



// FINAL EDITIONS

1. Remove code from font properties:
- font-family - only once on bodyб others to be deleted;
- remove 'font-weight: 400;' - it's default value;
- remove 'font-style: normal;' - it's default value;

2. Turn all 'line-height: 14px;' and others into relative values f.e. 
- 'line-height: 1.2;'
- 'line-height: 147%;'
- 'line-height: calc(14 / 12);'

3. remove all comments in final css/html/js (if needed) - maybe except sections

4. find all min-(max-) width, height and find out if they not conflicted with layout

5. check all hovers

6. check all links

7. remove 'index.css', 'about.css'  etc from the <head> of the pages, put in for all of them 'main.css' instead

8. add webkit prefix for all css code