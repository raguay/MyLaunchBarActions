property pTitle : "Add Message to any tag"
property pVer : "0.1"
property pAuthor : "Richard Guay"
property pDescription : "

	1. Looks for a node with the given tag,
	2. add the message given to that point

"

property addMessage : "

	function(editor, options) {
		var tree=editor.tree(), q = options.toString().trim().split('|'), result='';
		var tag = q[0], q = q[1];
		var tnode=editor.tree().evaluateNodePath('//@'+tag)[0];
		if(tnode) {
			var message = tree.createNode(q);
			tnode.appendChild(message);
		} else {
			result = 'No ' + tag + ' Found.';
		}
		return(result);
	}

"

on run argv
	tell application "FoldingText"
		set lstDocs to documents
		if lstDocs ≠ {} then
			tell item 1 of lstDocs
				return evaluate script addMessage with options { item 1 in argv }
			end tell
		end if
	end tell
end run
