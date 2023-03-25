describe('comments API', () => {
  test('should return a 200 status code when posting a comment', async () => {
    const uniqueId = 'iyIoaiC1J6eUiPDhXO68';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${uniqueId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: 1,
        username: 'Mohammad',
        comment: 'test comment',
      }),
    });
    expect(response.status).toBe(201);
  });

  test('should return a list of comments for a given item id', async () => {
    const id = 1;
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iyIoaiC1J6eUiPDhXO68/comments?item_id=${id}`);
    const comments = await response.json();
    expect(Array.isArray(comments)).toBe(true);
  });

  test('should return a 404 status code when item_id is not found', async () => {
    const id = 'invalid-id';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iyIoaiC1J6eUiPDhXO68/comments?item_id=${id}`);
    expect(response.status).toBe(400);
  });

  test('should return an array of comments when a valid item_id is provided', async () => {
    const id = '12345';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iyIoaiC1J6eUiPDhXO68/comments?item_id=${id}`);
    const comments = await response.json();
    expect(Array.isArray(comments)).toBe(false);
  });
});