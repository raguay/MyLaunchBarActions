tell application "FoldingText"
  tell front document
    evaluate script "function(editor, options) {
      var tree = editor.tree(),
        item = editor.selectedRange().startNode,
        itemPage = item.parent;

      while (itemPage && itemPage.text() !== 'Autofocus') {
        itemPage = itemPage.parent;
      }

      if (itemPage) {
        var pagesParent = itemPage.parent,
          lastPage = pagesParent.lastChild,
          reenterItem = tree.createNode(item.line());

        tree.beginUpdates();        
        if (lastPage === itemPage || lastPage.children().length > 30) {
          lastPage = tree.createNode('# Autofocus.todo');
          pagesParent.appendChild(tree.createNode());
          pagesParent.appendChild(lastPage);
        }        
        lastPage.appendChild(reenterItem);
        item.addTag('done');
        tree.endUpdates();
      }
    }" with options {}
  end tell
end tell
