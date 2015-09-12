MyLaunchBarActions
==================

This is my public repository for [LaunchBar 6](http://www.obdev.at/) Actions. My current actions are:

DockShelf.app
---

[DockShelf](http://www.thealchemistguild.com/dockshelf/) is a great dock replacement program for Mac OS X. The following actions are for this program:

**DockShelfWorkspaces.lbaction**

This action has an abbreviation set to `dsws` to show a list of workspaces defined. When you select one, **DockShelf** will switch to that workspace.

FoldingText.app
---

[FoldingText](foldingtext.com) is a great markdown editor. It is easily extendable with scripts and extensions. Here, I have the LaunchBar scripts that I use with FoldingText.

**FoldingText.lbaction**

This is a collection of quick scripts for performing different actions. You type the keyword **ft-action** that will list all the possible actions. As you type a title, the list will shorten to the one you want. The possible actions are:

- **FoldingText Documents** - a list of available documents about FoldingText.
- **Open Selection** - Will take the currently selected file in either **Finder** or **PathFinder** and open it in FoldingText.
- **Get Visible Text** - All non-folded text will be copied to the clipboard.
- **Chrome Tabs** - A link to each tab in the topmost Chrome browser will be listed in the topmost FoldingText document at the current location.
- **Safari Tabs** - A link to each tab in the topmost Safari browser will be listed in the topmost FoldingText document at the current location.
- **Remove Tags** - Will give a list of the tags in the topmost FoldingText document and remove the tags you select.
- **Marked** - Opens the topmost FoldingText document in **[Marked 2.app]()**.
- **Next** - This will find the first @next tag in the document, change it to done with the current date and time, and move the @next tag to the next item.

**FoldingTextAddToTag.lbaction**

This action is triggered with **ft-addtotag**. When triggered, you can type anything and have that added to the tag you select from a list of tags obtained from the topmost document. Therefore, if you topmost document has a @inbox tag, it will list it for you to add a new item. 

**FoldingTextBookMarks.lbaction**

This action is triggered by **ft-bookmark**. It will prompt you with a list of actions: **go to bookmark**, **make bookmark**, **remove bookmard**, or **install bookmark activator**. 

The **make-bookmark** requires you to add a text to set as the title for the bookmark. Therefore, type **mark|This is my title** will get the current location in the topmost FoldingText document and remember it with the title **This is my title**. The **|** tells the script that the next item is the title.  The **make-bookmark** also lease the URI in the clipboard.

The **get-bookmark-UIR** will simple get the URI for the current location in the current FoldingText document and place it in the clipboard. You can then paste it in to another application or document. Great for making jump to lists.

In order to go to a bookmark, the **bookmark activator** has to be ran at least once on your system. This will add a special URI handler for FoldingText bookmarks.

**FoldingTextGoToTag.lbaction**

This action is triggered with **ft-gototag**. It will show a list of tags from the topmost document. You select the one you want focused.

**FoldingTextInbox.lbaction**

This action is triggered with **ft-inbox**. It allows you to type any text and have it appended to the bottom of that tag. Therefore, if you have a todo list with a tag of @inbox, you can type **- I need to do this** and it will be added to the todo list properly.

Quick Edit
---

The four actions **Quick Edit Copy.lbaction**, **Quick Edit Clipboard**, **Quick Edit Paste.lbaction**, and **Quick Edit Set Editor.lbaction** are used to perform a similar function as the now defunct program **QuickEdit**. 

To use these actions, you have to first set your default **Quick Edit** editor by having it as the topmost application when you run the **Quick Edit Set Editor** action. The **Quick Edit** functionality is now usable.

With the application open that contains text you want to edit in another application, run the **Quick Edit Copy** action. Then make your changes and run the **Quick Edit Paste** action. The text will be copied back to the original application.

If you just want to edit a selection, first copy the selection and run the **Quick Edit Clipboard** action. Then make your changes to in the selected **Quick Edit** editor and  run the **Quick Edit Paste** action.

[Customct.com](http://customct.com)
---

If you like these LaunchBar 6 actions, you can check out my web site for more types of scripts and tutorials. You will find items about WordPress, Alfred 2, Popclip, etc. to name a few. If you like the scripts and they are helpful to you, please concider a donation for their continued development. A PayPal button is on the website.