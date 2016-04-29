// formatting.addButtonDispatch() is used here because 
// composer.addButton() is missing the argument for the 
// tooltip title.  This argument was added in composer version 3.0.27.  
$('document').ready(function() {
	require(['composer', 'composer/controls', 'composer/formatting'], function(composer, controls, formatting) {
		formatting.addButtonDispatch('del-ins', function(textarea, selectionStart, selectionEnd) {
			if (selectionStart === selectionEnd) {
				controls.insertIntoTextarea(textarea, '<del></del><ins></ins>');
				controls.updateTextareaSelection(textarea, selectionStart + 5, selectionStart + 5);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '<del>', '</del><ins></ins>');
				controls.updateTextareaSelection(textarea, selectionEnd + 16, selectionEnd + 16);
			}
		});
		formatting.addButtonDispatch('abbr', function(textarea, selectionStart, selectionEnd) {
			if (selectionStart === selectionEnd) {
				controls.insertIntoTextarea(textarea, '<abbr title=""></abbr>');
				controls.updateTextareaSelection(textarea, selectionStart + 13, selectionStart + 13);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '<abbr title="">', '</abbr>');
				controls.updateTextareaSelection(textarea, selectionStart + 13, selectionStart + 13);
			}
		});
		formatting.addButtonDispatch('spoiler', function(textarea, selectionStart, selectionEnd) {
			if (selectionStart === selectionEnd) {
				controls.insertIntoTextarea(textarea, '[spoiler][/spoiler]');
				controls.updateTextareaSelection(textarea, selectionStart + 9, selectionStart + 9);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '[spoiler]', '[/spoiler]');
				controls.updateTextareaSelection(textarea, selectionStart + 9, selectionEnd + 9);
			}
		});
	});
});


