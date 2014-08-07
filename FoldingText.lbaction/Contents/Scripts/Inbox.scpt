property pTitle : "Add Message to @inbox tag"
property pVer : "0.1"
property pAuthor : "Richard Guay"
property pDescription : "

	1. Looks for a node with the @inbox tag,
	2. add the message given to that point

"

property addMessage : "

	function(editor, options) {
		var tree=editor.tree(), q = options.toString(), result='';

		var tnode=editor.tree().evaluateNodePath('//@inbox')[0];
		if(tnode) {
			var message = tree.createNode(q);
			tnode.appendChild(message);
		} else {
			result = 'No Inbox Found.';
		}
		return(result);
	}

"

on run argv
	tell application "FoldingText"
		set lstDocs to documents
		if lstDocs ≠ {} then
			tell item 1 of lstDocs
				return evaluate script addMessage with options { item 1 of argv }
			end tell
		end if
	end tell
end
