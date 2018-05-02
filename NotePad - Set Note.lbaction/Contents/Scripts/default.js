// LaunchBar Action Script

function run(argument) {
   if (argument == undefined) {
      // Inform the user that there was no argument
      LaunchBar.alert('I have to have something to put.');
   } else {
      runWithItem(argument)
   }
}

function runWithItem(item) {
   //
   // A note was sent. Save to notepad.
   //
   if (item instanceof String) {
      runWithString(item.title)
   } else if (typeof item.title !== 'undefined') {
      runwithString(item.title)
   }
}

function runWithString(msg) {
   //
   // It is definitely a string. Save.
   //
   return([
         {
            title: 'To NotePad 1',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 1
            }
         },
         {
            title: 'To NotePad 2',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 2
            }
         },
         {
            title: 'To NotePad 3',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 3
            }
         },
         {
            title: 'To NotePad 4',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 4
            }
         },
         {
            title: 'To NotePad 5',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 5
            }
         },
         {
            title: 'To NotePad 6',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 6
            }
         },
         {
            title: 'To NotePad 7',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 7
            }
         },
         {
            title: 'To NotePad 8',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 8
            }
         },
         {
            title: 'To NotePad 9',
            action: 'appendOrWrite',
            actionArgument: {
               msg: msg,
               noteid: 9
            }
         },
      ])
}

function appendOrWrite(obj) {
   return([         {
            title: 'Append to Note',
            action: 'pasteToNotePad',
            actionArgument: {
               msg: obj.msg,
               noteid: obj.noteid,
               append: 'a'
            }
         },
         {
            title: 'Overwrite Note',
            action: 'pasteToNotePad',
            actionArgument: {
               msg: obj.msg,
               noteid: obj.noteid,
               append: 'w'
            }
         },
      ])
}

function pasteToNotePad(obj) {
   var url = 'http://localhost:9978/api/note/' + obj.noteid + '/' + obj.append
   var req = HTTP.createRequest(url, {
      method: 'PUT',
      body: { note: obj.msg },
      bodyType: 'json'
   })
   var res = HTTP.loadRequest(req)
}