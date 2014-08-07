tell application "FoldingText"
	tell front document
		evaluate script "function(editor, options) {
			var Pasteboard = require('ft/system/pasteboard').Pasteboard,
				tree = editor.tree(),			
				results = [];

			tree.nodes().forEach(function(each) {
				if (!editor.nodeIsHiddenInFold(each) && !editor.isCollapsed(each)) {
					results.push(each.line());
				}
			});

			results = results.join('\\n');
			Pasteboard.writeString(results);
			return results;
		}" with options {}
	end tell
end tell
