
firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Sergey',
		age: 30
	},
});

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push({
	text: 'Walk the dog'
});