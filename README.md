## Holvi Datev Prep

All this repo does is contain function I use in a google spreadsheet, to reformat code to make it easier to read.



## how to inject bits of javascript into google spreadsheets

Assuming you have a `.xls` spreadsheet

1. File > Save As Google Sheets
2. Tools > Script Editor
3. Write function in Script Editor, or paste the function you are about into it
4. Save in the Script Editor
5. Call function with same name inside spreadsheet i.e. `=parseHolviDate("J2`)

Updates you make to the function will be re-run in the spreadsheet fi you change it.
