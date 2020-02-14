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
            title: 'From ScriptPad 1',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 1
            }
         },
         {
            title: 'From ScriptPad 2',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 2
            }
         },
         {
            title: 'From ScriptPad 3',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 3
            }
         },
         {
            title: 'From ScriptPad 4',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 4
            }
         },
         {
            title: 'From ScriptPad 5',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 5
            }
         },
         {
            title: 'From ScriptPad 6',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 6
            }
         },
         {
            title: 'From ScriptPad 7',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 7
            }
         },
         {
            title: 'From ScriptPad 8',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 8
            }
         },
         {
            title: 'From ScriptPad 9',
            action: 'pasteFromScriptPad',
            actionArgument: {
               noteid: 9
            }
         },
      ])
}

function pasteFromScriptPad(obj) {
   var url = 'http://localhost:9978/api/note/' + obj.noteid + '/a'
   var req = HTTP.getJSON(url)
   LaunchBar.paste(req.data.note)
}
