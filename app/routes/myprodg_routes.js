module.exports = function(app, db) {
	
/*
APP POST
*/

	app.post('/feedback', (req, res) => {
	const feedback = {
        tutor: req.body.tutor,
        student: req.body.student,
        module: req.body.module,
        lesson: req.body.lesson,
        timearrived: req.body.timearrived,
        timeleft: req.body.timeleft,
        conceptsLearned: req.body.conceptslearned,
        projectsCompleted: req.body.projectscompleted,
        tutorNotes: req.body.tutornotes,
        date: req.body.date
    }

    db.collection('tutors').insert(feedback, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
      	res.send(result.ops[0]);
      }
    });
  });

/*
END OF APP POST
*/

/*
BEGINNING OF APP GET
*/

	app.get('/feedback', (req, res) => {
	  	const result = db.collection('tutors').find({}).toArray((err, item) => {
	  		if (err) console.log(err);
		    res.send(item);
	  	})
	});

/*END OF APP GET
*/

}