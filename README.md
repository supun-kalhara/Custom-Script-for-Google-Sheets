# Custom-Script-for-Google-Sheets

Overview:
Custom Script for Google Sheet which automatically removes edit permissions for every user except owner for a set range of cells in a row and automatically sends an email with the the values of certain cells.

Instructions:

1) Open sample sheet as a google sheet online
2) Go to: Extensions -> Apps Script
3) Copy and Paste the script from script.js file
4) Set email address in controllerEmail variable
5) Go to: Triggers -> Add Trigger
6) Set "Event Source" to From SpreadSheet
7) Set "Event Type" to On edit
8) Tick a checkbox on the sheet to get the email
