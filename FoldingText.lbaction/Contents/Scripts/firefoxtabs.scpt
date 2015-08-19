-- All code grabbed and requested help with from generous parties and unsuspecting github users.
--
-- Create Markdown link from front most tab in safari and append
-- to end of current FoldingText document as new list item.
-- UNCOMMENT FOR USE IN ALFRED
on run

	-- -- -- -- -- -- -- -- --
	--
	-- BEGIN - INSERT ROUNDED TIME FUNCTION
	--
	-- SHOULD MAKE IT A LIBRARY
	-- i.e. path from "go to file" or clintxs' "getCurrentDocument()"
	--
	-- -- -- -- -- -- -- -- --

	-- https://gist.github.com/Zettt/1081322
	--
	-- Inserts rounded time (15 minutes). Can be called from, e.g. TextExpander. (AppleScript version)

	-- AM/PM script by - http://forums.macrumors.com/showpost.php?p=9845114&postcount=2

	set currentHour to hours of (current date)
	set currentMinute to minutes of (current date)
	set pre to "AM" -- AM/PM script addition
	if (currentHour > 12) then -- AM/PM script addition
		set currentHour to (currentHour - 12) -- AM/PM script addition
		set pre to "PM" -- AM/PM script addition
	end if -- AM/PM script addition

	if (currentHour ≥ 0) and (currentHour < 10) then
		set currentHour to "0" & currentHour
	end if

	if (currentMinute ≥ 0) and (currentMinute ≤ 7) then
		set currentMinute to "00"
	else if (currentMinute > 7) and (currentMinute ≤ 23) then
		set currentMinute to "15"
	else if (currentMinute > 23) and (currentMinute ≤ 37) then
		set currentMinute to "30"
	else if (currentMinute > 37) and (currentMinute ≤ 52) then
		set currentMinute to "45"
	else if (currentMinute > 52) then
		set currentMinute to "00"
		set currentHour to currentHour + 1
		----Get "AM or PM"
		--set Pos to offset of " " in timeStr
		--set theSfx to characters (Pos + 1) through end of timeStr as string
	else
		return "Error"
	end if

	-- return (currentHour as string) & ":" & (currentMinute as string)

	-- -- -- -- -- -- -- -- --
	--
	-- END - INSERT ROUNDED TIME FUNCTION BEGIN
	--
	-- -- -- -- -- -- -- -- ----


	set time_stamp_rounded to (currentHour as string) & ":" & (currentMinute as string) & (pre as string) -- & " " & (pre as string) -- AM/PM script addition
	-- return time_stamp_rounded

	set the date_stamp to (short date string of (current date))
	set parentText to ("# ") & time_stamp_rounded & " - " & the date_stamp & return & ("### FireFox Tabs") & " - " & " @ta	g1" & return


	## ") & time_stamp_rounded & " - " & the date_stamp & " - " & ("FireFox Tabs") & " @linklist" & return
	set MDLink to ""
	tell application "FireFox"
		set firefoxWindow to window 1
		try
			repeat with t in (tabs of firefoxWindow)
				set TabTitle to (name of t)
				set TabURL to (URL of t) as text
				set MDLink to (MDLink & (" - [" & TabTitle & "]" & "(" & TabURL & ") ") & return)
			end repeat
		end try
	end tell
	tell application "FoldingText"
		tell front document
			evaluate script "function(editor, options) {
                var tree = editor.tree();
                var range = tree.createRangeFromLocation(tree.textLength(), 0);
                tree.replaceTextInRange(range, options.link);
            }" with options {link:(parentText & MDLink)}
		end tell
	end tell
end run
