MyLaunchBarActions
==================

This is my public repository for [LaunchBar 6](http://www.obdev.at/) Actions. My current actions are:

NotePad - Set Note
---

This action allows you to either `send to` or type in the LaunchBar some text and paste or overwrite what is in a [NotePad](https://github.com/raguay/TextBarScripts) note. **NotePad** is a script for keeping notes that runs on [TextBar](http://richsomerfield.com/apps/textbar/).

NotePad - Paste Note
---

This action allows you to paste what is in a [NotePad](https://github.com/raguay/TextBarScripts) note to the topmost application. **NotePad** is a script for keeping notes that runs on [TextBar](http://richsomerfield.com/apps/textbar/).

Evaluate JavaScript
---

This handy action is a good way to test JavaScript; especially, LaunchBar specific JavaScript. Once you have this action installed, simply highlight some JavaScript code, press and hold the key sequence for your LaunchBar. When LaunchBar shows up with the text, send the text to the action. For example, highlight and run this snippet:

    LaunchBar.displayInLargeType({
        title: 'Don’t you just hate this font?',
        string: 'You should.',
        font: 'Comic Sans MS'
    });

When you send it to this action, a large type display in Comic Sans will ask you if you hate this font.

To Buddhist Year
---

This action will convert the current date to the Buddhist calendar and display it in a notification. If a date string is passed, it will convert it to the Buddhist calendar and display it in a notification. The Buddhist date is also copied to the clipboard for easy insertion into a document.

List Processor and List Processor - Options
---

These two actions work together. The List Processor - Options allows you to set the different options for the action. The separator is a character that you want to use to separate the list into different parts. The position is the location in the list for the next retrieval. The forward options tells if the next call will progress forwards in the list or backwards.

By quick sending (cmd-space held until the selection is copied into LaunchBar. Then press tab.) to the List Processor action, you can set the string to be processed. Then just run the List Processor action without a string gets the next item in the list.

This is very handy for sequencing through a list of items.

Add To TaskPaper Projects
---

This action is used to add a new task to a [TaskPaper](https://www.taskpaper.com/) project. If you send a path of a TaskPaper file to this action, it stores that path to add tasks to. Otherwise, if **TaskPaper** is running while you run this action, it will get that files path, store it, and use that file.

Once it has determined what file to use, it asks the user for the task line and which project to add it to. The user simply types the name of the task, and selects the project. That new task will be added to the top of that project.

Paste Through TextExpander
---

This simple action takes a string passed to it and expands it through **[TextExpander](https://smilesoftware.com/textexpander)**. I use it with the Quiver Snippets to use **TextExpander** to place the cursor at a desired point. This action has no configurations.


Quiver Snippets and Quiver Helper
---

The Quiver Snippets action allows you to create and manage snippets in the **[Quiver](http://happenapps.com/#quiver)** application. When you load the action, drill down to either the **Quiver library** file or a **Snippet shared notebook**, and then send that file to the action with a **Quick Send** (tab key normally) to the action. That will configure the action and give you the option of loading the Default data set and the sample snippets. It also allows you to load the help notes into **Quiver**. Please refer to the help file for more information.

The Quiver Helper action allows you use the snippets variation feature. You can not have snippet variations without this action installed.

Quick Load and Quick Load Options
---

This action finds the most recently modified/created file in the Downloads directory and loads it into LaunchBar. You can set the action it use any program you want. If you want a different directory, simply change the name of the directory in the user's home directory in the variable "searchDir".

The Quick Load Options allow you to change the directory being searched by sending a new directory to this action. By running the action (Abbreviation is set to 'lop'), you can set the sort type (by last modified or by last added to the directory) and the order number (Most recent, second most recent, etc.). If you set it to the 5th most recent, but there are only two items, it will correctly get the last item.

The Quick Load action uses the users Download directory, first most recent file, and sort by last modified as the defaults.

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
