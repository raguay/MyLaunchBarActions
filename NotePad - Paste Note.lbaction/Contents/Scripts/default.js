// LaunchBar Action Script

function run(argument) {
   run()
}

function runWithItem(item) {
   //
   // A note was sent. Save to notepad.
   //
   run()
}

function runWithString(msg) {
   run()
}

function run() {
   //
   // It is definitely a string. Save.
   //
   return([
         {
            title: 'From NotePad 1',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 1
            }
         },
         {
            title: 'From NotePad 2',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 2
            }
         },
         {
            title: 'From NotePad 3',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 3
            }
         },
         {
            title: 'From NotePad 4',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 4
            }
         },
         {
            title: 'From NotePad 5',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 5
            }
         },
         {
            title: 'From NotePad 6',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 6
            }
         },
         {
            title: 'From NotePad 7',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 7
            }
         },
         {
            title: 'From NotePad 8',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 8
            }
         },
         {
            title: 'From NotePad 9',
            action: 'pasteFromNotePad',
            actionArgument: {
               noteid: 9
            }
         },
      ])
}

function pasteFromNotePad(obj) {
   var url = 'http://localhost:9978/api/note/' + obj.noteid + '/a'
   var req = HTTP.getJSON(url)
   LaunchBar.paste(req.data.note)
}
