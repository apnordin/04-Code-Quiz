# 04: Code Quiz

# Notes
Tried to use replaceChild instead of removeChild and appendChild in order to be more efficient. However, research indicated that in doing so, I would need to define the variables for the following Question Page's elements within each function rather than defining them once and being done.

Much later on, I learned about the innerHTML = "" trick. I could have been u sing this to clear the mainContent after every button click rather than using removeChild for every single one. Went back and replaced almost every instance of removeChild with innerHTML="".

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

# Completion Checklist

- Dynamic webpage uses a "mainContent" div to display several distinct screens: Start Page, Question 1, Question 2, 3, 4, 5, Finish Screen
    - Navbar is consistent throughout these screens
    - Webpage uses "body" to display High Score screen, navbar no longer visible
- Quiz is timed, starting with click of Start button
- Timer is displayed in the top right
- Wrong answers subtract time (15s) from the clock
- Final time is displayed on Finish screen
- Entering initials into the form and clicking Submit brings you to the High Score page with initials and score displayed

** Have not yet successfully incorporated local storage to allow for storage/ranking of high scores