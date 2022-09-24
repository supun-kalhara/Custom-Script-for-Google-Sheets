# Custom-Email-Script-for-Google-Sheets

Overview:
Custom Script for Google Sheet which automatically removes edit permissions for every user except owner for a set range of cells in a row and automatically sends an email with the the values of certain cells.

Instructions:

1) Import sample sheet through google sheets online
**Important** (make sure the sheet is imported properly and is of type google sheet and not .xlsx)
3) Go to: Extensions -> Apps Script
4) Copy and Paste the script from script.js file
5) Set email address in controllerEmail variable
6) Go to: Triggers -> Add Trigger
7) Set "Event Source" to From SpreadSheet
8) Set "Event Type" to On edit
9) Tick a checkbox on the sheet to get the email
