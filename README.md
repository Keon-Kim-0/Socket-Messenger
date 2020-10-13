# Messenger
messenger for web/phones

please use npm run dev


in alpha 1.1(current version)

=======auto scroll========

//currently working on mozilla firefox 84/ie10+/safari on pc and android(z flip & galaxy s8)/iphone x

**AVOID USING WEBKIT FOR THIS (everything is done in javascript due to compatibility reasons)

-auto scroll for web
-auto scroll for phone
-smooth auto scroll animation
-disable auto scroll when client is reading previous messages + enable autoscroll when reading recent messages.

*for future version:
-phone keyboard pop up messes with current scroll position detection(which is used to check if disable/enable autoscroll)

=======chat features======

-different color text for user name and message text
-announcement system (currently has 'disconnect' and 'connect')
-announcement in blue
-auto line break (\n) counting in the username(different element) characters to prevent chat elements sticking out of <div>

*for future version:
-sent out text(you) should be text-alligned to the right and be classed differently client-side(or else all text will be alligned right-side)

======sticky nav bar=====

*for future version:
-div class='sticky' needs to be a sticky header.(needs css html and JS tweak)

=======user list========

*for future version:
-needs a right side menu that hides unless clicked/hovered. shows list of currently online user ID's (server-side variable userid)
-list should be managed server side
-possibly listing by most frequently talked user (client side)

=======DM system========

*for future version:
-have seperate chat show up for different combination of users
- chat should be saved so that previous chat shows up when returned

========================

