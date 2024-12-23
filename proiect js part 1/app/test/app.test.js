const express = require('express');
const app = express();

// Configurarea aplicației (middleware, rute etc.)
app.use(express.json());

// Rutele pentru conferințe, articole etc.
app.use('/conferences', require('./routes/conferences'));
app.use('/articles', require('./routes/articles'));

module.exports = app;  // Exportă instanța aplicației
it('should fail to create a conference without name or date', async () => {
    const newConference = {
      description: 'This is a test conference',
    };
  
    const response = await request(app)
      .post('/conferences')
      .send(newConference);
  
    expect(response.status).toBe(400); // Verifică că serverul returnează un error 400
    expect(response.body.message).toBe('Name and date are required'); // Verifică mesajul de eroare
  });
  it('should fail to create a new article without required fields', async () => {
    const newArticle = {
      title: 'Test Article',
    };
  
    const response = await request(app)
      .post('/articles')
      .send(newArticle);
  
    expect(response.status).toBe(400); // Verifică că serverul returnează un error 400
    expect(response.body.message).toBe('Missing required fields'); // Verifică mesajul de eroare
  });
  it('should fail to update article status if article does not exist', async () => {
    const articleId = 9999; // Un ID care nu există
    const updateData = {
      status: 'Approved',
      feedback: 'Great article!',
    };
  
    const response = await request(app)
      .put(`/articles/${articleId}/review`)
      .send(updateData);
  
    expect(response.status).toBe(404); // Verifică că serverul returnează un error 404
    expect(response.body.message).toBe('Article not found'); // Verifică mesajul de eroare
  });
  it('should successfully update article status and feedback', async () => {
    const articleId = 1; // ID-ul unui articol existent
    const updateData = {
      status: 'Approved',
      feedback: 'Great article!',
    };
  
    const response = await request(app)
      .put(`/articles/${articleId}/review`)
      .send(updateData);
  
    expect(response.status).toBe(200); // Verifică că articolul a fost actualizat
    expect(response.body.status).toBe(updateData.status); // Verifică că statusul a fost actualizat corect
    expect(response.body.feedback).toBe(updateData.feedback); // Verifică că feedback-ul a fost actualizat corect
  });
  